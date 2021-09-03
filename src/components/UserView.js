import React from "react"
import { useSelector } from "react-redux"
import {Link} from "react-router-dom" 

const UserView = () => {
    const userList = useSelector(s => s.employer)
    console.log(userList)
    return (
        <>
            
            <table>
                <tbody>
                <tr>
                    <th></th>
                    <th>Jobs</th>
                </tr>              
                    {userList.map(a => a.jobs.length > 0 ?
                        <tr key={a.id}>
                        <td><Link to={`/users/${a.id}`}>{a.companyName}</Link></td>
                        <td>{a.jobs.length}</td>
                        </tr> : ''
                        )}
                </tbody>                           
            </table>
        </>
    )
}

export default UserView