import styled from "styled-components";

export const AboutP = styled.div`
    left: 332px;
    height: 100dvh;
    position: fixed;
    overflow-y: auto;
    padding-bottom: 30px;
    width: calc(100% - 364px);
    
    .d-flex {
        gap: 24px;
        display: flex;
        padding: 40px;
        margin-top: 32px;
        position: relative;
        border-radius: 12px;
        align-items: flex-start;
        background: var(--white);
        justify-content: flex-start;
    }

    .d-flex .user-img {
        width: 300px;
        height: 300px;
        flex-shrink: 0;
    }

    .d-flex .user-text .name {
        font-size: 36px;
		font-weight: 600;
        margin-top: 20px;
		line-height: 44px;
		color: var(--black);
    }

    .d-flex .user-text .description,
    .d-flex .user-text .email,
    .d-flex .user-text .telephone {
        gap: 10px;
        opacity: 60%;
        display: flex;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: var(--black);
        margin-top: 15px;
        align-items: flex-start;
    }

    .d-flex .user-text .description i,
    .d-flex .user-text .email i,
    .d-flex .user-text .telephone i {
        font-size: 18px;
        line-height: 28px;

    }

    .crud-icons {
        top: 16px;
        gap: 10px;
        right: 24px;
        display: flex;
        position: absolute;
        align-items: center;
        justify-content: center;
    }

    .crud-icons .item {
        width: 30px;
        height: 30px;
        display: flex;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        background: var(--darkWhite);
    }

    .crud-icons .item.active {
        background: var(--mainCl);
    }

    .crud-icons .item i {
        opacity: 60%;
        font-size: 18px;
        color: var(--black);
    }

    .crud-icons .item.active i {
        opacity: 1;
        color: var(--white);

    }

    @media (max-width: 1300px) {          
        .d-flex {
            display: block;
        }
    }

    @media (max-width: 992px) {
        left: 16px;
        width: calc(100% - 32px);
        height:  calc(100vh - 128px);

        .d-flex {
            margin-top: 0px;
        }
    }

    @media (max-width: 768px) {
        .d-flex {
            padding: 24px;
        }

        .d-flex .user-text .name {
            font-size: 24px;
            line-height: 30px;
        }
    }

    @media (max-width: 576px) {
        .d-flex .user-img {
            width: 100%;
            margin-top: 25px;
        }

    }
`;

export const CreateModal = styled.div``;

export const UpdateModal = styled.div``;

export const DeleteModal = styled.div``;