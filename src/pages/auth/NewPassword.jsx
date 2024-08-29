import styled from "styled-components";
import API from "../../assets/utils/axios";
import { useCallback, useState } from "react";
import LoginImg from "../../assets/img/loginImg.png";
import { showToast } from "../../assets/utils/toatify";
import { useNavigate, useParams } from "react-router-dom";

export const NewPassword = () => {
    const { token } = useParams()
    const navigator = useNavigate()

    const [loading, setLoading] = useState(false);
    const [newPassword, setNewPassword] = useState({
        token: token || ""
    });
    const [passwordVisible1, setPasswordVisible1] = useState(false);
    const [passwordVisible2, setPasswordVisible2] = useState(false);

    const togglePasswordVisibility1 = useCallback(() => {
        setPasswordVisible1((prev) => !prev);
    }, []);

    const togglePasswordVisibility2 = useCallback(() => {
        setPasswordVisible2((prev) => !prev);
    }, []);

    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setNewPassword((prev) => ({ ...prev, [name]: value }));
    }, []);

    const passwordSubmit = async () => {
        setLoading(true);
        try {
            const res = await API.post("/reset/password", newPassword);
            showToast("success", res.data.message);
            setTimeout(() => navigator(`/login`), 2000);
        } catch (error) {
            console.log(error);

            showToast("error", error.response.data.message || "Enter the information correctly");
        } finally {
            setLoading(false);
        }
    };
    return (
        <NewPasswordPage>
            <div className="flex-content">
                <div className="images">
                    <img className="passoword-image" src={LoginImg} alt="Login Images" />
                </div>
                <div className="form">
                    <h2 className="form-title">Create New Passsword 🔒</h2>
                    <div className="form-group">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input type={passwordVisible1 ? "text" : "password"} className="form-input" id="password" name="password" onChange={handleInputChange} />
                        <div className="eyes" onClick={togglePasswordVisibility1}>
                            {passwordVisible1 ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                        <input type={passwordVisible2 ? "text" : "password"} className="form-input" id="confirmPassword" name="confirmPassword" onChange={handleInputChange} />
                        <div className="eyes" onClick={togglePasswordVisibility2}>
                            {passwordVisible1 ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                        </div>
                    </div>
                    <div className="form-btn">
                        <button className="submit" onClick={passwordSubmit} disabled={loading} >
                            {loading ? "Loading..." : "New Password"}
                        </button>
                        <p className="back">Back to <a href="/login">Login</a></p>
                    </div>
                </div>
            </div>
        </NewPasswordPage>
    );
};

const NewPasswordPage = styled.div`
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

    .flex-content .images .passoword-image {
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
