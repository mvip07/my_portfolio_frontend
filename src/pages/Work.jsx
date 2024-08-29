import { useContext } from "react"
import styled from "styled-components"
import Context from "../component/Context"
import { EducationAndWorkItem } from "../component/EducationAndWorkItem"

export const Work = () => {
    const { data } = useContext(Context)
    return (
        <WorkP id="work" className="work piece section appear">
            <h2 className="section-title">Work History</h2>
            <p className="section-description">
                Explore my professional journey from frontend development to full-stack and backend expertise. This page highlights key roles and contributions, showcasing my growth and impact in the tech industry.
            </p>

            <div className="works">
                {
                    data?.work && data?.work?.map((i, index) => (
                        <EducationAndWorkItem data={i} key={index} />
                    ))
                }
            </div>
        </WorkP>
    )
}

const WorkP = styled.div`
    .works {
        width: 100%;
        height: 100%;
        padding: 40px;
        margin-top: 50px;
        border-radius: 12px;
        background: var(--white);
    }

    .works .line:not(.line:last-child) {
        height: 1px;
        width: 100%;
        opacity: 10%;
        margin: 40px 0;
        background: var(--black);
    }

    @media (max-width: 768px) {
        .works {
            padding: 0;
        }
    }
`