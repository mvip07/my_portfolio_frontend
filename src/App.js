import "./App.css";

import { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import { Route, Routes, useNavigate } from "react-router-dom";

import { Home } from "./pages/Home";
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
import { NewPassword } from "./pages/auth/NewPassword";
import { ConfirmVerify } from "./pages/auth/ConfirmVerify";
import { ForgotPassword } from "./pages/auth/ForgotPassword";

import API from "./assets/utils/axios";
import { Menu } from "./assets/utils/Menu";
import PrivateRouter from "./assets/utils/privateRouter";

import { Work } from "./admin/pages/work/Work";
import { About } from "./admin/pages/about/About";
import { Messages } from "./admin/pages/Messages";
import { AdminMain } from "./admin/pages/AdminMain";
import { Project } from "./admin/pages/project/Project";
import { Education } from "./admin/pages/education/Education";
import { MyServices } from "./admin/pages/service/MyServices";
import { Authorization } from "./admin/pages/authorization/Authorization";
import { SentToken } from "./pages/auth/SentToken";
import { PageNotFound } from "./pages/PageNotFound";
import { Forbidden } from "./pages/Forbidden";

function App() {
	const navigate = useNavigate();
	const [ipAddress, setIpAddress] = useState(null);
	const [deviceType, setDeviceType] = useState('');

	useEffect(() => {
		const detectDevice = () => {
			const userAgent = navigator.userAgent;
			if (/mobile/i.test(userAgent)) {
				return 'Mobile';
			} else if (/tablet/i.test(userAgent) || /iPad|Android/i.test(userAgent)) {
				return 'Tablet';
			} else {
				return 'Desktop';
			}
		};

		setDeviceType(detectDevice());
	}, []);

	useEffect(() => {
		const fetchIPAddress = async () => {
			try {
				const response = await API.get('https://ipapi.co/json/');
				const data = response.data;
				const ipData = { ip: data.ip, location: { ...data, device: deviceType }, block: false };
				setIpAddress(ipData);
			} catch (error) {
				console.error('Error fetching IP address:', error);
			}
		};

		if (deviceType) {
			fetchIPAddress();
		}
	}, [deviceType]);

	useEffect(() => {
		const checkBannedCountry = async () => {
			if (ipAddress) {
				try {
					const { data } = await API.post("/banned/country", { country_name: ipAddress.location.country_name });
					if (data?.banned) {
						navigate("/403");
					} else {
						await API.post('/create/visitor', ipAddress);
					}
				} catch (err) {
					const bannedStatus = err?.response?.data?.banned;
					if (bannedStatus) {
						navigate("/403");
					}
				}
			}
		};

		checkBannedCountry();
	}, [ipAddress, navigate]);

	return (
		<>
			<ToastContainer />
			<Routes>
				<Route element={<PageNotFound />} path="*" />
				<Route element={<Forbidden />} path="/403" />
				<Route element={<PageNotFound />} path="/404" />

				<Route element={<Home />} path="/" />
				<Route element={<Login />} path="/login" />
				<Route element={<Register />} path="/register" />
				<Route element={<SentToken />} path="/check/email" />
				<Route element={<ForgotPassword />} path="/forgot/password" />
				<Route element={<NewPassword />} path="/new/password/:token/" />
				<Route element={<ConfirmVerify />} path="/confirm/verify/:email" />


				<Route element={
					<PrivateRouter>
						<Menu><AdminMain /></Menu>
					</PrivateRouter>
				} path="/dashboard" />

				<Route element={
					<PrivateRouter>
						<Menu><Work /></Menu>
					</PrivateRouter>
				} path="/dashboard/work" />

				<Route element={
					<PrivateRouter>
						<Menu><About /></Menu>
					</PrivateRouter>
				} path="/dashboard/about" />

				<Route element={
					<PrivateRouter>
						<Menu><Project /></Menu>
					</PrivateRouter>
				} path="/dashboard/project" />

				<Route element={
					<PrivateRouter>
						<Menu><Messages /></Menu>
					</PrivateRouter>
				} path="/dashboard/messages" />

				<Route element={
					<PrivateRouter>
						<Menu><MyServices /></Menu>
					</PrivateRouter>
				} path="/dashboard/services" />

				<Route element={
					<PrivateRouter>
						<Menu><Education /></Menu>
					</PrivateRouter>
				} path="/dashboard/education" />

				<Route element={
					<PrivateRouter>
						<Menu><Authorization /></Menu>
					</PrivateRouter>
				} path="/dashboard/authorization" />
			</Routes>
		</>
	);
}

export default App;
