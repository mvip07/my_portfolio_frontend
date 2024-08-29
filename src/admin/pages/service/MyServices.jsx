import { useService } from "./useService";

import {
    MyServicesP,
    CreateServices,
    UpdateServices,
    DeleteServices,
    CreateServicesItem,
    UpdateServicesItem,
    DeleteServicesItem,
} from "./styledComponents";
import { PageNotFound } from "../../../pages/PageNotFound";

export const MyServices = () => {
    const {
        active,
        loading,
        preview,
        service,
        serviceId,
        serviceItem,
        servicesList,
        serviceItemId,
        setActive,
        submitDelete,
        handleFileChange,
        handleInputChange,
        submitCreateService,
        submitUpdateService,
        submitCreateServiceItem,
        submitUpdateServiceItem,
        submitDeleteServiceItem,
    } = useService();

    return (
        <MyServicesP id="service2">
            {
                servicesList.length > 0 ? (
                    <>
                        <div className="service-header">
                            <h2 className="title">My Services</h2>
                            <div className="btn-icon">
                                <div className="item" onClick={() => setActive("create")}>
                                    <span>Services</span>
                                    <div className="circle"><i className="fa-solid fa-plus"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="services">
                            {servicesList}
                        </div>
                    </>
                ) : <PageNotFound text={"Service Page"} navigateUrl={"/dashboard/service"} />
            }

            {/* Create, Update, Delete Service Modals */}
            <CreateServices className={`modal-md-content ${active === "create" ? 'active' : ""}`}>
                <div className="modal">
                    <div className="modal-header">
                        <h2 className="header-title">Create Service</h2>
                        <div className="close" onClick={() => setActive("")}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-body">
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="title">Service Title</label>
                                <input type="text" id="title" name="title" onChange={(e) => handleInputChange(e, "create")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Service Description</label>
                                <input type="text" id="description" name="description" onChange={(e) => handleInputChange(e, "create")} />
                            </div>
                            <div className="form-group">
                                {preview.icon && <img width="200px" height="200px" src={preview.icon} alt="Icon" />}
                                <div className="upload">
                                    <label htmlFor="icon"><i className="fa-solid fa-upload"></i></label>
                                    <input type="file" name="icon" id="icon" accept="image/svg+xml" onChange={(e) => handleFileChange(e, "create")} />
                                    <p>Click to upload or drag and drop Icon (SVG)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-footer">
                        <button className="submit" onClick={submitCreateService} disabled={loading.name === "create" && loading.active}>
                            {loading.name === "create" && loading.active ? <i className="fa-solid fa-spinner fa-spin"></i> : "Create Service"}
                        </button>
                    </div>
                </div>
            </CreateServices>

            <UpdateServices className={`modal-md-content ${active === "update" ? 'active' : ""}`}>
                <div className="modal">
                    <div className="modal-header">
                        <h2 className="header-title">Update Service</h2>
                        <div className="close" onClick={() => setActive("")}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-body">
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="title2">Service Title</label>
                                <input type="text" id="title2" name="title" defaultValue={service.title} onChange={(e) => handleInputChange(e, "update")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description2">Service Description</label>
                                <input type="text" id="description2" name="description" defaultValue={service.description} onChange={(e) => handleInputChange(e, "update")} />
                            </div>
                            <div className="form-group">
                                {preview.icon && <img width="200px" height="200px" src={preview.icon} alt="Icon" />}
                                <div className="upload">
                                    <label htmlFor="icon2"><i className="fa-solid fa-upload"></i></label>
                                    <input type="file" name="icon" id="icon2" accept="image/svg+xml" defaultValue={service.icon} onChange={(e) => handleFileChange(e, "update")} />
                                    <p>Click to upload or drag and drop Icon (SVG)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-footer">
                        <button className="submit" onClick={() => submitUpdateService(serviceId)} disabled={loading.name === "update" && loading.active}>
                            {loading.name === "update" && loading.active ? <i className="fa-solid fa-spinner fa-spin"></i> : "Update Service"}
                        </button>
                    </div>
                </div>
            </UpdateServices>

            <DeleteServices className={`modal-md-content ${active === "delete" ? 'active' : ""}`}>
                <div className="modal">
                    <div className="modal-header">
                        <h2 className="header-title">Delete Service</h2>
                        <div className="close" onClick={() => setActive("")}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-body">
                        <h4 className="text">Are you sure you want to delete your Service data?</h4>
                    </div>
                    <div className="line"></div>
                    <div className="modal-footer">
                        <button className="submit" onClick={() => submitDelete(serviceId)} disabled={loading.name === "delete" && loading.active}>
                            {loading.name === "delete" && loading.active ? <i className="fa-solid fa-spinner fa-spin"></i> : "Delete Service"}
                        </button>
                    </div>
                </div>
            </DeleteServices>

            {/* Create, Update, Delete Service Item Modals */}
            <CreateServicesItem className={`modal-md-content ${active === "createItem" ? 'active' : ""}`}>
                <div className="modal">
                    <div className="modal-header">
                        <h2 className="header-title">Create Service Item</h2>
                        <div className="close" onClick={() => setActive("")}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-body">
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="service-title">Item Title</label>
                                <input type="text" id="service-title" name="title" defaultValue={service?.title} readOnly />
                            </div>
                            <div className="form-group">
                                <label htmlFor="item-title">Item Title</label>
                                <input type="text" id="item-title" name="name" onChange={(e) => handleInputChange(e, "createItem")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="item-description">Item Description</label>
                                <input type="number" id="item-description" name="price" onChange={(e) => handleInputChange(e, "createItem")} />
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-footer">
                        <button className="submit" onClick={() => submitCreateServiceItem(serviceId)} disabled={loading.name === "createItem" && loading.active}>
                            {loading.name === "createItem" && loading.active ? <i className="fa-solid fa-spinner fa-spin"></i> : "Create Service Item"}
                        </button>
                    </div>
                </div>
            </CreateServicesItem>

            <UpdateServicesItem className={`modal-md-content ${active === "updateItem" ? 'active' : ""}`}>
                <div className="modal">
                    <div className="modal-header">
                        <h2 className="header-title">Update Service Item</h2>
                        <div className="close" onClick={() => setActive("")}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-body">
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="service-title">Item Title</label>
                                <input type="text" id="service-title" name="title" defaultValue={service?.title} readOnly />
                            </div>
                            <div className="form-group">
                                <label htmlFor="item-title2">Item Title</label>
                                <input type="text" id="item-title2" name="name" defaultValue={serviceItem.name} onChange={(e) => handleInputChange(e, "updateItem")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="item-description2">Item Description</label>
                                <input type="number" id="item-description2" name="price" defaultValue={serviceItem.price} onChange={(e) => handleInputChange(e, "updateItem")} />
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-footer">
                        <button className="submit" onClick={() => submitUpdateServiceItem(serviceId, serviceItemId)} disabled={loading.name === "updateItem" && loading.active}>
                            {loading.name === "updateItem" && loading.active ? <i className="fa-solid fa-spinner fa-spin"></i> : "Update Service Item"}
                        </button>
                    </div>
                </div>
            </UpdateServicesItem>

            <DeleteServicesItem className={`modal-md-content ${active === "deleteItem" ? 'active' : ""}`}>
                <div className="modal">
                    <div className="modal-header">
                        <h2 className="header-title">Delete Service Item</h2>
                        <div className="close" onClick={() => setActive("")}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="modal-body">
                        <h4 className="text">Are you sure you want to delete your Service Item data?</h4>
                    </div>
                    <div className="line"></div>
                    <div className="modal-footer">
                        <button className="submit" onClick={() => submitDeleteServiceItem(serviceId, serviceItemId)} disabled={loading.name === "deleteItem" && loading.active}>
                            {loading.name === "deleteItem" && loading.active ? <i className="fa-solid fa-spinner fa-spin"></i> : "Delete Service Item"}
                        </button>
                    </div>
                </div>
            </DeleteServicesItem>
        </MyServicesP>
    );
};
