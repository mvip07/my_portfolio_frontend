import { useEffect, useState } from "react";
import styled from "styled-components";
import { useHome } from "../../component/useHome";

const updateLeftMenuState = (newLeftMenuState) => {
    const main = JSON.parse(localStorage.getItem("main")) || {};
    main.leftMenu = newLeftMenuState;
    localStorage.setItem("main", JSON.stringify(main));

    // Trigger custom event after updating localStorage
    window.dispatchEvent(new Event("leftMenuChange"));
};

const toggleLeftMenu = () => {
    const main = JSON.parse(localStorage.getItem("main")) || {};
    const newLeftMenuState = !main.leftMenu;
    updateLeftMenuState(newLeftMenuState);
};

export const AdminLeftHeader = () => {
    const { mainCl, darkMode, darkModeBody, changeMainColor, } = useHome()
    const [leftMenu, setLeftMenu] = useState(JSON.parse(localStorage.getItem("main"))?.leftMenu || false);

    useEffect(() => {
        const lmenu2 = document.getElementById("lmenu2");

        if (leftMenu) {
            lmenu2.classList.add("active");
        } else {
            lmenu2.classList.remove("active");
        }

        const handleStorageChange = (event) => {
            if (event.key === "main") {
                const newMain = JSON.parse(event.newValue);
                if (newMain && typeof newMain.leftMenu !== 'undefined') {
                    setLeftMenu(newMain.leftMenu);
                }
            }
        };

        const handleCustomEvent = () => {
            const main = JSON.parse(localStorage.getItem("main"));
            if (main && typeof main.leftMenu !== 'undefined') {
                setLeftMenu(main.leftMenu);
            }
        };

        window.addEventListener("storage", handleStorageChange);
        window.addEventListener("leftMenuChange", handleCustomEvent);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
            window.removeEventListener("leftMenuChange", handleCustomEvent);
        };
    }, [leftMenu]);


    return (
        <LeftMenu id="lmenu2">
            <div className="flex">
                <div className="bottom">
                    <input
                        type="color"
                        name="color"
                        id="changeColor"
                        defaultValue={mainCl}
                        onChange={(e) => changeMainColor(e.target.value)}
                    />
                </div>
                <div className="top">
                    <div className="darkLight" onClick={darkModeBody}>
                        {darkMode ? <i className="bx bx-sun"></i> : <i className="bx bx-moon"></i>}
                    </div>
                </div>
            </div>
            <center>
                <div className="user">
                    <img src={""} width="150px" height="150px" alt="" />
                    <h1>Rayan Adlardard</h1>
                    <div className="bg">
                        <p>Font-end Developer</p>
                    </div>
                </div>
                <div className="line"></div>
                <div className="menu-link">
                    <ul>
                        <li><a href="/dashboard">Dashboard</a></li>
                        <li><a href="/dashboard/about">About</a></li>
                        <li><a href="/dashboard/services">Service</a></li>
                        <li><a href="/dashboard/education">Education</a></li>
                        <li><a href="/dashboard/work">Work History</a></li>
                        <li><a href="/dashboard/project">Project</a></li>
                        <li><a href="/dashboard/messages">Messages</a></li>
                        <li><a href="/dashboard/authorization">Authorization</a></li>
                        {/* <li><a href="#">Testimonials</a></li> */}
                    </ul>
                </div>
            </center>

        </LeftMenu>
    );
};

const LeftMenu = styled.div`
    top: 0;
    left: 0;
    z-index: 0;
    width: 300px;
    padding: 24px;
    height: 100dvh;
    /* z-index: 1000; */
    position: fixed;
    overflow-y: auto;
    background: var(--white);

    .flex {
        gap: 27px;
		display: flex;
		align-items: center;
        justify-content: end;
        margin-bottom: 20px;
	}

	.flex .top .bars,
	.flex .top .darkLight {
		width: 40px;
		height: 40px;
		display: flex;
		border-radius: 50%;
		align-items: center;
		justify-content: center;
		background: var(--darkWhite);
	}

	.flex .top .bars i,
	.flex .top .darkLight i {
		opacity: 60%;
		font-size: 20px;
		color: var(--black);
	}

	.flex .top .bars.active,
	.flex .top .darkLight.active {
		background: var(--mainCl);
	}

	.flex .top .bars.active i,
	.flex .top .darkLight.active i {
		opacity: 1;
		color: var(--white);
	}

    .flex .bottom {
		width: 40px;
		height: 40px;
		padding: 5px;
		display: flex;
		border-radius: 50%;
		position: relative;
		align-items: center;
		justify-content: center;
		background: var(--darkWhite);
	}

	.flex .bottom input {
		top: 0;
		left: 0;
		opacity: 0;
		width: 100%;
		height: 100%;
		cursor: pointer;
		position: absolute;
	}

	.flex .bottom::before {
		content: "";
		width: 90%;
		height: 90%;
		display: block;
		border-radius: 50%;
		background: var(--mainCl);
	}

    .user img {
        border-radius: 50%;
        border: 2px solid var(--black);
    }

    .user h1 {
        font-size: 20px;
        font-weight: 600;
        line-height: 28px;
        text-align: center;
        color: var(--black);
        margin: 31px 0 15px 0;
    }

    .user .bg {
        padding: 4px 12px;
        margin-bottom: 15px;
        border-radius: 30px;
        background: var(--lightOrange);
    }

    .user p {
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
        text-align: center;
        color: var(--mainCl);
    }

    .menu-link {
        text-align: left;
        margin-top: 24px;
    }

    .menu-link ul li {
        padding: 12px 24px;
        border-radius: 50px;
        list-style-type: none;
    }

    .menu-link ul li:hover {
        background: var(--lightOrange);
    }

    .menu-link ul li:hover a {
        opacity: 1;
        color: var(--mainCl);
    }

    .menu-link ul li a {
        opacity: 60%;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        color: var(--black);
        text-decoration: none;
    }

    .line {
        width: 100%;
        height: 1px;
        opacity: 10%;
        margin: 25px 0;
        background: var(--black);
    }

    @media (max-width: 992px) {
        left: -100%;
        transition: 0.7s all;

        &.active {
            left: 0;
        }
    }
`;

export const AdminTopHeader = () => {
    const { leftMenu, changeActiveLeftMenu } = useHome()
    return (
        <TopNav id="tmenu2">
            <div className="flex">
                <div className="userImage">
                    <img src={""} width="36px" height="36px" alt="" />
                </div>
                <div className="icons">
                    <div className={`item ${leftMenu ? "active" : ""}`} onClick={() => {
                        toggleLeftMenu()
                        changeActiveLeftMenu()
                    }}>
                        {leftMenu ? <i className="bx bx-x"></i> : <i className="bx bx-menu-alt-right"></i>}
                    </div>
                </div>
            </div>
        </TopNav>
    );
};

const TopNav = styled.div`
    display: none;

    @media (max-width: 992px) {
        padding: 12px;
        display: block;
        margin: 32px 16px;
        border-radius: 50px;
        background: var(--white);

        .flex {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .flex .userImage img {
            object-fit: cover;
            border-radius: 50%;
            transition: 1s all;
            border: 1px solid var(--mainCl);
        }

        .flex .userImage.active {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 100000;
            position: fixed;
            background: var(--white);
        }

        .flex .userImage.active img {
            border: 0;
            width: 100%;
            height: 100%;
            border-radius: 0;
        }

        .flex .icons {
            gap: 24px;
            display: flex;
            align-items: center;
        }

        .flex .icons .item {
            width: 40px;
            height: 40px;
            display: flex;
            border-radius: 50%;
            align-items: center;
            justify-content: center;
            background: var(--darkWhite);
        }

        .flex .icons .item.active {
            background: var(--mainCl);
        }

        .flex .icons .item.active i {
            opacity: 1;
            color: var(--white);
        }

        .flex .icons .item i {
            opacity: 60%;
            font-size: 24px;
            color: var(--black);
        }
    }
`;