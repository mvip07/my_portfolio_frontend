import React from "react";
import { useAbout } from "./useAbout";
import { host } from "../../../assets/utils/api";
import { PageNotFound } from "../../../pages/PageNotFound";
import { AboutP, CreateModal, UpdateModal, DeleteModal } from "./styledComponents";

export const About = () => {
    const {
        active,
        loading,
        preview,
        aboutData,
        formData,

        setActive,
        submitDelete,
        handleFileChange,
        submitCreatePost,
        submitUpdatePost,
        handleInputChange,
    } = useAbout();

    return (
        <AboutP id="about2">
            {Object.entries(aboutData).length > 0 ? (
                <>
                    <div className="d-flex">
                        <div className="user-img">
                            <img src={`${host}/${aboutData.image}`} alt="" width="100%" height="100%" />
                        </div>
                        <div className="user-text">
                            <h1 className="name">I am {aboutData.name} {aboutData.profession}</h1>
                            <p className="description"><i className="fa-brands fa-readme"></i>{aboutData.description}</p>
                            <p className="email"><i className="fa-solid fa-envelope"></i>{aboutData.contact?.email}</p>
                            <p className="telephone"><i className="fa-solid fa-phone"></i>{aboutData.contact?.phone}</p>
                        </div>
                        <div className="crud-icons">
                            <div className={`item ${active === "create" ? 'active' : ""}`} onClick={() => setActive("create")}>
                                <i className="fa-solid fa-plus"></i>
                            </div>
                            <div className={`item ${active === "update" ? 'active' : ""}`} onClick={() => setActive("update")}>
                                <i className="fa-solid fa-pen-to-square"></i>
                            </div>
                            <div className={`item ${active === "delete" ? 'active' : ""}`} onClick={() => setActive("delete")}>
                                <i className="fa-solid fa-trash-can"></i>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: '100%', height: '100%', marginTop: "32px" }}>
                        <iframe src={`${host}/${aboutData.cv}`} style={{ width: '100%', height: '50%' }}></iframe>
                    </div>
                </>
            ) : <PageNotFound text={"About Page"} navigateUrl={"/dashboard/about"} />}

            {/* Create Modal */}
            <CreateModal className={`modal-md-content ${active === "create" ? 'active' : ""}`}>
                <div className="modal">
                    <div className="modal-header">
                        <h2 className="header-title">Create About</h2>
                        <div className="close" onClick={() => setActive("")}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-body">
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input type="text" id="name" name="name" onChange={(e) => handleInputChange(e, "create")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" onChange={(e) => handleInputChange(e, "create")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input type="tel" id="phone" name="phone" onChange={(e) => handleInputChange(e, "create")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="profession">Your Profession</label>
                                <input type="text" id="profession" name="profession" onChange={(e) => handleInputChange(e, "create")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Your Description</label>
                                <textarea id="description" name="description" onChange={(e) => handleInputChange(e, "create")}></textarea>
                            </div>
                            <div className="form-group">
                                <div className="file-preview">
                                    <img src={preview.image || `${host}/${aboutData.image}`} width="300px" height="300px" alt="" />
                                </div>
                                <div className="upload">
                                    <label htmlFor="image"><i className="fa-solid fa-upload"></i></label>
                                    <input type="file" id="image" name="image" accept="image/png, image/jpeg" onChange={(e) => handleFileChange(e, "create")} />
                                    <p>Click to upload or drag and drop image (PNG, JPG, JPEG)</p>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="file-preview">
                                    <embed src={preview.cv || `${host}/${aboutData.cv}`} type="application/pdf" width="100%" height="300px" />
                                </div>
                                <div className="upload">
                                    <label htmlFor="cv"><i className="fa-solid fa-upload"></i></label>
                                    <input type="file" id="cv" name="cv" accept="application/pdf" onChange={(e) => handleFileChange(e, "create")} />
                                    <p>Click to upload or drag and drop image (PDF)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-footer">
                        <button className="submit" onClick={submitCreatePost} disabled={loading.name === "createAbout" && loading.active}>
                            {loading.name === "createAbout" && loading.active ? <i className="fa-solid fa-spinner fa-spin"></i> : "Create About"}
                        </button>
                    </div>
                </div>
            </CreateModal>

            {/* Update Modal */}
            <UpdateModal className={`modal-md-content ${active === "update" ? 'active' : ""}`}>
                <div className="modal">
                    <div className="modal-header">
                        <h2 className="header-title">Update About</h2>
                        <div className="close" onClick={() => setActive("")}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-body">
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="name2">Your Name</label>
                                <input type="text" id="name2" name="name" defaultValue={formData.update.name} onChange={(e) => handleInputChange(e, "update")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email2">Email</label>
                                <input type="email" id="email2" name="email" defaultValue={formData.update.email} onChange={(e) => handleInputChange(e, "update")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone2">Phone</label>
                                <input type="tel" id="phone2" name="phone" defaultValue={formData.update.phone} onChange={(e) => handleInputChange(e, "update")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="profession2">Your Profession</label>
                                <input type="text" id="profession2" name="profession" defaultValue={formData.update.profession} onChange={(e) => handleInputChange(e, "update")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description2">Your Description</label>
                                <textarea id="description2" rows="10" name="description" defaultValue={formData.update.description} onChange={(e) => handleInputChange(e, "update")}></textarea>
                            </div>
                            <div className="form-group">
                                <div className="file-preview">
                                    <img src={preview.image || `${host}/${aboutData.image}`} width="300px" height="300px" alt="" />
                                </div>
                                <div className="upload">
                                    <label htmlFor="image2"><i className="fa-solid fa-upload"></i></label>
                                    <input type="file" id="image2" name="image" accept="image/png, image/jpeg" onChange={(e) => handleFileChange(e, "update")} />
                                    <p>Click to upload or drag and drop image (PNG, JPG, JPEG)</p>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="file-preview">
                                    <embed src={preview.cv || `${host}/${aboutData.cv}`} type="application/pdf" width="100%" height="300px" />
                                </div>
                                <div className="upload">
                                    <label htmlFor="cv2"><i className="fa-solid fa-upload"></i></label>
                                    <input type="file" id="cv2" name="cv" accept="application/pdf" onChange={(e) => handleFileChange(e, "update")} />
                                    <p>Click to upload or drag and drop image (PDF)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-footer">
                        <button className="submit" onClick={submitUpdatePost} disabled={loading.name === "updateAbout" && loading.active}>
                            {loading.name === "updateAbout" && loading.active ? <i className="fa-solid fa-spinner fa-spin"></i> : "Update About"}
                        </button>
                    </div>
                </div>
            </UpdateModal>

            {/* Delete Modal */}
            <DeleteModal className={`modal-sm-content ${active === "delete" ? 'active' : ""}`}>
                <div className="modal">
                    <div className="modal-header">
                        <h2 className="header-title">Delete About</h2>
                        <div className="close" onClick={() => setActive("")}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-body">
                        <h4 className="text">Are you sure you want to delete your About data?</h4>
                    </div>
                    <div className="line"></div>
                    <div className="modal-footer">
                        <button className="submit" onClick={submitDelete} disabled={loading.name === "deleteAbout" && loading.active}>
                            {loading.name === "deleteAbout" && loading.active ? <i className="fa-solid fa-spinner fa-spin"></i> : "Delete About"}
                        </button>
                    </div>
                </div>
            </DeleteModal>
        </AboutP>
    );
};