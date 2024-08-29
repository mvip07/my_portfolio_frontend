import styled from "styled-components";
import API from "../../assets/utils/axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginImg from "../../assets/img/loginImg.png";
import { showToast } from "../../assets/utils/toatify";

export const Login = () => {
    const navigator = useNavigate()
    const [register, setRegister] = useState({});
    const [loading, setLoading] = useState(false);
    const [passwordVisible1, setPasswordVisible1] = useState(false);

    const togglePasswordVisibility1 = useCallback(() => {
        setPasswordVisible1((prev) => !prev);
    }, []);

    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setRegister((prev) => ({ ...prev, [name]: value }));
    }, []);

    const registerSubmit = async () => {
        setLoading(true);
        try {
            const res = await API.post("/login", register);
            showToast("success", res.data.message);

            localStorage.setItem("portfolio", JSON.stringify(res.data.user))
            setTimeout(() => navigator("/dashboard"), 2000);
        } catch (error) {
            if (error?.response?.data?.isVerified === "isNotVerified") {
                navigator(`/confirm/verify/${register.email}`)
            }
            showToast("error", error.response.data.message || "Enter the information correctly");
        } finally {
            setLoading(false);
        }
    };

    return (
        <LoginPage>
            <div className="flex-content">
                <div className="images">
                    <img className="login-image" src={LoginImg} alt="Login Images" />
                </div>
                <div className="form">
                    <h2 className="form-title">Welcome to Sneat! 👋🏻</h2>
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Your Email</label>
                        <input type="email" id="email" name="email" className="form-input" onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input type={passwordVisible1 ? "text" : "password"} className="form-input" id="password" name="password" onChange={handleInputChange} />

                        <div className="eyes" onClick={togglePasswordVisibility1}>
                            {passwordVisible1 ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                        </div>
                    </div>
                    <div className="form-btn">
                        <p className="forgot"><a href="/forgot/password">Forgot Password ?</a></p>

                        <button className="submit" onClick={registerSubmit} disabled={loading} >
                            {loading ? "Loading..." : "Send Message"}
                        </button>
                        <p className="register">Do you have an account? <a href="/register">Sign In</a></p>
                    </div>
                </div>
            </div>
        </LoginPage>
    );
};

const LoginPage = styled.div`
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

    .images {
        width: 100%;
        height: 100%;
    }

    .images .login-image {
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

    .form-group {
        width: 100%;
        margin: 20px 0;
        position: relative;
    }

    .form-group .form-label {
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

    .form-group .form-input {
        border: 0;
        outline: 0;
        width: 100%;
        border-radius: 8px;
        padding: 12px 16px;
        background: var(--darkWhite);
    }

    .eyes {
        top: 39px;
        right: 20px;
        position: absolute;
    }

    .eyes i {
        font-size: 20px;
        color: var(--mainCl);
    }

    .form-btn .submit {
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

    .form-btn p {
        opacity: 60%;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        text-align: center;
        color: var(--black);
    }

    .form-btn p.forgot {
        text-align: right;
    }

    .form-btn a {
        opacity: 1;
        font-weight: 500;
        color: var(--mainCl);
        text-decoration: none;
    }

    @media (max-width: 992px) {
        .flex-content {
            justify-content: center;
        }

        .images {
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
