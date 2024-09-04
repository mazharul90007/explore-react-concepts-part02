import { useEffect, useState } from "react"
import "./Employee.css"
import Employee from "./Employee";
export default function () {
    const [employees, setEmployee] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setEmployee(data))
    }, [])
    return (
        <div className="box">
            <h3>Employees: {employees.length}</h3>
            {
                employees.map(employee => <Employee employee = {employee}></Employee>)
            }
        </div>

    )
}