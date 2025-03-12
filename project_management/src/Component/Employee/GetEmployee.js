import { useState, useEffect } from "react";
import { Table } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function GetEmployee() {
    const [employee, setEmployee] = useState([]);

    async function handleSearch() {

        try {
            const response = await fetch("http://localhost:8081/createEmployee/getAll");
            if (!response.ok) {
                throw new Error("Internal error");
            }
            const employee = await response.json();
            setEmployee(employee);
            // setDataFetched(true); // Set dataFetched to true after fetching data
        } catch (error) {
            console.error("Error occurred");
            alert("Error occurred");
        }
    }

    useEffect(() => {
        handleSearch();
    }, []); 

    return (
        <div className="Project_getEmp">
            {employee.length > 0 && (
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>index</th>
                            <th>empId</th>
                            <th>empName</th>
                            <th>phone</th>
                            <th>email</th>
                            <th>designation</th>
                            <th>salary</th>
                            <th>location</th>
                            <th>joiningDate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employee.map((emp, index) => (
                            <tr key={emp.empId} className={
                                index % 3 === 1 ? "table-success" :
                                index % 2 === 0 ? "table-primary" :
                                "table-info"
                            }>
                                <td>{index + 1}</td>
                                <td>{emp.empId}</td>
                                <td>{emp.empName}</td>
                                <td>{emp.phone}</td>
                                <td>{emp.email}</td>
                                <td>{emp.designation}</td>
                                <td>{emp.salary}</td>
                                <td>{emp.location}</td>
                                <td>{emp.joiningDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </div>
    );
}

export default GetEmployee;
