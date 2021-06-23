import React from 'react';
import {useSelector} from "react-redux";

 const EmployeeList = () => {
    let employee = useSelector((state)=>{
        return state.user.user;
    })
    console.log("employee data",employee);
   
    return (
        <div className = "container">
            <div className = "row">
                <div className = "col-md-8">
           <h2><u>Employee List Page</u></h2> 
           <table className="table table-striped table-success mt-4">
            <thead >
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Gender</th>
                <th scope="col">Email</th>
                <th scope="col">Phone No</th>
                </tr>
            </thead>
            <tbody>
                {
                    employee.map((item,id)=>(<tr key={id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.gender}</td>
                        <td>{item.email}</td>
                        <td>{item.phoneNo}</td>
                        </tr>))
                }
            </tbody>
            </table>
        </div>
        </div>
        </div>
    )
}
export default EmployeeList;