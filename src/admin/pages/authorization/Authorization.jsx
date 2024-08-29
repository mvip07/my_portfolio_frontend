import { UseAuthorization } from "./useAuthorization"

import {
    Permission,
    AuthorizationP,
    CreatePermission,
    UpdatePermission,
    DeletePermission,

    Role,
    CreateRole,
    UpdateRole,
    DeleteRole,
} from "./styledComponents"
import { PageNotFound } from "../../../pages/PageNotFound"

export const Authorization = () => {

    const {
        active,
        loading,
        preview,
        setActive,

        data,
        role,
        roleList,
        permission,
        permissionList,

        currentPageR,
        currentPageP,
        paginationItems,
        handlePageChange,
        handleCurrentPage,
        handleItemsPerPageChange,

        handleInputChange,

        submitDelete,
        submitCreateRole,
        submitUpdateRole,
        submitCreatePermission,
        submitUpdatePermission,
    } = UseAuthorization()

    return (
        <AuthorizationP>
            <Permission id="permission">
                {
                    data?.permissions && data?.permissions.length > 0 ? (
                        <>
                            <div className="permission-header">
                                <h2 className="title">Permission ({permissionList.length} / {data?.permissions.length})</h2>

                                <div className="end">
                                    <div className="selection">
                                        <select name="permisson-pagination" id="permisson-pagination" onChange={(e) => handleItemsPerPageChange("permissions", e)}>
                                            <option value="5">5</option>
                                            <option value="10">10</option>
                                            <option value="15">15</option>
                                            <option value="20">20</option>
                                        </select>
                                    </div>
                                    <div className="icons">
                                        <div className="item" onClick={() => setActive("createP")}>
                                            <i className="fa-solid fa-plus"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="permission-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Name</th>
                                            <th>Path</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {permissionList}
                                    </tbody>
                                </table>
                            </div>
                            <div className="permission-footer">
                                <div className="paginations">
                                    <div className="item" onClick={() => handlePageChange("permissions", "prev")}>
                                        <i className="fa-solid fa-left-long"></i>
                                    </div>
                                    {
                                        paginationItems("permissions")?.map((item, index) => (
                                            <div
                                                key={index}
                                                className={`item ${currentPageP === item ? 'active' : ''}`}
                                                onClick={() => typeof item === 'number' && handleCurrentPage("permissions", item)}
                                            >
                                                {item}
                                            </div>
                                        ))
                                    }
                                    <div className="item" onClick={() => handlePageChange("permissions", "next")}>
                                        <i className="fa-solid fa-right-long"></i>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : <PageNotFound text={"Permission Page"} navigateUrl={"/dashboard/permission"} />
                }

                <CreatePermission className={`modal-md-content ${active === "createP" ? "active" : ""}`}>
                    <div className="modal">
                        <div className="modal-header">
                            <h2 className="header-title">Create Permission</h2>
                            <div className="close" onClick={() => setActive("")}>
                                <i className="fa-solid fa-xmark"></i>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="modal-body">
                            <div className="form">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" name="name" onChange={(e) => handleInputChange(e, "createP")} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="path">Path</label>
                                    <input type="url" id="path" name="path" onChange={(e) => handleInputChange(e, "createP")} />
                                </div>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="modal-footer">
                            <div className="btn-group">
                                <button className="submit" onClick={submitCreatePermission} disabled={loading.name === "createP" && loading.active}>
                                    {loading.name === "createP" && loading.active ? <i className="fa-solid fa-spinner fa-spin"></i> : "Create Permission"}
                                </button>
                            </div>
                        </div>
                    </div>
                </CreatePermission>

                <UpdatePermission className={`modal-md-content ${active === "updateP" ? "active" : ""}`}>
                    <div className="modal">
                        <div className="modal-header">
                            <h2 className="header-title">Update Permission</h2>
                            <div className="close" onClick={() => setActive("")}>
                                <i className="fa-solid fa-xmark"></i>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="modal-body">
                            <div className="form">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" defaultValue={permission.name} name="name" onChange={(e) => handleInputChange(e, "updateP")} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="path">Path</label>
                                    <input type="text" id="path" defaultValue={permission.path} name="path" onChange={(e) => handleInputChange(e, "updateP")} />
                                </div>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="modal-footer">
                            <div className="btn-group">
                                <button className="submit" onClick={() => submitUpdatePermission(permission._id)} disabled={loading.name === "updateP" && loading.active}>
                                    {loading.name === "updateP" && loading.active ? <i className="fa-solid fa-spinner fa-spin"></i> : "Update Permission"}
                                </button>
                            </div>
                        </div>
                    </div>
                </UpdatePermission>

                <DeletePermission className={`modal-sm-content ${active === "deleteP" ? "active" : ""}`}>
                    <div className="modal">
                        <div className="modal-header">
                            <h2 className="header-title">Delete Permission</h2>
                            <div className="close" onClick={() => setActive("")}>
                                <i className="fa-solid fa-xmark"></i>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="modal-body">
                            <h4 className="text">Are you sure you want to delete your Permission data?</h4>
                        </div>
                        <div className="line"></div>
                        <div className="modal-footer">
                            <div className="btn-group">
                                <button className="submit" onClick={() => submitDelete("deleteP", permission._id)} disabled={loading.name === "deleteP" && loading.active}>
                                    {loading.name === "deleteP" && loading.active ? <i className="fa-solid fa-spinner fa-spin"></i> : "Delete Permission"}
                                </button>
                            </div>
                        </div>
                    </div>
                </DeletePermission>
            </Permission>
            <Role id="role">
                {
                    data.roles && data.roles.length > 0 ? (
                        <>
                            <div className="role-header">
                                <h2 className="title">Role</h2>
                                <div className="end">
                                    <div className="selection">
                                        <select name="permisson-pagination" id="permisson-pagination" onChange={(e) => handleItemsPerPageChange("roles", e)}>
                                            <option value="5">5</option>
                                            <option value="10">10</option>
                                            <option value="15">15</option>
                                            <option value="20">20</option>
                                        </select>
                                    </div>
                                    <div className="icons">
                                        <div className="item" onClick={() => setActive("createR")}>
                                            <i className="fa-solid fa-plus"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="role-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Name</th>
                                            <th>Permission</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {roleList}
                                    </tbody>
                                </table>
                            </div>
                            <div className="role-footer">
                                <div className="paginations">
                                    <div className="item" onClick={() => handlePageChange("roles", "prev")}>
                                        <i className="fa-solid fa-left-long"></i>
                                    </div>
                                    {paginationItems("roles")?.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`item ${currentPageR === item ? 'active' : ''}`}
                                            onClick={() => typeof item === 'number' && handleCurrentPage(item)}>
                                            {item}
                                        </div>
                                    ))}
                                    <div className="item" onClick={() => handlePageChange("roles", "next")}>
                                        <i className="fa-solid fa-right-long"></i>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : <PageNotFound text={"Role Page"} navigateUrl={"/dashboard/role"} />
                }

                <CreateRole className={`modal-md-content ${active === "createR" ? "active" : ""}`}>
                    <div className="modal">
                        <div className="modal-header">
                            <h2 className="header-title">Create Role</h2>
                            <div className="close" onClick={() => setActive("")}>
                                <i className="fa-solid fa-xmark"></i>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="modal-body">
                            <div className="form">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" name="name" onChange={(e) => handleInputChange(e, "createR")} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="create-permissions">Permissions</label>
                                    <select multiple size="5" name="permissions" id="create-permissions" onChange={(e) => handleInputChange(e, "createR")}>
                                        {
                                            data?.permissions && data?.permissions?.map((item) => (
                                                <option key={item._id} value={item._id}>{item.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="modal-footer">
                            <div className="btn-group">
                                <button className="submit" onClick={submitCreateRole} disabled={loading.name === "createR" && loading.active}>
                                    {loading.name === "createR" && loading.active ? <i className="fa-solid fa-spinner fa-spin"></i> : "Create Role"}
                                </button>
                            </div>
                        </div>
                    </div>
                </CreateRole>

                <UpdateRole className={`modal-md-content ${active === "updateR" ? "active" : ""}`}>
                    <div className="modal">
                        <div className="modal-header">
                            <h2 className="header-title">Update Role</h2>
                            <div className="close" onClick={() => setActive("")}>
                                <i className="fa-solid fa-xmark"></i>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="modal-body">
                            <div className="form">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" name="name" defaultValue={role.name} onChange={(e) => handleInputChange(e, "updateR")} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="update-permissions">Permissions</label>
                                    <select multiple size="5" name="permissions" id="update-permissions" onChange={(e) => handleInputChange(e, "updateR")}>
                                        {
                                            data?.permissions && data.permissions?.map((item) => (
                                                <option
                                                    key={item._id}
                                                    value={item._id}
                                                    selected={role.permissions && role.permissions?.some(permissionId => permissionId._id.toString() === item._id.toString())}>
                                                    {item.name}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="modal-footer">
                            <div className="btn-group">
                                <button className="submit" onClick={() => submitUpdateRole(role._id)} disabled={loading.name === "updateR" && loading.active}>
                                    {loading.name === "updateR" && loading.active ? <i className="fa-solid fa-spinner fa-spin"></i> : "Update Role"}
                                </button>
                            </div>
                        </div>
                    </div>
                </UpdateRole>

                <DeleteRole className={`modal-sm-content ${active === "deleteR" ? "active" : ""}`}>
                    <div className="modal">
                        <div className="modal-header">
                            <h2 className="header-title">Delete Role</h2>
                            <div className="close" onClick={() => setActive("")}>
                                <i className="fa-solid fa-xmark"></i>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="modal-body">
                            <h4 className="text">Are you sure you want to delete your Role data?</h4>
                        </div>
                        <div className="line"></div>
                        <div className="modal-footer">
                            <div className="btn-group">
                                <button className="submit" onClick={() => submitDelete("deleteR", role._id)} disabled={loading.name === "deleteR" && loading.active}>
                                    {loading.name === "deleteR" && loading.active ? <i className="fa-solid fa-spinner fa-spin"></i> : "Delete Role"}
                                </button>
                            </div>
                        </div>
                    </div>
                </DeleteRole>
            </Role>
        </AuthorizationP >
    )
}