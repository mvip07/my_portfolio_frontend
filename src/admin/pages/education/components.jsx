import styled from "styled-components"

export const EducationItem = ({ data, getId }) => {
    return (
        <>
            <Item>
                <div className="flex">
                    <div className="left">
                        <h3>{data.institution}</h3>
                        <p className="location">{data.where}</p>
                        <p className="year">{data.degree} <span>{data.startDate.slice(0, 10)} - {data.endDate.slice(0, 10)}</span></p>
                    </div>
                    <div className="right">
                        <h3>{data.fieldOfStudy}</h3>
                        <p>{data.description}</p>
                        <div className="icons">
                            <div className="icon-item" onClick={() => getId(data._id, data, "update")}>
                                <i className="fa-solid fa-pen-to-square"></i>
                            </div>
                            <div className="icon-item" onClick={() => getId(data._id, data, "delete")}>
                                <i className="fa-solid fa-trash-can"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </Item>
            <div className="line"></div>
        </>
    )
}

const Item = styled.div`
    padding: 16px;
    position: relative;
    
    .flex {
        gap: 24px;
        width: 100%;
        display: flex;
        align-items: flex-start;
    }

    .flex .left {
        width: 300px;
        min-width: 300px;
        max-width: 300px;
    }

    .flex .left h3 {
        font-size: 18px;
        font-weight: 600;
        text-align: left;
        line-height: 28px;
        color: var(--black);
    }

    .flex .left .location {
        opacity: 60%;
        margin: 10px 0;
        font-size: 16px;
        font-weight: 400;
        text-align: left;
        line-height: 24px;
        color: var(--black);
    }

    .flex .left .year {
        opacity: 1;
        font-size: 16px;
        font-weight: 400;
        text-align: left;
        line-height: 24px;
        white-space: nowrap;
        color: var(--black);
    }

    .flex .left .year span {
        font-size: 12px;
        font-weight: 500;
        padding: 4px 12px;
        margin-left: 16px;
        line-height: 16px;
        text-align: center;
        border-radius: 6px;
        color: var(--mainCl);
        background: var(--lightOrange);
    }

    .flex .right {
        width: 100%;
    }

    .flex .right h3 {
        font-size: 18px;
        font-weight: 500;
        text-align: left;
        line-height: 28px;
        color: var(--black);
    }

    .flex .right p {
        opacity: 50%;
        font-size: 16px;
        margin-top: 16px;
        font-weight: 400;
        text-align: left;
        line-height: 24px;
        color: var(--black);
    }

    .flex .right .icons {
        top: 0;
        right: 0;
        gap: 10px;
        display: flex;
        position: absolute;
        align-items: center;
    }

    .flex .right .icons .icon-item {
        width: 30px;
        height: 30px;
        display: flex;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        background: var(--darkWhite);
    }

    .flex .right .icons .icon-item i {
        opacity: 60%;
        font-size: 16px;
        color: var(--black);
    }

    @media (max-width: 992px) {
        .flex {
            display: block;
        }

        .flex .left {
            width: 100%;
            padding-left: 16px;
        }

        .flex .left {
            border-left: 2px solid var(--black);
        }

        .flex .right {
            margin-top: 24px;
        }
    }

    @media (max-width: 768px) {
        padding: 0;  
    }
`