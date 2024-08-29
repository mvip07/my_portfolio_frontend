import React from "react"

export const CountryItem = React.memo(({ accessCountry, data, index }) => {
    return (
        <tr>
            <td>{index}</td>
            <td>{data?.country_name}</td>
            <td>
                <div className="progress-bg">
                    <div className="progress-bar" style={{ width: data?.percentage + "%" }}>{data?.percentage}</div>
                </div>
            </td>
            <td>
                {
                    data.block ? <button className="btn" onClick={() => accessCountry(data?.country_name, false)}><i className="fa-solid fa-unlock"></i> UnBlock</button>
                        :
                        <button className="btn" onClick={() => accessCountry(data?.country_name, true)}><i className="fa-solid fa-lock"></i> Block </button>
                }
            </td>
        </tr>
    )
})