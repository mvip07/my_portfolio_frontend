import styled from "styled-components";
import { useRef, useState } from "react";
import API from "../../assets/utils/axios";
import { showToast } from "../../assets/utils/toatify";
import { useNavigate, useParams } from "react-router-dom";

import ForgotImg from "../../assets/img/registerImg.png";

export const ConfirmVerify = () => {
	const { email } = useParams()
	const inputsRef = useRef([]);
	const navigate = useNavigate()
	const [loading, setLoading] = useState(false);
	const [codes, setCodes] = useState(new Array(6).fill(''));

	const handleCodeChange = (index, value) => {
		if (!/^[0-9]$/.test(value)) return;

		const newCodes = [...codes];
		newCodes[index] = value;
		setCodes(newCodes);

		if (value && index < 5) {
			inputsRef.current[index + 1].focus();
		}

		if (!value && index > 0) {
			inputsRef.current[index - 1].focus();
		}
	}

	const clearInputs = () => {
		setCodes(new Array(6).fill(''));
		inputsRef.current[0].focus();
	};

	const verifyCode = async () => {
		setLoading(true);
		try {
			const code = codes.join('');
			const response = await API.post('/confirm/verification/code', {
				email: email,
				inputVerificationCode: code,
			});
			showToast("success", "Verification successful!");
			setInterval(() => navigate("/login"), 1500)
		} catch (error) {
			showToast("error", error.response?.data?.message || "Verification failed!");
			clearInputs();
		} finally {
			setLoading(false);
		}
	};

	const resetCode = async () => {
		try {
			const response = await API.post('/send/verification/code', {
				email: email,
			});
			showToast("success", "Verification code has been successfully sent to email!");
		} catch (error) {
			showToast("error", error.response?.data?.message || "Verification failed!");
		} finally {
		}
	};

	return (

		<Confirm>
			<div className="flex-content">
				<div className="images">
					<img className="confirm-image" src={ForgotImg} alt="Login Images" />
				</div>
				<div className="form">
					<h2 className="form-title">Confirm Verify Code? 🔒</h2>
					<p className="form-description">
						Enter your email and we'll send you instructions to reset your
						password
					</p>
					<div className="flex-group">
						{
							codes.map((code, index) => (
								<div className="form-group" key={index}>
									<input
										type="text"
										value={code}
										maxLength="1"
										disabled={loading}
										className="form-input"
										ref={(el) => (inputsRef.current[index] = el)}
										onChange={(e) => handleCodeChange(index, e.target.value)}
									/>
								</div>
							))
						}
					</div>

					<div className="form-btn">
						<p className="reset" onClick={resetCode}>Reset Code <i className="fa-solid fa-rotate-right"></i></p>
						<button className="submit" onClick={verifyCode} disabled={loading || codes.includes('')}>
							{loading ? "Verifying..." : "Verify Code"}
						</button>
						<p className="back">Back to <a href="/login">Login</a></p>
					</div>
				</div>
			</div>
		</Confirm>

	);
};

const Confirm = styled.div`
	width: 100%;
	height: 100dvh;
	overflow: hidden;

	.flex-content {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}

	.flex-content .images {
		width: 100%;
		height: 100%;
	}

	.flex-content .images .confirm-image {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.form {
		height: 100%;
		padding: 40px;
		min-width: 450px;
		max-width: 576px;
		background: var(--white);
	}

	.form .form-title {
		font-size: 20px;
		font-weight: 700;
		line-height: 28px;
		text-align: left;
	}

	.form .form-description {
		opacity: 60%;
		font-size: 16px;
		font-weight: 400;
		margin-top: 24px;
		text-align: left;
		line-height: 24px;
		color: var(--black);
	}

	.form .flex-group {
		gap: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.form .form-group {
		width: 50px;
		margin: 20px 0;
	}

	.form .form-group .form-input {
		border: 0;
		outline: 0;
		max-width: 100%;
		border-radius: 8px;
		padding: 12px 16px;
		background: var(--darkWhite);
	}

	.form .form-btn .submit {
		border: 0;
		outline: 0;
		width: 100%;
		font-size: 16px;
		font-weight: 500;
		margin: 24px auto;
		line-height: 24px;
		border-radius: 8px;
		padding: 12px 16px;
		text-align: center;
		color: var(--white);
		background: var(--mainCl);
	}

	.form .form-btn .submit:disabled {
		opacity: .7;
	}

	.form .form-btn .reset {
		opacity: 60%;
		font-size: 16px;
		font-weight: 400;
		line-height: 24px;
		text-align: right;
		color: var(--mainCl);
	}

	.form .form-btn .back {
		opacity: 60%;
		font-size: 16px;
		font-weight: 400;
		line-height: 24px;
		text-align: center;
		color: var(--black);
	}

	.form .form-btn .back a {
		opacity: 1;
		font-weight: 500;
		color: var(--mainCl);
		text-decoration: none;
  	}

	@media (max-width: 992px) {
		.flex-content {
			justify-content: center;
		}

		.flex-content .images {
			display: none;
		}
	}

	@media (max-width: 768px) {
		.form {
			padding: 24px;
			min-width: 100%;
		}
	}

	@media (max-width: 576px) {	
		.form .flex-group {
			gap: 12px;
		}
		
		.form .form-group {
			width: 40px;
		}
	}
`;
