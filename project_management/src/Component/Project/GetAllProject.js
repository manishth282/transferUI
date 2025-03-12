import { useState,useEffect } from "react";
import { Table } from "reactstrap";

function GetAllProject(){
    const[project,setProject]=useState([]);
 async function handleSearch() {
    try{
    const response=await fetch("http://localhost:8080/api/getAllProject");
    if(!response.ok){
        return new Error("Internal error we cant do anything");
    }
    const project=await response.json();
    setProject(project);
 }catch(error){
    throw new Error("internal errorlo");
    
 }
}
   useEffect(() => {
        handleSearch();
    }, []); 

return (
    <div className="project-get">
        <Table striped bordered>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>ProjectID</th>
                    <th>ProjectName</th>
                    <th>StartDate</th>
                    <th>EndDate</th>
                    <th>projectType</th>
                    <th>manager</th>
                </tr>
            </thead>
            <tbody>
        {project.map((proj, index) => (
                            <tr key={proj.empId} className={
                                //  index % 3 === 1 ? "table-success" :
                                index % 2 === 0 ? "table-success" :
                                "table-info"
                            }>
                                <td>{index + 1}</td>
                                <td>{proj.projectID}</td>
                                <td>{proj.projectName}</td>
                                <td>{proj.startDate}</td>
                                <td>{proj.endDate}</td>
                                <td>{proj.projectType}</td>
                                <td>{proj.manager}</td>
                            
                            </tr>
                        ))}
                        </tbody>

            </Table> 
        </div>
);
}
export default GetAllProject;