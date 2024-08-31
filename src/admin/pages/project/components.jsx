import { useState } from "react";

export const TechnologyItem = ({ getObject, data, setActive, index }) => {
    return (
        <tr>
            <td><input type="checkbox" name="check" id="check" /></td>
            <td>{index}</td>
            <td>{data.title}</td>
            <td>{data.updatedAt.slice(0, 10)}</td>
            <td>{data.createdAt.slice(0, 10)}</td>
            <td>
                <div className="icons">
                    <div className="icon-item"
                        onClick={() => {
                            setActive("updateT");
                            getObject("technology", data)
                        }}>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </div>
                    <div className="icon-item"
                        onClick={() => {
                            setActive("deleteT");
                            getObject("technology", data)
                        }}>
                        <i className="fa-solid fa-trash-can"></i>
                    </div>
                </div>
            </td>
        </tr>
    )
}

export const CategoryItem = ({ getObject, data, setActive, index }) => {
    return (
        <tr>
            <td><input type="checkbox" name="check" id="check" /></td>
            <td>{index}</td>
            <td>{data.title}</td>
            <td>{data.updatedAt.slice(0, 10)}</td>
            <td>{data.createdAt.slice(0, 10)}</td>
            <td>
                <div className="icons">
                    <div className="icon-item"
                        onClick={() => {
                            setActive("updateC");
                            getObject("category", data)
                        }}>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </div>
                    <div className="icon-item"
                        onClick={() => {
                            setActive("deleteC");
                            getObject("category", data)
                        }}>
                        <i className="fa-solid fa-trash-can"></i>
                    </div>
                </div>
            </td>
        </tr>
    )
}

export const ProjectItem = ({ getObject, data, setActive, index }) => {
    const [activeCard, setActiveCard] = useState(false)
    return (
        <div className={`item ${activeCard ? "active" : ""}`}>
            <div className="front">
                <div className="card-header">
                    <img src={data.image} className="project-img" width="100%" height="100%" alt="Card Images" />
                </div>
                <div className="card-body">
                    <div className="icons">
                        <div className="icon-item"
                            onClick={() => {
                                getObject("project", data);
                                setActive("updateP");
                            }}>
                            <i className="fa-solid fa-pen-to-square"></i>
                        </div>
                        <div className="icon-item"
                            onClick={() => {
                                getObject("project", data);
                                setActive("deleteP");
                            }}>
                            <i className="fa-solid fa-trash-can"></i>
                        </div>
                    </div>
                    <div className="text">
                        <h3 className="project-title">{data.title}</h3>
                        {
                            data?.category?.map(({ title }, index) => (
                                <p className="project-category" key={index}>{title}</p>
                            ))
                        }
                        <p className="project-description">{data.description.length > 50 ? data.description.slice(0, 50) + "..." : data.description}</p>
                    </div>
                    <div className="btnGroup">
                        <button className="btn" onClick={() => setActiveCard(!activeCard)}>Reed More</button>
                        <a href={data.serverLink} className="btn">
                            <i className="bx bx-link-external"></i>
                        </a>
                        <a href={data.githubLink} className="btn">
                            <i className="bx bxl-github"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="back">
                <div className="card-body">
                    <div className="text">
                        <p className="project-description">{data.description}</p>
                        <div className="technologies">
                            {
                                data?.technology?.map(({ title }, index) => (
                                    <div className="tech-item" key={index}>{title}</div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="btnGroup">
                        <button className="btn" onClick={() => setActiveCard(!activeCard)}>
                            <i className="bx bx-left-arrow-alt"></i>
                        </button>
                        <a href={data.serverLink} className="btn">
                            <i className="bx bx-link-external"></i>
                        </a>
                        <a href={data.githubLink} className="btn">
                            <i className="bx bxl-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}