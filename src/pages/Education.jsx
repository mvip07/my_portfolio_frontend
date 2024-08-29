import { useContext } from "react";
import styled from "styled-components";
import Context from "../component/Context";
import { EducationAndWorkItem } from "../component/EducationAndWorkItem";

export const Education = () => {
    const { data } = useContext(Context)
    return (
        <>
            <EducationP id="education" className="education piece section appear">
                <h2 className="section-title">Education</h2>
                <p className="section-description">
                    Discover the academic background that has shaped my career in development. This page highlights my educational achievements, key courses, and certifications that have equipped me with the skills and knowledge essential for success in the tech industry.
                </p>

                <div className="educations">
                    {
                        data?.education && data?.education.map((i, index) => (
                            <EducationAndWorkItem data={i} key={index} />
                        ))
                    }
                </div>
            </EducationP>
        </>
    );
};

const EducationP = styled.div`
    .educations {
        width: 100%;
        height: 100%;
        padding: 40px;
        margin-top: 50px;
        border-radius: 12px;
        background: var(--white);
    }

    .educations .line:not(.line:last-child) {
        height: 1px;
        width: 100%;
        opacity: 10%;
        margin: 40px 0;
        background: var(--black);
    }

    
    @media (max-width: 768px) {
        .educations {
            padding: 0;
        }
    }
`;
