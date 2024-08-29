import styled from "styled-components"

export const EducationAndWorkItem = ({ data }) => {
    return (
        <>
            <Item className="appear">
                <div className="flex-content">
                    <div className="left">
                        <h3 className="company-name">{data.companyName || data.institution}</h3>
                        <p className="location">{data.where}</p>
                        <p className="year">
                            {data.degree} <span className="date">{data.startDate.slice(0, 10)} - {data.endDate.slice(0, 10)}</span>
                        </p>
                    </div>
                    <div className="right">
                        <h3 className="field-of-study">{data.fieldOfStudy}</h3>
                        <p className="description">{data.description}</p>
                    </div>
                </div>
            </Item>
            <div className="line"></div>
        </>
    )
}

const Item = styled.div`
    .flex-content {
        gap: 24px;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-start;
    }

    .left {
        width: 300px;
        min-width: 300px;
        max-width: 300px;
    }

    .company-name {
        font-size: 18px;
        font-weight: 600;
        text-align: left;
        line-height: 28px;
        color: var(--black);
    }

   .location {
        opacity: 60%;
        margin: 10px 0;
        font-size: 16px;
        font-weight: 400;
        text-align: left;
        line-height: 24px;
        color: var(--black);
    }

     .year {
        opacity: 1;
        font-size: 16px;
        font-weight: 400;
        text-align: left;
        line-height: 24px;
        white-space: nowrap;
        color: var(--black);
    }

  .date {
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

  .right {
        width: 100%;
    }

    .field-of-study {
        font-size: 18px;
        font-weight: 500;
        text-align: left;
        line-height: 28px;
        color: var(--black);
    }

    .description {
        opacity: 50%;
        font-size: 16px;
        margin-top: 16px;
        font-weight: 400;
        text-align: left;
        line-height: 24px;
        color: var(--black);
    }

    @media (max-width: 992px) {
        .flex-content {
            display: block;
        }

        .left {
            width: 100%;
            padding-left: 16px;
            border-left: 2px solid var(--black);
        }

        .right {
            margin-top: 24px;
        }
    }

    @media (max-width: 768px) {
        padding: 24px;  
    }
`