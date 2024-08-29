import { memo, useCallback } from "react";
import { host } from "../../../assets/utils/api";

export const ServiceItem = memo(({ data, getId }) => {
    return (
        <div className="item">
            <img src={`${host}/${data.icon}`} alt="Services Image" />
            <h3 title={`Created At: ${data.createdAt}\nUpdated At: ${data.updatedAt}`}>{data.title}</h3>
            <p>{data.description}</p>
            <div className="crud-icons">
                <div className="icon-item" onClick={() => getId(data._id, data, null, {}, false, "update")}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </div>
                <div className="icon-item" onClick={() => getId(data._id, data, null, {}, false, "delete")}>
                    <i className="fa-solid fa-trash-can"></i>
                </div>
                <div className="icon-item" onClick={() => getId(data._id, data, null, {}, false, "createItem")}>
                    <i className="fa-solid fa-plus"></i>
                </div>
            </div>

            {
                data.items && data.items.map((i, index) => (
                    <div className="description" key={index}>
                        <i className="bx bxs-right-arrow-alt bx-flip-horizontal bx-tada"></i>
                        <div className="service-item-icon">
                            <p title={`Created At: ${i.createdAt}\nUpdated At: ${i.updatedAt}`} >{i.name}</p>
                            <div className="icon-child" onClick={() => getId(data._id, data, i._id, i, true, "updateItem")}>
                                <i className="fa-solid fa-pen-to-square"></i>
                            </div>
                            <div className="icon-child" onClick={() => getId(data._id, data, i._id, i, true, "deleteItem")}>
                                <i className="fa-solid fa-trash-can"></i>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
});
