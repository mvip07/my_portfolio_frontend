import styled from "styled-components"

export const Loader = () => {
    return (
        <Content>
            <div className="pl">
                <div className="pl__dot"></div>
                <div className="pl__dot"></div>
                <div className="pl__dot"></div>
                <div className="pl__dot"></div>
                <div className="pl__dot"></div>
                <div className="pl__dot"></div>
                <div className="pl__dot"></div>
                <div className="pl__dot"></div>
                <div className="pl__dot"></div>
                <div className="pl__dot"></div>
                <div className="pl__dot"></div>
                <div className="pl__dot"></div>
                <div className="pl__text">Ozodov <br /> Mirabzal</div>
            </div>
        </Content>
    )
}

const Content = styled.div`
    width: 100%;
    height: 100dvh;
    background: var(--white);

    :root {
        --fg: #e3e4e8;
        --trans-dur: 0.3s;
        --fg-t: rgba(227, 228, 232, 0.5);
        font-size: calc(16px + (20 - 16) * (100vw - 320px) / (1280 - 320));
    }

    .pl {
        width: 20em;
        height: 20em;
        display: flex;
        position: relative;
        align-items: center;
        letter-spacing: 0.1em;
        top: calc(50% - 10em);
        left: calc(50% - 10em);
        justify-content: center;
        text-transform: uppercase;
        background: linear-gradient(145deg, #1e1e1e, #191919);
        box-shadow:  5px 5px 20px #0b0b0b,  -5px -5px 20px #2d2d2d;
    }

    .pl, .pl__dot {
        border-radius: 50%;
    }

    .pl__dot {
        width: 1.5em;
        height: 1.5em;
        animation-name: shadow;
        top: calc(50% - 0.75em);
        left: calc(50% - 0.75em);
        box-shadow: 0.1em 0.1em 0 0.1em black, 0.3em 0 0.3em rgba(0, 0, 0, 0.5);
    }

    .pl__dot, .pl__dot:before, .pl__dot:after {
        position: absolute;
        animation-duration: 2s;
        animation-iteration-count: infinite;
    }

    .pl__dot:before, .pl__dot:after {
        left: 0;
        content: "";
        width: inherit;
        display: block;
        transition: background-color var(--trans-dur);
    }

    .pl__dot:before {
        z-index: 1;
        height: inherit;
        border-radius: inherit;
        animation-name: pushInOut1;
        background-color: var(--bg);
        box-shadow: 0.05em 0 0.1em rgba(255, 255, 255, 0.2) inset;
    }

    .pl__dot:after {
        bottom: 0;
        height: 3em;
        border-radius: 0.75em;
        transform: rotate(-45deg);
        animation-name: pushInOut2;
        transform-origin: 50% 2.25em;
        background-color: var(--mainCl);
        clip-path: polygon(0 75%, 100% 75%, 100% 100%, 0 100%);
        box-shadow: 0.1em 0.3em 0.2em rgba(255, 255, 255, 0.4) inset, 0 -0.4em 0.2em #2e3138 inset, 0 -1em 0.25em rgba(0, 0, 0, 0.3) inset;
    }
    .pl__dot:nth-child(1) {
        z-index: 5;
        transform: rotate(0deg) translateX(7em) rotate(0deg);
    }

    .pl__dot:nth-child(1), .pl__dot:nth-child(1):before, .pl__dot:nth-child(1):after {
        animation-delay: 0s;
    }

    .pl__dot:nth-child(2) {
        z-index: 4;
        transform: rotate(-30deg) translateX(7em) rotate(30deg);
    }

    .pl__dot:nth-child(2), .pl__dot:nth-child(2):before, .pl__dot:nth-child(2):after {
        animation-delay: -0.1666666667s;
    }

    .pl__dot:nth-child(3) {
        z-index: 3;
        transform: rotate(-60deg) translateX(7em) rotate(60deg);
    }

    .pl__dot:nth-child(3), .pl__dot:nth-child(3):before, .pl__dot:nth-child(3):after {
        animation-delay: -0.3333333333s;
    }

    .pl__dot:nth-child(4) {
        z-index: 2;
        transform: rotate(-90deg) translateX(7em) rotate(90deg);
    }

    .pl__dot:nth-child(4), .pl__dot:nth-child(4):before, .pl__dot:nth-child(4):after {
        animation-delay: -0.5s;
    }

    .pl__dot:nth-child(5) {
        z-index: 1;
        transform: rotate(-120deg) translateX(7em) rotate(120deg);
    }

    .pl__dot:nth-child(5), .pl__dot:nth-child(5):before, .pl__dot:nth-child(5):after {
        animation-delay: -0.6666666667s;
    }

    .pl__dot:nth-child(6) {
        z-index: 1;
        transform: rotate(-150deg) translateX(7em) rotate(150deg);
    }

    .pl__dot:nth-child(6), .pl__dot:nth-child(6):before, .pl__dot:nth-child(6):after {
        animation-delay: -0.8333333333s;
    }

    .pl__dot:nth-child(7) {
        z-index: 2;
        transform: rotate(-180deg) translateX(7em) rotate(180deg);
    }

    .pl__dot:nth-child(7), .pl__dot:nth-child(7):before, .pl__dot:nth-child(7):after {
        animation-delay: -1s;
    }

    .pl__dot:nth-child(8) {
        z-index: 3;
        transform: rotate(-210deg) translateX(7em) rotate(210deg);
    }

    .pl__dot:nth-child(8), .pl__dot:nth-child(8):before, .pl__dot:nth-child(8):after {
        animation-delay: -1.1666666667s;
    }

    .pl__dot:nth-child(9) {
        transform: rotate(-240deg) translateX(7em) rotate(240deg);
        z-index: 4;
    }

    .pl__dot:nth-child(9), .pl__dot:nth-child(9):before, .pl__dot:nth-child(9):after {
        animation-delay: -1.3333333333s;
    }

    .pl__dot:nth-child(10) {
        z-index: 5;
        transform: rotate(-270deg) translateX(7em) rotate(270deg);
    }

    .pl__dot:nth-child(10), .pl__dot:nth-child(10):before, .pl__dot:nth-child(10):after {
        animation-delay: -1.5s;
    }

    .pl__dot:nth-child(11) {
        z-index: 6;
        transform: rotate(-300deg) translateX(7em) rotate(300deg);
    }

    .pl__dot:nth-child(11), .pl__dot:nth-child(11):before, .pl__dot:nth-child(11):after {
        animation-delay: -1.6666666667s;
    }

    .pl__dot:nth-child(12) {
        z-index: 6;
        transform: rotate(-330deg) translateX(7em) rotate(330deg);
    }

    .pl__dot:nth-child(12), .pl__dot:nth-child(12):before, .pl__dot:nth-child(12):after {
        animation-delay: -1.8333333333s;
    }

    .pl__text {
        font-size: 1em;
        cursor: pointer;
        user-select: none;
        position: relative;
        text-align: center;
        white-space: nowrap;
        color: var(--mainCl);
        /* transform: rotateZ(-45deg); */
        text-shadow: 0 0 0.1em var(--fg-t);
    }

    /* Animations */
    @keyframes shadow {
        from {
            animation-timing-function: ease-in;
            box-shadow: 0.1em 0.1em 0 0.1em black, 0.3em 0 0.3em rgba(0, 0, 0, 0.3);
        }
        25% {
            animation-timing-function: ease-out;
            box-shadow: 0.1em 0.1em 0 0.1em black, 0.8em 0 0.8em rgba(0, 0, 0, 0.5);
        }
        50%, to {
            box-shadow: 0.1em 0.1em 0 0.1em black, 0.3em 0 0.3em rgba(0, 0, 0, 0.3);
        }
    }

    @keyframes pushInOut1 {
        from {
            animation-timing-function: ease-in;
            background-color: var(--bg);
            transform: translate(0, 0);
        }
        25% {
            animation-timing-function: ease-out;
            background-color: var(--mainCl);
            transform: translate(-71%, -71%);
        }
        50%, to {
            background-color: var(--bg);
            transform: translate(0, 0);
        }
    }

    @keyframes pushInOut2 {
        from {
            animation-timing-function: ease-in;
            background-color: var(--bg);
            clip-path: polygon(0 75%, 100% 75%, 100% 100%, 0 100%);
        }
        25% {
            animation-timing-function: ease-out;
            background-color: var(--mainCl);
            clip-path: polygon(0 25%, 100% 25%, 100% 100%, 0 100%);
        }
        50%, to {
            background-color: var(--bg);
            clip-path: polygon(0 75%, 100% 75%, 100% 100%, 0 100%);
        }
    }
`