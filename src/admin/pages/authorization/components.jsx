export const PermissionItem = ({ getObject, setActive, data, index }) => {
    return (
        <tr>
            <td>{index}</td>
            <td>{data.name}</td>
            <td>{data.path}</td>
            <td>
                <div className="icons">
                    <div className="item"
                        onClick={() => {
                            setActive("updateP")
                            getObject("permission", data)
                        }}>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </div>
                    <div className="item"
                        onClick={() => {
                            setActive("deleteP")
                            getObject("permission", data)
                        }}>
                        <i className="fa-solid fa-trash-can"></i>
                    </div>
                </div>
            </td>
        </tr>
    )
}

export const RoleItem = ({ getObject, setActive, data, index }) => {
    return (
        <tr>
            <td>{index}</td>
            <td>{data.name}</td>
            <td>
                {
                    data.permissions.length > 0 ?
                        <select name="permission" id="permission">
                            {
                                data.permissions.map((i) => (
                                    <option key={i._id} value={i._id}>{i.name}</option>
                                ))
                            }
                        </select>
                        :
                        <p>Not Found</p>
                }
            </td>
            <td>
                <div className="icons">
                    <div className="item"
                        onClick={() => {
                            setActive("updateR")
                            getObject("role", data)
                        }}>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </div>
                    <div className="item"
                        onClick={() => {
                            setActive("deleteR")
                            getObject("role", data)
                        }}>
                        <i className="fa-solid fa-trash-can"></i>
                    </div>
                </div>
            </td>
        </tr>
    )
}