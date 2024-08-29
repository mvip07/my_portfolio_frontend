import { useEducation } from "./useEducation"

import {
    EducationP,
    CreateEducation,
    UpdateEducation,
    DeleteEducation,
} from "./styledComponents"
import { PageNotFound } from "../../../pages/PageNotFound"


export const Education = () => {
    const {
        active,
        loading,
        education,
        educationId,
        educationsList,
        setActive,
        submitDelete,
        handleInputChange,
        submitCreateEducation,
        submitUpdateEducation,
    } = useEducation()

    return (
        <EducationP id="education2">
            {
                educationsList.length > 0 ? (
                    <>
                        <div className="education-header">
                            <h2 className="title">Education</h2>
                            <div className="btn-icon">
                                <div className="item" onClick={() => setActive("create")}>
                                    <span>Education</span> <div className="circle"><i className="fa-solid fa-plus"></i></div>
                                </div>
                            </div>
                        </div>

                        <div className="education-content">
                            {educationsList}
                        </div>
                    </>
                ) : <PageNotFound text={"Education Page"} navigateUrl={"/dashboard/education"} /> 
            }

            <CreateEducation className={`modal-md-content ${active === "create" ? 'active' : ""}`}>
                <div className="modal">
                    <div className="modal-header">
                        <h2 className="header-title">Create Education</h2>
                        <div className="close" onClick={() => setActive("")}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-body">
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="institution">Institution</label>
                                <input type="text" id="institution" name="institution" onChange={(e) => handleInputChange(e, "create")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="degree">Degree</label>
                                <input type="text" id="degree" name="degree" onChange={(e) => handleInputChange(e, "create")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="fieldOfStudy">Field Of Study</label>
                                <input type="text" id="fieldOfStudy" name="fieldOfStudy" onChange={(e) => handleInputChange(e, "create")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="startDate">Start Date</label>
                                <input type="date" id="startDate" name="startDate" onChange={(e) => handleInputChange(e, "create")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="endDate">End Date</label>
                                <input type="date" id="endDate" name="endDate" onChange={(e) => handleInputChange(e, "create")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="where">Where</label>
                                <input type="text" id="where" name="where" onChange={(e) => handleInputChange(e, "create")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea rows="10" id="description" name="description" onChange={(e) => handleInputChange(e, "create")} />
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-footer">
                        <div className="btn-group">
                            <button className="submit" onClick={submitCreateEducation} disabled={loading.name === "create" && loading.active}>
                                {loading.name === "create" && loading.active ? <i className="fa-solid fa-spinner fa-spin"></i> : "Create Education"}
                            </button>
                        </div>
                    </div>
                </div>
            </CreateEducation>

            <UpdateEducation className={`modal-md-content ${active === "update" ? 'active' : ""}`}>
                <div className="modal">
                    <div className="modal-header">
                        <h2 className="header-title">Update Education</h2>
                        <div className="close"
                            onClick={() => setActive("")}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-body">
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="institution">Institution</label>
                                <input type="text" id="institution" name="institution" defaultValue={education.institution} onChange={(e) => handleInputChange(e, "update")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="degree">Degree</label>
                                <input type="text" id="degree" name="degree" defaultValue={education.degree} onChange={(e) => handleInputChange(e, "update")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="fieldOfStudy">Field Of Study</label>
                                <input type="text" id="fieldOfStudy" name="fieldOfStudy" defaultValue={education.fieldOfStudy} onChange={(e) => handleInputChange(e, "update")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="startDate">Start Date</label>
                                <input type="date" id="startDate" name="startDate" defaultValue={education?.startDate ? new Date(education.startDate).toISOString().split('T')[0] : ''} onChange={(e) => handleInputChange(e, "update")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="endDate">End Date</label>
                                <input type="date" id="endDate" name="endDate" defaultValue={education?.endDate ? new Date(education.endDate).toISOString().split('T')[0] : ''} onChange={(e) => handleInputChange(e, "update")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="where">Where</label>
                                <input type="text" id="where" name="where" defaultValue={education.where} onChange={(e) => handleInputChange(e, "update")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea rows="10" id="description" name="description" defaultValue={education.description} onChange={(e) => handleInputChange(e, "update")} />
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-footer">
                        <div className="btn-group">
                            <button className="submit" onClick={() => submitUpdateEducation(educationId)} disabled={loading.name === "update" && loading.active}>
                                {loading.name === "update" && loading.active ? <i className="fa-solid fa-spinner fa-spin"></i> : "Update Education"}
                            </button>
                        </div>
                    </div>
                </div>
            </UpdateEducation>

            <DeleteEducation className={`modal-sm-content ${active === "delete" ? 'active' : ""}`}>
                <div className="modal">
                    <div className="modal-header">
                        <h2 className="header-title">Delete Education</h2>
                        <div className="close" onClick={() => setActive("")}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-body">
                        <h4 className="text">Are you sure you want to delete your Education data?</h4>
                    </div>
                    <div className="line"></div>
                    <div className="modal-footer">
                        <div className="btn-group">
                            <button className="submit" onClick={() => submitDelete(educationId)} disabled={loading.name === "delete" && loading.active}>
                                {loading.name === "delete" && loading.active ? <i className="fa-solid fa-spinner fa-spin"></i> : "Delete Service"}
                            </button>
                        </div>
                    </div>
                </div>
            </DeleteEducation>

        </EducationP >
    )
}