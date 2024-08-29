import { useWork } from "./useWork"

import {
    WorkP,
    CreateWork,
    UpdateWork,
    DeleteWork,
} from "./styledComponents"

import { PageNotFound } from "../../../pages/PageNotFound"
export const Work = () => {

    const {
        work,
        active,
        workId,
        loading,
        worksList,
        setActive,
        submitDelete,
        submitCreateWork,
        submitUpdateWork,
        handleInputChange,
    } = useWork()

    return (
        <WorkP id="work2">
            {
                worksList.length > 0 ? (
                    <>
                        <div className="work-header">
                            <h2 className="title">Work History</h2>
                            <div className="btn-icon">
                                <div className="item" onClick={() => setActive("create")}>
                                    <span>Work</span> <div className="circle"><i className="fa-solid fa-plus"></i></div>
                                </div>
                            </div>
                        </div>

                        <div className="work-content">
                            {worksList}
                        </div>
                    </>
                ) : <PageNotFound text={"Work Page"} navigateUrl={"/dashboard/work"} />
            }

            <CreateWork className={`modal-md-content ${active === "create" ? 'active' : ""}`}>
                <div className="modal">
                    <div className="modal-header">
                        <h2 className="header-title">Create Work</h2>
                        <div className="close" onClick={() => setActive("")}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-body">
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="companyName">Company Name</label>
                                <input type="text" id="companyName" name="companyName" onChange={(e) => handleInputChange(e, "create")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="degree">Degree</label>
                                <input type="text" id="degree" name="degree" onChange={(e) => handleInputChange(e, "create")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="fieldOfWork">Field Of Work</label>
                                <input type="text" id="fieldOfWork" name="fieldOfWork" onChange={(e) => handleInputChange(e, "create")} />
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
                            <button className="submit" onClick={submitCreateWork} disabled={loading.name === "create" && loading.active}>
                                {loading.name === "create" && loading.active ? <i className="fa-solid fa-spinner fa-spin"></i> : "Create Work"}
                            </button>
                        </div>
                    </div>
                </div>
            </CreateWork>

            <UpdateWork className={`modal-md-content ${active === "update" ? 'active' : ""}`}>
                <div className="modal">
                    <div className="modal-header">
                        <h2 className="header-title">Update Work</h2>
                        <div className="close" onClick={() => setActive("")}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-body">
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="companyName">Company Name</label>
                                <input type="text" id="companyName" name="companyName" defaultValue={work.companyName} onChange={(e) => handleInputChange(e, "update")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="degree">Degree</label>
                                <input type="text" id="degree" name="degree" defaultValue={work.degree} onChange={(e) => handleInputChange(e, "update")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="fieldOfWork">Field Of Work</label>
                                <input type="text" id="fieldOfWork" name="fieldOfWork" defaultValue={work.fieldOfWork} onChange={(e) => handleInputChange(e, "update")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="startDate">Start Date</label>
                                <input type="date" id="startDate" name="startDate" defaultValue={work?.startDate ? new Date(work.startDate).toISOString().split('T')[0] : ''} onChange={(e) => handleInputChange(e, "update")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="endDate">End Date</label>
                                <input type="date" id="endDate" name="endDate" defaultValue={work?.endDate ? new Date(work.endDate).toISOString().split('T')[0] : ''} onChange={(e) => handleInputChange(e, "update")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="where">Where</label>
                                <input type="text" id="where" name="where" defaultValue={work.where} onChange={(e) => handleInputChange(e, "update")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea rows="10" id="description" name="description" defaultValue={work.description} onChange={(e) => handleInputChange(e, "update")} />
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-footer">
                        <div className="btn-group">
                            <button className="submit" onClick={() => submitUpdateWork(workId)} disabled={loading.name === "update" && loading.active}>
                                {loading.name === "update" && loading.active ? <i className="fa-solid fa-spinner fa-spin"></i> : "Update Work"}
                            </button>
                        </div>
                    </div>
                </div>
            </UpdateWork>

            <DeleteWork className={`modal-sm-content ${active === "delete" ? 'active' : ""}`}>
                <div className="modal">
                    <div className="modal-header">
                        <h2 className="header-title">Delete Work</h2>
                        <div className="close" onClick={() => setActive("")}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-body">
                        <h4 className="text">Are you sure you want to delete your Work data?</h4>
                    </div>
                    <div className="line"></div>
                    <div className="modal-footer">
                        <div className="btn-group">
                            <button className="submit" onClick={() => submitDelete(workId)} disabled={loading.name === "delete" && loading.active}>
                                {loading.name === "delete" && loading.active ? <i className="fa-solid fa-spinner fa-spin"></i> : "Delete Work"}
                            </button>
                        </div>
                    </div>
                </div>
            </DeleteWork>
        </WorkP>
    )
}