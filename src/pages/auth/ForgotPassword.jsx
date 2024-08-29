import styled from "styled-components";
import ForgotImg from "../../assets/img/registerImg.png";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import API from "../../assets/utils/axios";
import { showToast } from "../../assets/utils/toatify";

export const ForgotPassword = () => {
	const navigator = useNavigate()
	const [forgot, setForgot] = useState({});
	const [loading, setLoading] = useState(false);

	const handleInputChange = useCallback((e) => {
		const { name, value } = e.target;
		setForgot((prev) => ({ ...prev, [name]: value }));
	}, []);

	const forgotSubmit = async () => {
		setLoading(true);
		try {
			const res = await API.post("/forgot/password", forgot);
			showToast("success", res.data.message);
			setTimeout(() => navigator(`/check/email`), 2000);
		} catch (error) {
			showToast("error", error?.response?.data.message || "Enter the information correctly");
		} finally {
			setLoading(false);
		}
	};
	// class

	return (
		<Forgot>
			<div className="flex-content">
				<div className="images">
					<img className="login-image" src={ForgotImg} alt="Login Images" />
				</div>
				<div className="form">
					<h2 className="form-title">Forgot Password? 🔒</h2>
					<p className="form-description">
						Enter your email and we'll send you instructions to reset your
						password
					</p>
					<div className="form-group">
						<label htmlFor="email" className="form-label">Your Email</label>
						<input type="email" name="email" id="email" className="form-input" onChange={handleInputChange} />
					</div>

					<div className="form-btn">
						<button className="submit" onClick={forgotSubmit} disabled={loading} >
							{loading ? "Loading..." : "Send Reset Link"}
						</button>
						<p className="back">Back to <a href="/login">Login</a></p>
					</div>
				</div>
			</div>
		</Forgot>
	)
};

const Forgot = styled.div`
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

	.flex-content .images .login-image {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.form {
		height: 100%;
		padding: 40px;
		max-width: 576px;
		min-width: 450px;
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

	.form .form-group {
		width: 100%;
		margin: 20px 0;
	}

	.form .form-group .form-label {
		opacity: 80%;
		display: block;
		font-size: 14px;
		font-weight: 400;
		text-align: left;
		line-height: 20px;
		margin-bottom: 8px;
		color: var(--black);
		font-family: "Inter";
	}

	.form .form-group .form-input {
		border: 0;
		outline: 0;
		width: 100%;
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
`;
