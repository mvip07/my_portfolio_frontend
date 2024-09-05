import { useState } from "react"

export const ProjectItem = ({ data }) => {
    const [active, setActive] = useState(false)
    return (
        <div>
            <div className={`project ${active ? "active" : ""}`}>
                <div className="front">
                    <img className="project-img" src={data.image} alt="" />
                    <div className="body">
                        <h3 className="project-title">{data.title}</h3>
                        <p className="project-description">{data.description.length > 100 ? data.description.slice(0, 100) + "..." : data.description}</p>
                        <div className="btn-group">
                            <button className="btn" onClick={() => setActive(true)}>Reed More</button>
                            <a href={data.serverLink} className="btn" target="_blank">
                                <i className="icon bx bx-link-external"></i>
                            </a>
                            <a href={data.githubLink} className="btn" target="_blank">
                                <i className="icon bx bxl-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="back">
                    <div className="body">
                        <p className="project-description">{data.description}</p>
                    </div>
                    <div className="btn-group">
                        <button className="btn" onClick={() => setActive(false)}>
                            <i className="icon bx bx-left-arrow-alt"></i>
                        </button>
                        <a href={data.serverLink} className="btn" target="_blank">
                            <i className="icon bx bx-link-external"></i>
                        </a>
                        <a href={data.githubLink} className="btn" target="_blank">
                            <i className="icon bx bxl-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}