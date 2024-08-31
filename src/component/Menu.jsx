import Context from "./Context";
import { useContext } from "react";
import styled from "styled-components";

export const LeftMenu = () => {
    const { data, leftMenu } = useContext(Context)

    return (
        <LMenu id="lmenu" className={`slide-in-out ${leftMenu ? "active" : ""}`}>
            <center>
                <div className="user">
                    <img className="user-image" src={data?.about?.image} width="150px" height="150px" alt="User Image" />
                    <h1 className="user-name">{data?.about?.name}</h1>
                    <div className="user-profession-bg">
                        <p className="user-profession-title">{data?.about?.profession}</p>
                    </div>
                    <div className="socal-media">
                        {
                            data.socialMedia?.map((media, index) => (
                                <a href={media.url} key={index} target="_blank" className="item">
                                    <i className={`icon ${media.title}`}></i>
                                    {/* <img className="icon" src={media.icon} alt="Image" width="20px" height="20px" /> */}

                                </a>
                            ))
                        }
                    </div>
                </div>
                <div className="line"></div>
            </center>
            {/* <div className="user-information">
                <div className="item">
                    <div className="item-left">
                        <p>Age:</p>
                    </div>
                    <div className="item-right">
                        <p>24</p>
                    </div>
                </div>
                <div className="item">
                    <div className="item-left">
                        <p>Residence:</p>
                    </div>
                    <div className="item-right">
                        <p>BD</p>
                    </div>
                </div>
                <div className="item">
                    <div className="item-left">
                        <p>Freelance:</p>
                    </div>
                    <div className="item-right">
                        <p className="success">Available</p>
                    </div>
                </div>
                <div className="item">
                    <div className="item-left">
                        <p>Address:</p>
                    </div>
                    <div className="item-right">
                        <p>Dhaka,Bangladesh</p>
                    </div>
                </div>
            </div>
            <div className="line"></div> */}
            <div className="progress-content" id="language">
                <h2 className="progress-content-title">Language</h2>
                {
                    data?.language && data?.language?.map((i, index) => (
                        <div className="progress-item" key={index}>
                            <div className="progress-label">
                                <div className="progress-name">
                                    <span className="progress-title">{i.title}</span>
                                </div>
                                <div className="progress-percentage">
                                    <span className="progress-number">{i.percentage} %</span>
                                </div>
                            </div>
                            <div className="progress-border">
                                <div className="progress-bar" style={{ "width": `${i.percentage}%` }}></div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="line"></div>

            <div className="progress-content" id="skill">
                <h2 className="progress-content-title">Skill</h2>
                {
                    data?.skill && data?.skill.map((i, index) => (
                        <div className="progress-item" key={index}>
                            <div className="progress-label">
                                <div className="progress-name">
                                    <span className="progress-title">{i.title}</span>
                                </div>
                                <div className="progress-percentage">
                                    <span className="progress-number">{i.percentage} %</span>
                                </div>
                            </div>
                            <div className="progress-border">
                                <div className="progress-bar" style={{ "width": `${i.percentage}%` }}></div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="line"></div>

            <div className="extra-skill" id="extra-skill">
                <h2 className="progress-content-title">Extra Skill</h2>
                {
                    data?.extraSkill && data?.extraSkill.map((i, index) => (
                        <div className="item" key={index}>
                            <i className="icon bx bxs-plus-circle"></i>
                            <p className="extra-skill-title">{i.title}</p>
                        </div>
                    ))
                }
            </div>
            <div className="line"></div>

            <div className="footer">
                <a className="download-cv" target="blank" href={data?.about?.cv} download={data?.about?.name}>
                    Download CV <i className="icon bx bx-download"></i>
                </a>
            </div>
        </LMenu>
    );
};

export const RightMenu = () => {
    const { rightMenu, leftMenu, mainCl, darkMode, darkModeBody, changeMainColor, changeActiveLeftMenu, rainActive, changeRainActive } = useContext(Context)
    return (
        <RMenu id="rmenu" className={`slide-in-out-right ${rightMenu ? "active" : ""}`}>
            <div className="flex-content">
                <div className="top">
                    <div className={`bars ${leftMenu ? "active" : ""}`} onClick={changeActiveLeftMenu}>
                        {leftMenu ? <i className="bx bx-x"></i> : <i className="bx bx-menu-alt-right"></i>}
                    </div>
                    <div className="darkLight" onClick={(e) => darkModeBody()}>
                        {darkMode ? <i className="bx bx-sun"></i> : <i className="bx bx-moon"></i>}
                    </div>
                </div>
                <div className="center">
                    <a href="#about" className="item changeColorItem active" sectionid="about">
                        <i className="bx bx-home"></i>
                    </a>
                    <a href="#service" className="item changeColorItem" sectionid="myservices">
                        <i className="bx bx-code-alt"></i>
                    </a>
                    <a href="#education" className="item changeColorItem" sectionid="education">
                        <i className="bx bxs-graduation"></i>
                    </a>
                    <a href="#work" className="item changeColorItem" sectionid="work">
                        <i className="bx bx-briefcase"></i>
                    </a>
                    <a href="#project" className="item changeColorItem" sectionid="project">
                        <i className="bx bx-pen"></i>
                    </a>
                    {/* <a href="#testimonials" className="item changeColorItem" sectionid="testimonials">
                        <i className='bx bxs-comment-add'></i>
                    </a> */}
                    <a href="#contact" className="item changeColorItem" sectionid="contacts">
                        <i className="bx bx-message"></i>
                    </a>
                </div>
                <div className="bottom">
                    <div className="item" onClick={() => changeRainActive()}>
                        {rainActive ? <i className="fa-solid fa-cloud-rain"></i> : <i className="fa-solid fa-droplet-slash"></i>}
                    </div>
                    <div className="item input">
                        <input
                            type="color"
                            name="color"
                            id="changeColor"
                            defaultValue={mainCl}
                            onChange={(e) => changeMainColor(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </RMenu>
    );
};

export const TopMenu = () => {
    const { data, leftMenu, rightMenu, changeActiveLeftMenu, changeActiveRightMenu } = useContext(Context)
    return (
        <TMenu id="tmenu">
            <div className="flex-content">
                <div className="user-image">
                    <img className="user-img" src={data?.about?.image} width="36px" height="36px" alt="" />
                </div>
                <div className="icons">
                    <div className={`item ${rightMenu ? "active" : ""}`} onClick={changeActiveRightMenu}>
                        <i className="icon bx bx-color-fill"></i>
                    </div>
                    <div className={`item ${leftMenu ? "active" : ""}`} onClick={changeActiveLeftMenu}>
                        {leftMenu ? <i className="icon bx bx-x"></i> : <i className="icon bx bx-menu-alt-right"></i>}
                    </div>
                </div>
            </div>
        </TMenu>
    );
};

const RMenu = styled.div`
	top: 0;
	right: 0;
	width: 88px;
	padding: 20px;
	height: 100dvh;
	position: fixed;
	background: var(--white);
    z-index: 10000000000;

	.flex-content {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.top {
		margin: 0 auto;
	}

	.top .bars,
	.center .item,
    .bottom .item, 
	.top .darkLight {
		width: 40px;
		height: 40px;
		display: flex;
		border-radius: 50%;
		align-items: center;
		justify-content: center;
		background: var(--darkWhite);
	}

	.top .bars i,
	.center .item i,
    .bottom .item i,
	.top .darkLight i {
		opacity: 60%;
		font-size: 20px;
		color: var(--black);
	}

	.top .bars.active,
	.center .item.active,
    .bottom .item.active,
	.top .darkLight.active {
		background: var(--mainCl);
	}

	.top .bars.active i,
	.center .item.active i,
    .bottom .item.active i,
	.top .darkLight.active i {
		opacity: 1;
		color: var(--white);
	}

	.top .bars {
		display: none;
	}

	.top .darkLight {
		margin-top: 20px;
	}

	.center {
		margin: auto;
	}

	.center .item {
        margin: 20px 0;
        text-decoration: none;
	}

	.bottom {
		margin: 0 auto;
	}

    .bottom .item {
        margin: 20px 0;
    }

    .bottom .input {
        padding: 1px;
        position: relative;
	}

    .bottom .input input {
        top: 0;
        left: 0;
        opacity: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
        position: absolute;
    }

	.bottom .input::before {
        content: "";
        width: 90%;
        height: 90%;
        display: block;
        border-radius: 50%;
        background: var(--mainCl);
	}

    @media (max-width: 1400px) {
        .top .bars {
            display: flex;
        }
    }

    @media (max-width: 768px) {
        right: -100%;
        transition: .7s all;
    
        &.active {
            right: 0;
        }
    }
`;

const LMenu = styled.div`
    top: 0;
    left: 0;
    width: 300px;
    padding: 24px;
    z-index: 1000;
    height: 100dvh;
    position: fixed;
    overflow-y: auto;
    background: var(--white);

    .user .user-image {
        border-radius: 50%;
        border: 2px solid var(--black);
    }

    .user .user-name {
        font-size: 20px;
        font-weight: 600;
        line-height: 28px;
        text-align: center;
        color: var(--black);
        margin: 31px 0 15px 0;
    }

    .user .user-profession-bg {
        padding: 4px 12px;
        margin-bottom: 15px;
        border-radius: 30px;
        background: var(--lightOrange);
    }

    .user .user-profession-title {
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
        text-align: center;
        color: var(--mainCl);
    }

    .user .socal-media {
        gap: 10px;
        display: grid;
        align-items: center;
        justify-content: center;
        grid-template-columns: repeat(4, 30px);
    }

    .user .socal-media .item {
        width: 30px;
        height: 30px;
        display: flex;
        border-radius: 50%;
        align-items: center;
        text-decoration: none;
        justify-content: center;
        background: var(--mainCl);
    }

    .user .socal-media .item .icon {
        font-size: 20px;
        line-height: normal;
        color: var(--white);
    }

    .line {
        width: 100%;
        height: 1px;
        opacity: 10%;
        margin: 25px 0;
        background: var(--black);
    }

    .user-information .item {
        display: flex;
        margin: 12px 0;
        align-items: center;
        justify-content: space-between;
    }

    .user-information .item p {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: var(--black);
    }

    .user-information .item .item-right p {
        opacity: 60%;
        color: var(--black);
    }

    .progress-item {
        margin-top: 20px;
    }

    .progress-content-title {
        font-size: 16px;
        font-weight: 600;
        text-align: left;
        line-height: 24px;
        color: var(--black);
        margin-bottom: 20px;
    }

    .progress-label {
        display: flex;
        margin-bottom: 8px;
        align-items: center;
        justify-content: space-between;
    }

    .progress-title {
        font-size: 14px;
        font-weight: 500;
        text-align: left;
        line-height: 20px;
        color: var(--black);
    }

    .progress-number {
        opacity: 60%;
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        text-align: right;
        color: var(--black);
    }

    .progress-border {
        height: 4px;
        border-radius: 20px;
        background: var(--light);
    }

    .progress-bar {
        height: 100%;
        border-radius: 20px;
        background: var(--mainCl);
    }

    .extra-skill .item {
        gap: 15px;
        margin: 8px 0;
        display: flex;
        align-items: center;
    }

    .extra-skill-title {
        opacity: 60%;
        font-size: 12px;
        font-weight: 500;
        text-align: left;
        line-height: 16px;
        color: var(--black);
    }

    .extra-skill .item .icon {
        font-size: 16px;
        color: var(--mainCl);
    }

    .footer .download-cv {
        border: 0;
        outline: 0;
        width: 100%;
        display: block;
        padding: 10px 0;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        text-align: center;
        border-radius: 8px;
        color: var(--white);
        text-decoration: none;
        background: var(--mainCl);
        text-transform: uppercase;
    }

    .footer .download-cv .icon {
        font-size: 20px;
        margin-left: 19px;
    }

    @media (max-width: 1400px) {
        left: -100%;
        transition: 0.7s all;

        &.active {
            left: 0;
            z-index: 10000;
        }
    }
`;

const TMenu = styled.div`
    display: none;

    @media (max-width: 768px) {
        padding: 12px;
        display: block;
        margin: 32px 16px;
        border-radius: 50px;
        background: var(--white);

        .flex-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .user-img {
            object-fit: cover;
            border-radius: 50%;
            transition: 1s all;
            border: 1px solid var(--mainCl);
        }

        .user-image.active {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 100000;
            position: fixed;
            background: var(--white);
        }

        .user-image.active .user-img {
            border: 0;
            width: 100%;
            height: 100%;
            border-radius: 0;
        }

        .icons {
            gap: 24px;
            display: flex;
            align-items: center;
        }

        .icons .item {
            width: 40px;
            height: 40px;
            display: flex;
            border-radius: 50%;
            align-items: center;
            justify-content: center;
            background: var(--darkWhite);
        }

        .icons .item .icon {
            opacity: 60%;
            font-size: 24px;
            color: var(--black);
        }

        .icons .item.active {
            background: var(--mainCl);
        }

        .icons .item.active .icon {
            opacity: 1;
            color: var(--white);
        }
    }
`;