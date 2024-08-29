import styled from "styled-components"

export const WorkP = styled.div`
    left: 332px;
    height: 100dvh;
    position: fixed;
    padding: 32px 0;
    overflow-y: auto;
    width: calc(100% - 364px);

    .work-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .work-header h2 {
        font-size: 36px;
        font-weight: 700;
        line-height: 40px;
        text-align: center;
        color: var(--black);
        text-transform: capitalize;
    }

    .btn-icon {
        gap: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .btn-icon .item {
        gap: 10px;
        display: flex;
        font-size: 18px;
        cursor: pointer;
        line-height: 24px;
        color: var(--white);
        border-radius: 50px;
        align-items: center;
        justify-content: center;
        padding: 8px 8px 8px 16px;
        background: var(--mainCl);
        text-transform: capitalize;
    }

    .btn-icon .item .circle {
        width: 40px;
        height: 40px;
        display: flex;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        background: var(--black);
    }

    .work-content {
        width: 100%;
        padding: 24px;
        margin-top: 50px;
        border-radius: 12px;
        background: var(--white);
    }

    .work-content .line:not(.work-content .line:last-child) {
        height: 1px;
        width: 100%;
        opacity: 10%;
        margin: 40px 0;
        background: var(--black);
    }

    @media (max-width: 992px) {
        left: 16px;
        margin-top: 0;
        width: calc(100% - 32px);
        height: calc(100dvh - 128px);
    }

    @media (max-width: 768px) {
        .work-header .btn-icon .item {
            padding: 8px;
        }

        .work-header .btn-icon .item span {
            display: none;
        }
    }

`
export const CreateWork = styled.div``

export const UpdateWork = styled.div``

export const DeleteWork = styled.div``

export const PageNotFound = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 12px;
    padding: 40px 0 40px 0;
    background: var(--white);

    .center {
        top: 50%;
        left: 50%;
        width: 75%;
        position: absolute;
        text-align: center;
        transform: translate(-50%, -50%);
    }

    .center i {
        opacity: 60%;
        font-size: 72px;
        color: var(--black);
    }

    .center .title {
        margin: 15px 0;
        font-size: 36px;
        font-weight: 700;
        line-height: 42px;
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
        height: 100%;
    }

    @media (max-width: 576px) {
        .center {
            width: 90%;
        }

        .center .title {
            font-size: 28px;
        }

        .center .text {
            font-size: 16px;
            line-height: 20px;
        }
    }
`