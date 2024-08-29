import { useCallback, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ScrollSpy from "../assets/utils/scrollSpy";
import { LeftMenu, RightMenu, TopMenu } from "../component/Menu";

import { Work } from "./Work";
import { About } from "./About";
import { Loader } from "./Loader";
import { Contact } from "./Contact";
import { Project } from "./Project";
import { Education } from "./Education";
import { Rain } from "../component/Rain";
import { MyServices } from "./MyServices";
import Context from "../component/Context";
import { useHome } from "../component/useHome";

export const Home = () => {
	const navigate = useNavigate()
	const [rainActive, setRainActive] = useState(false)

	const changeRainActive = useCallback(() => {		
		setRainActive(prevState => !prevState);
	}, []);

	const {
		data,
		loading,
		darkMode,
		leftMenu,
		rightMenu,
		darkModeBody,
		isDataLoaded,
		changeMainColor,
		changeActiveLeftMenu,
		changeActiveRightMenu,
	} = useHome();


	if (loading.name !== "main" || loading.active) {
		return <Loader />;
	}

	if (!isDataLoaded) {
		navigate("/404");
		return null;
	}

	return (
		<Context.Provider value={{
			data,
			darkMode,
			leftMenu,
			rightMenu,
			rainActive,
			darkModeBody,
			changeMainColor,
			changeRainActive,
			changeActiveLeftMenu,
			changeActiveRightMenu
		}}>
			<Rain />
			<TopMenu />
			<LeftMenu />
			<RightMenu />
			<Main id="main" onScroll={ScrollSpy}>
				<About />
				<MyServices />
				<Education />
				<Work />
				<Project />
				<Contact />
			</Main>
		</Context.Provider>
	);
};

const Main = styled.div`
    left: 332px;
    height: 100dvh;
    position: fixed;
    overflow-y: auto;
    padding-bottom: 30px;
    width: calc(100% - 452px);

    @media (max-width: 1400px) {
        left: 32px;
        width: calc(100% - 152px);
    }

    @media (max-width: 768px) {
        left: 16px;
        padding-bottom: 0;
        width: calc(100% - 32px);
        height: calc(100dvh - 160px);
    }
`;