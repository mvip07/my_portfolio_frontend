import styled from "styled-components"

export const ProjectP = styled.div`
    left: 332px;
    height: 100dvh;
    position: fixed;
    padding: 32px 0;
    overflow-y: auto;
    width: calc(100% - 364px);

    .project-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .project-header h2 {
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

    .technology {
        width: 100%;
        padding: 24px;
        margin: 32px 0;
        border-radius: 12px;
        background: var(--white);
    }

    .technology .technology-header {
        gap: 24px;
        display: flex;
        align-items: center;
        margin-bottom: 24px;
        justify-content: space-between;
    }

    .technology .technology-header select {
        border: 0;
		outline: 0;
        appearance: none;
		border-radius: 8px;
		padding: 12px 16px;
		background: var(--darkWhite);
    }

    .technology .title {
        font-size: 24px;
        font-weight: 700;
        line-height: 32px;
        color: var(--black);
        text-transform: capitalize;
    }

    .technology .table-responsive {
        overflow-y: scroll;
    }

    .technology table {
        width: 100%;
        padding: 24px;
        max-width: 100%;
        min-width: 992px;
        overflow-y: scroll;
        position: relative;
        border-radius: 12px;
        border-collapse: collapse;
        background: var(--lightOrange);
        border: 1px solid var(--darkWhite);
    }

    .technology table thead tr  {
        height: 60px;
        font-size: 18px;
        font-weight: 500;
        text-align: left;
        color: var(--mainCl);
        text-transform: capitalize;
    }

    .technology table tbody tr {
        height: 50px;
        font-size: 18px;
        font-weight: 500;
        text-align: left;
        color: var(--black);
        background: var(--white);
        text-transform: capitalize;
    }

    .technology table tbody tr .icons {
        gap: 12px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    .technology table tbody tr .icons .icon-item {
        width: 30px;
        height: 30px;
        display: flex;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        background: var(--darkWhite);
    }

    .technology table tbody tr .icons .icon-item i {
        opacity: 60%;
        font-size: 18px;
        font-weight: 900;
        color: var(--black);
    }

    .technology table thead tr th,
    .technology table tbody tr td {
        padding: 6px 12px;
    } 

    .technology table thead tr th input,
    .technology table tbody tr td input {
        border: 0;
        outline: 0;
        width: 15px;
        height: 15px;
        color: var(--white);
        accent-color: var(--mainCl);
    }

    .technology .paginations {
        gap: 10px;
        display: flex;
        margin-top: 15px;
        align-items: center;
        justify-content: flex-end;
    }

    .technology .paginations .item {
        width: 30px;
        height: 30px;
        display: flex;
        font-size: 16px;
        cursor: pointer;
        font-weight: 500;
        line-height: 24px;
        border-radius: 50%;
        color: var(--white);
        align-items: center;
        justify-content: center;
        background: var(--mainCl);
    }
    
    .projects {
        gap: 24px;
        width: 100%;
        display: grid;
        position: relative;
        align-items: flex-start;
        grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
    }

    .projects .item {
        width: 100%;
        height: 435px;
        position: relative;
        border-radius: 12px;
        transition: all 1s ease;
        background: var(--white);
        transform-style: preserve-3d;
    }

    .projects .item.active {
        transform: rotateY(-180deg);
    }

    .projects .item .front {
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 12px;
        background: var(--white);
        backface-visibility: hidden;
    }

    .projects .item .front .card-header img {
        width: 100%;
        height: 220px;
        object-fit: cover;
        object-position: center;
        border-radius: 12px 12px 0 0;
    }

    .projects .item .front .card-body {
        padding: 24px;
    }

    .projects .item .front .card-body .icons {
        gap: 10px;
        top: 15px;
        right: 24px;
        display: flex;
        position: absolute;
        align-items: center;
    }

    .projects .item .front .card-body .icons .icon-item {
        width: 30px;
        height: 30px;
        display: flex;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        background: var(--darkWhite);
    }

    .projects .item .front .card-body .icons .icon-item i {
        opacity: 60%;
        font-size: 16px;
        color: var(--black);
    }

    .projects .item .front .card-body h3 {
        font-size: 18px;
        font-weight: 600;
        text-align: left;
        line-height: 28px;
        color: var(--black);
    }

    .projects .item .front .card-body p {
        opacity: 60%;
        font-size: 16px;
        font-weight: 400;
        text-align: left;
        line-height: 24px;
        color: var(--black);
        margin: 8px 0 16px 0;
    }

    .projects .item .front .card-body .btnGroup,
    .projects .item .back .card-body .btnGroup {
        gap: 10px;
        display: flex;
        align-items: center;
    }

    .projects .item .front .card-body .btnGroup .btn,
    .projects .item .back .card-body .btnGroup .btn {
        gap: 24px;
        border: 0;
        outline: 0;
        display: flex;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        padding: 8px 16px;
        border-radius: 8px;
        color: var(--white);
        white-space: nowrap;
        align-items: center;
        text-decoration: none;
        justify-content: center;
        background: var(--mainCl);
        text-transform: capitalize;
    }

    .projects .item .front .card-body .btnGroup .btn:first-child,
    .projects .item .back .card-body .btnGroup .btn:first-child {
        width: 100%;
    }

    .projects .item .front .card-body .btnGroup .btn i,
    .projects .item .back .card-body .btnGroup .btn i {
        font-size: 24px;
    }

    .projects .item .back {
        width: 100%;
        height: 100%;
        padding: 12px;
        position: absolute;
        border-radius: 12px;
        background: var(--white);
        transform: rotateY(180deg);
        backface-visibility: hidden;
    }

    .projects .item .back .card-body .text {
        padding: 12px;
        height: 350px;
        overflow: auto;
    }

    .projects .item .back .card-body .text p {
        opacity: 60%;
        font-size: 16px;
        text-align: left;
        font-weight: 400;
        line-height: 24px;
        color: var(--black);
    }

    .projects .item .back .card-body .text .technologies {
        gap: 12px;
        display: flex;
        flex-wrap: wrap;
        margin-top: 24px;
    }

    .projects .item .back .card-body .text .technologies .tech-item {
        font-size: 16px;
        font-weight: 500;
        padding: 8px 16px;
        line-height: 24px;
        border-radius: 50px;
        color: var(--mainCl);
        background: var(--lightOrange);
    }

    .projects .item .back .card-body .btnGroup {
        bottom: 24px;
        position: absolute;
    }

    @media (max-width: 992px) {
        left: 16px;
        margin-top: 0;
        width: calc(100% - 32px);
        height: calc(100dvh - 128px);
    } 

    @media (max-width: 768px) {
        padding-top:  0;

        .categories {
            gap: 24px;
            margin: 24px 0;
        }

        .project-header .btn-icon {
            gap: 12px;
        }

        .project-header .btn-icon .item {
            padding: 8px;
        }

        .project-header .btn-icon .item span {
            display: none;
        }
    }
`
export const CreateTechnology = styled.div``

export const UpdateTechnology = styled.div``

export const DeleteTechnology = styled.div``

export const CreateCategory = styled.div``

export const UpdateCategory = styled.div``

export const DeleteCategory = styled.div``

export const CreateProject = styled.div``

export const UpdateProject = styled.div``

export const DeleteProject = styled.div``

export const PageNotFound = styled.div`
    width: 100%;
    height: 100%;
    padding: 40px;
    position: relative;
    border-radius: 12px;
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
        font-weight: 500;
        padding: 12px 24px;
        color: var(--white);
        border-radius: 12px;
        margin: 24px 12px 0;

        background: var(--mainCl);
    }

    @media (max-width: 992px) {
        height: 100%;
        margin-top: 0;
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