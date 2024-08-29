import styled from "styled-components"
import RegisterImg from "../../assets/img/registerImg.png";


export const SentToken = () => {
    return (
        <SentTokenPage>
            <div className="flex-content">
                <div className="images">
                    <img className="login-image" src={RegisterImg} alt="Login Images" />
                </div>
                <div className="form">
                    <h2 className="form-title">Check Email! 👋🏻</h2>
                    <div className="form-btn">
                        <p className="description">Please check your email inbox and click on the provided link to reset your
                            password . If you don’t receive email,<a href="https://mail.google.com/mail/" target="_black"> Click here Email </a></p>
                        <p className="login">Back to? <a href="/login">Login</a></p>
                    </div>
                </div>
            </div>
        </SentTokenPage>
    )
}

const SentTokenPage = styled.div`
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

    .form-btn p {
        opacity: 60%;
        font-size: 16px;
        font-weight: 400;
        text-align: left;
        margin-top: 24px;
        line-height: 24px;
        color: var(--black);
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
`