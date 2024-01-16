import React from 'react'
import './table.css'
const Table =({data}) => {
    return (
        <div>
            <table className="table">
                <tbody>
                    <tr className="tr">
                        <th className="th">Name</th>
                        <th className="th">Surname</th>
                        <th className="th">Email</th>
                        <th className="th">Phone</th>
                        <th className="th">Address</th>
                    </tr>
                    {data.map((item)=>(
                    <tr key={item.id}>
                        <td className="td">{item.firstname}</td>
                        <td className="td">{item.lastname}</td>
                        <td className="td">{item.email}</td>
                        <td className="td">{item.phone}</td>
                        <td className="td">{item.address}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
