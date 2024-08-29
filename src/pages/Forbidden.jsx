import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export const Forbidden = () => {
    const navigate = useNavigate()
    return (
        <ForbiddenPage>
            <div className="center">
                <i className="fa-solid fa-face-angry"></i>
                <h1 className="title">403</h1>
                <p className="text">It looks like you don’t have permission to access this page. This could be due to several reasons: the page is restricted, your access level is insufficient, or you’re trying to reach an area of the site that requires special permissions.</p>
                <button className="create" onClick={() => navigate("/")}>Home Page</button>
            </div>
        </ForbiddenPage>
    )
}

const ForbiddenPage = styled.div`
    width: 100%;
    height: 100dvh;
    padding: 40px;
    position: relative;
    background: var(--white);

    .center {
        top: 50%;
        left: 50%;
        width: 50%;
        position: absolute;
        text-align: center;
        transform: translate(-50%, -50%);
    }

    .center i {
        opacity: 60%;
        font-size: 100px;
        color: var(--black);
    }

    .center .title {
        margin: 15px 0;
        font-size: 120px;
        font-weight: 700;
        line-height: 150px;
        color: var(--black);
        text-transform: capitalize;
    }

    .center .text {
        opacity: 60%;
        font-size: 18px;
        font-weight: 500;
        line-height: 24px;
        color: var(--black);
    }

    .center button {
        border: 0;
        outline: 0;
        font-size: 16px;
        margin-top: 24px;
        font-weight: 500;
        padding: 12px 24px;
        color: var(--white);
        border-radius: 12px;
        background: var(--mainCl);
    }

    @media (max-width: 992px) {
        .center {
            width: 90%;
        }

        .center i {
            font-size: 80px;
        }

        .center .title {
            font-size: 100px;
            line-height: 120px;
        }
    }

    @media (max-width: 576px) {
        .center .text {
            font-size: 16px;
            line-height: 20px;
        }
    }
`