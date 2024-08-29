import styled from "styled-components"

export const MyServicesP = styled.div`
    left: 332px;
    height: 100dvh;
    position: fixed;
    padding: 32px 0;
    overflow-y: auto;
    width: calc(100% - 364px);

    .service-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .service-header h2 {
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
        position: relative;
        border-radius: 12px;
        background: var(--white);
    }

    .services .item .crud-icons {
        gap: 10px;
        top: 15px;
        right: 20px;
        display: flex;
        position: absolute;
        align-items: center;
    }

    .services .item .crud-icons .icon-item {
        width: 30px;
        height: 30px;
        display: flex;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        background: var(--darkWhite);
    }

    .services .item .crud-icons .icon-item.active {
        background: var(--mainCl);
    }

    .services .item .crud-icons .icon-item i {
        opacity: 60%;
        font-size: 18px;
        color: var(--black);
    }

    .services .item .crud-icons .icon-item.active i {
        opacity: 1;
        color: var(--white);
    }

    .services .item img {
        width: 70px;
        height: 70px;
        padding: 16px;
        object-fit: cover;
        border-radius: 12px;
        background: var(--darkWhite);
    }

    .services .item h3 {
        font-size: 20px;
        font-weight: 600;
        line-height: 28px;
        color: var(--black);
        margin: 26px 0 15px 0;
        text-transform: capitalize;
    }

    .services .item p {
        opacity: 60%;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        color: var(--black);
    }

    .services .item .description {
        gap: 8px;
        display: flex;
        margin: 6px 0;
        align-items: center;
        justify-content: start;
    }

    .services .item .description i.bx {
        opacity: 60%;
        font-size: 28px;
        color: var(--black);
    }

    .services .item .service-item-icon {
        gap: 10px;
        display: flex;
        align-items: center;
    }

    .services .item .description .service-item-icon p {
        opacity: 60%;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: var(--black);
        text-transform: capitalize;
    }

    .services .item .description .service-item-icon .icon-child {
        width: 30px;
        height: 30px;
        display: flex;
        flex-shrink: 0;
        border-radius: 50%; 
        align-items: center;
        justify-content: center;
        background: var(--darkWhite);
    }

    .services .item .description .service-item-icon .icon-child i {
        opacity: 60%;
        font-size: 16px;
        color: var(--black);
    }

   @media (max-width: 992px) {
        left: 16px;
        margin-top: 0;
        padding-top: 0;
        width: calc(100% - 32px);
        height: calc(100dvh - 128px);
   } 

    @media (max-width: 768px) {
        .service-header h2 {
            font-size: 24px;
            line-height: 30px;
            text-align: left !important;
        }

        .service-header .btn-icon .item {
            padding: 8px;
        }

        .service-header .btn-icon .item span {
            display: none;
        }
    }
`
export const CreateServices = styled.div``

export const UpdateServices = styled.div``

export const DeleteServices = styled.div``

export const CreateServicesItem = styled.div``

export const UpdateServicesItem = styled.div``

export const DeleteServicesItem = styled.div``


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