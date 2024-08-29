import styled from "styled-components";

import { useContext } from "react";
import Context from "../component/Context";
import { host } from "../assets/utils/api";

export const MyServices = () => {
    const { data } = useContext(Context)

    return (
        <MyServicesP id="service" className="myservices piece section appear">
            <h2 className="section-title">my services</h2>
            <p className="section-description">
                Offering a comprehensive suite of professional services, including development, design, and consulting. Whether you're starting a new project or enhancing an existing one, I provide tailored solutions to help you achieve your goals with precision and excellence.
            </p>

            <div className="services">
                {
                    data?.service && data?.service.map((i, index) => (
                        <div className="item appear" key={index}>
                            <img className="service-img" src={`${host}/${i.icon}`} alt="Service Image" />
                            <h3 className="service-title">{i.title}</h3>
                            {
                                i.items && i.items.map((j, ind) => (
                                    <div className="service-body" key={ind}>
                                        <i className="bx bxs-right-arrow-alt bx-flip-horizontal bx-tada"></i>
                                        <p className="description">{j.name}</p>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>

        </MyServicesP>
    );
};

const MyServicesP = styled.div`
    .services {
        gap: 24px;
        display: grid;
        margin-top: 50px;
        align-items: center;
        justify-content: center;
        grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
    }

    .services .item {
        width: 100%;
        height: 100%;
        padding: 24px;
        text-align: left;
        border-radius: 12px;
        background: var(--white);
    }

    .service-img {
        width: 70px;
        height: 70px;
        padding: 16px;
        object-fit: cover;
        border-radius: 12px;
        background: var(--darkWhite);
    }

    .service-title {
        font-size: 20px;
        font-weight: 600;
        line-height: 28px;
        color: var(--black);
        margin: 26px 0 15px 0;
        text-transform: capitalize;
    }

    .service-body {
        gap: 8px;
        display: flex;
        margin: 6px 0;
        align-items: center;
        justify-content: start;
    }

    .description {
        opacity: 60%;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: var(--black);
        text-transform: capitalize;
    }

    .service-body .bx {
        opacity: 60%;
        font-size: 28px;
        color: var(--black);
    }
`;
