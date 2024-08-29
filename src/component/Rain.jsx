import { useContext, useEffect } from "react";
import styled from "styled-components";
import Context from "./Context";

export const Rain = () => {
    const { rainActive } = useContext(Context);

    const icons = [
        '<i class="fa-solid fa-c"></i>',
        '<i class="fa-brands fa-node"></i>',
        '<i class="fa-brands fa-java"></i>',
        '<i class="fa-brands fa-sass"></i>',
        '<i class="fa-brands fa-react"></i>',
        '<i class="fa-brands fa-html5"></i>',
        '<i class="fa-brands fa-python"></i>',
        '<i class="fa-brands fa-github"></i>',
        '<i class="fa-solid fa-database"></i>',
        '<i class="fa-brands fa-css3-alt"></i>',
        '<i class="fa-brands fa-square-js"></i>',
        '<i class="fa-brands fa-bootstrap"></i>',
    ];

    const colors = [
        "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFBD33",
        "#33FFF7", "#A133FF", "#FF3333", "#33FFBD", "#FF3385",
        "#3385FF", "#85FF33", "#FF8333", "#33FF8A", "#8A33FF",
        "#FF3385", "#338AFF", "#FF33FF", "#FF6F33", "#33FF6F",
        "#6FFF33", "#FF336F", "#336FFF", "#FF33FF", "#FF4C33",
        "#33FF4C", "#4CFF33", "#FF334C", "#334CFF", "#FF3333",
        "#FFB533", "#33FFB5", "#B533FF", "#FF33B5", "#33B5FF",
        "#FFB533", "#B533FF", "#FF336B", "#33FF6B", "#6BFF33",
        "#FF336B", "#336BFF", "#FF336B", "#FF6B33", "#33FF6B",
        "#6BFF33", "#FF336B", "#336BFF", "#FF336B", "#FF336B"
    ];

    const createRainElement = () => {
        const rainContent = document.querySelector(".rainContent");

        const rain = document.createElement("div");
        rain.classList.add("rains");

        let chooseIcon = icons[Math.floor(Math.random() * icons.length)];
        let chooseColor = colors[Math.floor(Math.random() * colors.length)];

        rain.innerHTML = `
            <div class="cube">
                <div class="face front" style="background: ${chooseColor}">${chooseIcon}</div>
                <div class="face back" style="background: ${chooseColor}">${chooseIcon}</div>
                <div class="face left" style="background: ${chooseColor}">${chooseIcon}</div>
                <div class="face right" style="background: ${chooseColor}">${chooseIcon}</div>
                <div class="face top" style="background: ${chooseColor}">${chooseIcon}</div>
                <div class="face bottom" style="background: ${chooseColor}">${chooseIcon}</div>
            </div>
        `;

        rain.style.left = Math.floor(Math.random() * 100) + "%";
        rain.style.animationDuration = Math.random() * 3 + 2 + "s";

        rainContent.appendChild(rain);

        setTimeout(() => rain.remove(), 2000);
    };

    useEffect(() => {
        let interval;
        if (rainActive) {
            interval = setInterval(() => createRainElement(), 1000);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [rainActive]);

    return <RainContent className="rainContent"></RainContent>;
};

const RainContent = styled.div`
    .rains {
        z-index: 10000;
        position: fixed;
        animation: fall 3s linear forwards;
    }

    .cube {
        width: 50px;
        height: 50px;
        position: fixed;
        transform-style: preserve-3d;
        transform: rotateX(-20deg) rotateY(30deg);
        animation: rotateCube 10s infinite linear;
    }

    .face {
        width: 50px;
        height: 50px;
        display: flex;
        position: absolute;
        border-radius: 6px;
        align-items: center;
        justify-content: center;
    }

    .face i {
        font-size: 30px;
        color: var(--white);
    }

    .front {
        transform: rotateY(0deg) translateZ(25px);
    }

    .back {
        transform: rotateY(180deg) translateZ(25px);
    }

    .left {
        transform: rotateY(-90deg) translateZ(25px);
    }

    .right {
        transform: rotateY(90deg) translateZ(25px);
    }

    .top {
        transform: rotateX(90deg) translateZ(25px);
    }

    .bottom {
        transform: rotateX(-90deg) translateZ(25px);
    }

    @keyframes rotateCube {
        0% {
            transform: rotateX(0deg) rotateY(0deg);
        }
        50% {
            transform: rotateX(180deg) rotateY(180deg);
        }
        100% {
            transform: rotateX(360deg) rotateY(360deg);
        }
    }

    @keyframes fall {
        to {
            transform: translateY(100vh);
        }
    }
`;
