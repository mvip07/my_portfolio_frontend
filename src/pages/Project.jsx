import styled from "styled-components";
import { useContext, useState } from "react";
import Context from "../component/Context";
import { ProjectItem } from "../component/ProjectItem";

export const Project = () => {
    const { data } = useContext(Context)
    const [categoryId, setCategoryId] = useState("")
    return (
        <ProjectP id="project" className="projects piece section">
            <h2 className="section-title">Portfolio</h2>
            <p className="section-description">
                Explore our diverse portfolio of projects that showcase innovative solutions and technical expertise. From web apps to software tools, each project highlights our commitment to quality and creativity. See how we tackle challenges and deliver impactful, user-friendly solutions.
            </p>

            <div className="categories">
                <div className={`category ${categoryId === "" ? "active" : ""}`} onClick={() => setCategoryId("")}>
                    <h4 className="category-title">All The Categories</h4>
                </div>
                {
                    data?.category && data?.category.map((i, index) => (
                        <div className={`category ${i._id == categoryId ? "active" : ""}`} key={index} onClick={() => setCategoryId(i._id)}>
                            <h4 className="category-title">{i.title}</h4>
                        </div>
                    ))
                }
            </div>
            <div className="projects">
                {
                    data?.project?.filter((item) => categoryId ? item.category.includes(categoryId) : item).map((i, index) => (
                        <ProjectItem key={index} data={i} />
                    ))
                }
            </div>
        </ProjectP>
    );
};

const ProjectP = styled.div`
    .categories {
        gap: 12px;
        display: flex;
        margin: 48px 0;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    .category {
        padding: 6px 18px;
        border-radius: 50px;
    }

    .category.active {
        transition: .2s ease-in;
        background: var(--lightOrange);
    }

    .category.active .category-title {
        opacity: 1;
        color: var(--mainCl);
    }

    .category .category-title {
        opacity: 60%;
        font-size: 16px;
        font-weight: 400;
        text-align: left;
        line-height: 24px;
        color: var(--black);
        text-transform: capitalize;
    }

    .projects {
        gap: 24px;
        width: 100%;
        display: grid;
        position: relative;
        align-items: flex-start;
        grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
    }

    .project {
        width: 100%;
        height: 435px;
        position: relative;
        border-radius: 12px;
        transition: all 1s ease;
        background: var(--white);
        transform-style: preserve-3d;
    }

    .project.active {
        transform: rotateY(-180deg);
    }

    .project .front {
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 12px;
        background: var(--white);
        backface-visibility: hidden;
    }

    .project .front .project-img {
        width: 100%;
        height: 220px;
        object-fit: cover;
        object-position: center;
        border-radius: 12px 12px 0 0;
    }

    .project .front .body {
        padding: 24px;
    }

    .project .front .body .project-title {
        font-size: 18px;
        font-weight: 600;
        text-align: left;
        line-height: 28px;
        color: var(--black);
    }

    .project .front .body .project-description {
        opacity: 60%;
        font-size: 16px;
        font-weight: 400;
        text-align: left;
        line-height: 24px;
        color: var(--black);
        margin: 8px 0 16px 0;
    }

    .project .back {
        width: 100%;
        height: 100%;
        padding: 12px;
        position: absolute;
        border-radius: 12px;
        background: var(--white);
        transform: rotateY(180deg);
        backface-visibility: hidden;
    }

    .project .back .body {
        padding: 12px;
        height: 350px;
        overflow: auto;
    }

    .project .back .body .project-description {
        opacity: 60%;
        font-size: 16px;
        text-align: left;
        font-weight: 400;
        line-height: 24px;
        color: var(--black);
    }

    .project .back .btn-group {
        bottom: 24px;
        position: absolute;
    }

    .project .back .btn-group,
    .project .front .body .btn-group {
        gap: 10px;
        display: flex;
        align-items: center;
    }

    .project .back .btn-group .btn,
    .project .front .body .btn-group .btn {
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

    .project .back .btn-group .btn:first-child, 
    .project .front .body .btn-group .btn:first-child {
        width: 100%;
    }

    .project .back .btn-group .btn .icon,
    .project .front .body .btn-group .btn .icon {
        font-size: 24px;
    }

    @media (max-width: 768px) {
        .categories {
            gap: 24px;
            margin: 24px 0;
        }
    }
`;
