import { useProject } from "./useProject"
import { PageNotFound } from "../../../pages/PageNotFound"

import {
    ProjectP,
    CreateProject,
    UpdateProject,
    DeleteProject,
    CreateCategory,
    UpdateCategory,
    DeleteCategory,
    CreateTechnology,
    UpdateTechnology,
    DeleteTechnology,
} from "./styledComponents"


export const Project = () => {
    const {
        active,
        loading,
        preview,
        setActive,

        data,
        project,
        projectList,
        category,
        categoryList,
        technology,
        technologyList,

        currentPageT,
        currentPageC,
        paginationItems,
        handlePageChange,
        handleCurrentPage,
        handleItemsPerPageChange,

        handleFileChange,
        handleInputChange,

        submitDelete,
        submitCreateProject,
        submitUpdateProject,
        submitCreateCategory,
        submitUpdateCategory,
        submitCreateTechnology,
        submitUpdateTechnology,
    } = useProject()

    return (
        <ProjectP id="project2">
            {
                projectList.length > 0 || technologyList.length > 0 || categoryList.length > 0 ? (
                    <>
                        <div className="project-header">
                            <h2 className="title">Project</h2>
                            <div className="btn-icon">
                                <div className="item" onClick={() => setActive("createT")}>
                                    <span> Technology </span> <div className="circle"><i className="fa-solid fa-plus"></i></div>
                                </div>
                                <div className="item" onClick={() => setActive("createC")}>
                                    <span> Category </span> <div className="circle"><i className="fa-solid fa-plus"></i></div>
                                </div>
                                <div className="item" onClick={() => setActive("createP")}>
                                    <span> Project </span> <div className="circle"><i className="fa-solid fa-plus"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="technology">
                            <div className="technology-header">
                                <h3 className="title">Technology Lists ({technologyList.length} / {data?.technologies.length})</h3>
                                <select onChange={(e) => handleItemsPerPageChange("technologies", e)}>
                                    <option defaultValue={5}>5</option>
                                    <option defaultValue={10}>10</option>
                                    <option defaultValue={15}>15</option>
                                    <option defaultValue={20}>20</option>
                                </select>
                            </div>
                            <div className="table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th><input type="checkbox" name="allcheck" id="allcheck" /></th>
                                            <th>No</th>
                                            <th>Title</th>
                                            <th>Update At</th>
                                            <th>Created At</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {technologyList}
                                    </tbody>
                                </table>
                            </div>
                            <div className="paginations">
                                <div className="item"
                                    onClick={() => handlePageChange("technologies", "prev")}>
                                    <i className="fa-solid fa-left-long"></i>
                                </div>
                                {
                                    paginationItems("technologies")?.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`item ${currentPageT === item ? 'active' : ''}`}
                                            onClick={() => typeof item === 'number' && handleCurrentPage("technologies", item)}
                                        >
                                            {item}
                                        </div>
                                    ))
                                }
                                <div className="item"
                                    onClick={() => handlePageChange("technologies", "next")}>
                                    <i className="fa-solid fa-right-long"></i>
                                </div>
                            </div>
                        </div>
                        <div className="technology">
                            <div className="technology-header">
                                <h3 className="title">Category Lists ({categoryList.length} / {data?.categories.length})</h3>
                                <select onChange={(e) => handleItemsPerPageChange("categories", e)}>
                                    <option defaultValue={5}>5</option>
                                    <option defaultValue={2}>2</option>
                                    <option defaultValue={10}>10</option>
                                    <option defaultValue={15}>15</option>
                                    <option defaultValue={20}>20</option>
                                </select>
                            </div>
                            <div className="table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th><input type="checkbox" name="allcheck" id="allcheck" /></th>
                                            <th>No</th>
                                            <th>Title</th>
                                            <th>Update At</th>
                                            <th>Created At</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {categoryList}
                                    </tbody>
                                </table>
                            </div>
                            <div className="paginations">
                                <div className="item"
                                    onClick={() => handlePageChange("categories", "prev")}>
                                    <i className="fa-solid fa-left-long"></i>
                                </div>
                                {
                                    paginationItems("categories")?.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`item ${currentPageC === item ? 'active' : ''}`}
                                            onClick={() => typeof item === 'number' && handleCurrentPage("categories", item)}
                                        >
                                            {item}
                                        </div>
                                    ))
                                }
                                <div className="item"
                                    onClick={() => handlePageChange("categories", "next")}>
                                    <i className="fa-solid fa-right-long"></i>
                                </div>
                            </div>
                        </div>
                        <div className="projects">
                            {projectList}
                        </div>
                    </>
                )
                    : <PageNotFound text={"Project Page"} navigateUrl={"/dashboard/project"} />
            }


            <CreateTechnology className={`modal-md-content ${active === "createT" ? 'active' : ""}`}>
                <div className="modal">
                    <div className="modal-header">
                        <h2 className="header-title">Create Technology</h2>
                        <div className="close" onClick={() => setActive("")}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-body">
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="text" id="title" name="title" onChange={(e) => handleInputChange(e, "createT")} />
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-footer">
                        <div className="btn-group">
                            <button className="submit" onClick={submitCreateTechnology} disabled={loading.name === "createT" && loading.active}>
                                {loading.name === "createT" && loading.active ? <i className="fa-solid fa-spinner fa-spin"></i> : "Create Technology"}
                            </button>
                        </div>
                    </div>
                </div>
            </CreateTechnology>

            <UpdateTechnology className={`modal-md-content ${active === "updateT" ? 'active' : ""}`}>
                <div className="modal">
                    <div className="modal-header">
                        <h2 className="header-title">Update Technology</h2>
                        <div className="close" onClick={() => setActive("")}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-body">
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="text" id="title" name="title" defaultValue={technology.title} onChange={(e) => handleInputChange(e, "updateT")} />
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-footer">
                        <div className="btn-group">
                            <button className="submit" onClick={() => submitUpdateTechnology(technology._id)} disabled={loading.name === "updateT" && loading.active}>
                                {loading.name === "updateT" && loading.active ? <i className="fa-solid fa-spinner fa-spin"></i> : "Update Technology"}
                            </button>
                        </div>
                    </div>
                </div>
            </UpdateTechnology>

            <DeleteTechnology className={`modal-sm-content ${active === "deleteT" ? 'active' : ""}`}>
                <div className="modal">
                    <div className="modal-header">
                        <h2 className="header-title">Delete Technology</h2>
                        <div className="close" onClick={() => setActive("")}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-body">
                        <h4 className="text">Are you sure you want to delete your Technology data?</h4>
                    </div>
                    <div className="line"></div>
                    <div className="modal-footer">
                        <div className="btn-group">
                            <button className="submit" onClick={() => submitDelete("deleteT", technology._id)} disabled={loading.name === "deleteT" && loading.active}>
                                {loading.name === "deleteT" && loading.active ? <i className="fa-solid fa-spinner fa-spin"></i> : "Delete Technology"}
                            </button>
                        </div>
                    </div>
                </div>
            </DeleteTechnology>


            <CreateCategory className={`modal-md-content ${active === "createC" ? 'active' : ""}`}>
                <div className="modal">
                    <div className="modal-header">
                        <h2 className="header-title">Create Category</h2>
                        <div className="close" onClick={() => setActive("")}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-body">
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="text" id="title" name="title" onChange={(e) => handleInputChange(e, "createC")} />
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-footer">
                        <div className="btn-group">
                            <button className="submit" onClick={submitCreateCategory} disabled={loading.name === "createC" && loading.active}>
                                {loading.name === "createC" && loading.active ? <i className="fa-solid fa-spinner fa-spin"></i> : "Create Category"}
                            </button>
                        </div>
                    </div>
                </div>
            </CreateCategory>

            <UpdateCategory className={`modal-md-content ${active === "updateC" ? 'active' : ""}`}>
                <div className="modal">
                    <div className="modal-header">
                        <h2 className="header-title">Update Category</h2>
                        <div className="close" onClick={() => setActive("")}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-body">
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="text" id="title" name="title" defaultValue={category.title} onChange={(e) => handleInputChange(e, "updateC")} />
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-footer">
                        <div className="btn-group">
                            <button className="submit" onClick={() => submitUpdateCategory(category._id)} disabled={loading.name === "updateC" && loading.active}>
                                {loading.name === "updateC" && loading.active ? <i className="fa-solid fa-spinner fa-spin"></i> : "Update Category"}
                            </button>
                        </div>
                    </div>
                </div>
            </UpdateCategory>

            <DeleteCategory className={`modal-sm-content ${active === "deleteC" ? 'active' : ""}`}>
                <div className="modal">
                    <div className="modal-header">
                        <h2 className="header-title">Delete Category</h2>
                        <div className="close" onClick={() => setActive("")}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-body">
                        <h4 className="text">Are you sure you want to delete your Category data?</h4>
                    </div>
                    <div className="line"></div>
                    <div className="modal-footer">
                        <div className="btn-group">
                            <button className="submit" onClick={() => submitDelete("deleteC", category._id)} disabled={loading.name === "deleteC" && loading.active}>
                                {loading.name === "deleteC" && loading.active ? <i className="fa-solid fa-spinner fa-spin"></i> : "Create Technology"}
                            </button>
                        </div>
                    </div>
                </div>
            </DeleteCategory>


            <CreateProject className={`modal-md-content ${active === "createP" ? 'active' : ""}`}>
                <div className="modal">
                    <div className="modal-header">
                        <h2 className="header-title">Create Project</h2>
                        <div className="close" onClick={() => setActive("")}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-body">
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="text" id="title" name="title" onChange={(e) => handleInputChange(e, "createP")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="serverLink">Server Link</label>
                                <input type="url" id="serverLink" name="serverLink" onChange={(e) => handleInputChange(e, "createP")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="githubLink">Git Hub Source Code</label>
                                <input type="url" id="githubLink" name="githubLink" onChange={(e) => handleInputChange(e, "createP")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="category">Categories</label>
                                <select name="category" multiple size="5" id="category" onChange={(e) => handleInputChange(e, "createP")}>
                                    {
                                        data?.categories && data?.categories?.map((category) => (
                                            <option value={category._id} key={category._id}>{category.title}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="technology">Technologies</label>
                                <select name="technology" multiple size="5" id="technology" onChange={(e) => handleInputChange(e, "createP")}>
                                    {
                                        data?.technologies && data?.technologies?.map((technology) => (
                                            <option value={technology._id} key={technology._id}>{technology.title}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea id="description" rows="12" name="description" onChange={(e) => handleInputChange(e, "createP")} ></textarea>
                            </div>
                            <div className="form-group">
                                {preview.image && <img width="200px" height="200px" src={preview.image} alt="Image" />}
                                <div className="upload">
                                    <label htmlFor="image"><i className="fa-solid fa-upload"></i></label>
                                    <input type="file" name="image" accept="image/png, image/jpeg" id="image" onChange={(e) => handleFileChange(e, "createP")} />
                                    <p>Click to upload or drag and drop Image (PNG, JPG)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-footer">
                        <div className="btn-group">
                            <button className="submit" onClick={submitCreateProject} disabled={loading.name === "createP" && loading.active}>
                                {loading.name === "createP" && loading.active ? <i className="fa-solid fa-spinner fa-spin"></i> : "Create Project"}
                            </button>
                        </div>
                    </div>
                </div>
            </CreateProject>

            <UpdateProject className={`modal-md-content ${active === "updateP" ? 'active' : ""}`}>
                <div className="modal">
                    <div className="modal-header">
                        <h2 className="header-title">Update Project</h2>
                        <div className="close" onClick={() => setActive("")}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-body">
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="text" id="title" name="title" defaultValue={project.title} onChange={(e) => handleInputChange(e, "updateP")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="serverLink">Server Link</label>
                                <input type="url" id="serverLink" name="serverLink" defaultValue={project.serverLink} onChange={(e) => handleInputChange(e, "updateP")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="githubLink">Git Hub Source Code</label>
                                <input type="url" id="githubLink" name="githubLink" defaultValue={project.githubLink} onChange={(e) => handleInputChange(e, "updateP")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="category">Categories</label>
                                <select name="category" id="category" onChange={(e) => handleInputChange(e, "updateP")}>
                                    {
                                        data?.categories && data?.categories?.map((category) => (
                                            <option
                                                value={category._id} key={category._id}
                                                selected={project?.category?.includes(category._id)}>
                                                {category.title}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="technology">Technologies</label>
                                <select name="technology" multiple={true} size="5" id="technology" onChange={(e) => handleInputChange(e, "updateP")}>
                                    {
                                        data?.technologies && data.technologies.map((technology) => (
                                            <option
                                                value={technology._id} key={technology._id}
                                                selected={project?.technology?.includes(technology._id)}>
                                                {technology.title}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea id="description" rows="12" name="description" defaultValue={project.description} onChange={(e) => handleInputChange(e, "updateP")} ></textarea>
                            </div>
                            <div className="form-group">
                                {
                                    preview.image ? <img width="200px" height="200px" src={preview.image} alt="Project Image" />
                                        : <img width="200px" height="200px" src={project?.image} alt="Project Image" />

                                }
                                <div className="upload">
                                    <label htmlFor="update-image"><i className="fa-solid fa-upload"></i></label>
                                    <input type="file" name="image" accept="image/png, image/jpeg" id="update-image" defaultValue={project.image} onChange={(e) => handleFileChange(e, "updateP")} />
                                    <p>Click to upload or drag and drop Image (PNG, JPG)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-footer">
                        <div className="btn-group">
                            <button className="submit" onClick={() => submitUpdateProject(project._id)} disabled={loading.name === "updateP" && loading.active}>
                                {loading.name === "updateP" && loading.active ? <i className="fa-solid fa-spinner fa-spin"></i> : "Update Project"}
                            </button>
                        </div>
                    </div>
                </div>
            </UpdateProject>

            <DeleteProject className={`modal-sm-content ${active === "deleteP" ? 'active' : ""}`}>
                <div className="modal">
                    <div className="modal-header">
                        <h2 className="header-title">Delete Project</h2>
                        <div className="close" onClick={() => setActive("")}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-body">
                        <h4 className="text">Are you sure you want to delete your Project data?</h4>
                    </div>
                    <div className="line"></div>
                    <div className="modal-footer">
                        <div className="btn-group">
                            <button className="submit" onClick={() => submitDelete("deleteP", project._id)} disabled={loading.name === "deleteP" && loading.active}>
                                {loading.name === "deleteP" && loading.active ? <i className="fa-solid fa-spinner fa-spin"></i> : "Delete Project"}
                            </button>
                        </div>
                    </div>
                </div>
            </DeleteProject>
        </ProjectP>
    )
}
