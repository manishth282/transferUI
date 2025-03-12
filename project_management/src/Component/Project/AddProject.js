import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Row,
  Col,
  Alert
} from "reactstrap";

function AddProject() {
  const [formData, setFormData] = useState({
    projectID: "",
    projectName: "",
    startDate: "",
    endDate: "",
    projectType: "",
    managerId: ""
  });
  const [error, setError] = useState({});
  const [data, setData] = useState({});

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/createProject", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error("Internal error");
      }
      const data = await response.json();
      console.log(data);
      
      setData(data);
      setFormData({
        projectID: "",
        projectName: "",
        startDate: "",
        endDate: "",
        projectType: "",
        managerId: ""
      });
    } catch (error) {
      console.log(formData);
      alert("Enter a valid name");
      setError(error);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center mb-4">Add Project</h2>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="projectID">Project ID</Label>
              <Input
                type="text"
                name="projectID"
                id="projectID"
                value={formData.projectID}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="projectName">Project Name</Label>
              <Input
                type="text"
                name="projectName"
                id="projectName"
                value={formData.projectName}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="startDate">Start Date</Label>
              <Input
                type="date"
                name="startDate"
                id="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="endDate">End Date</Label>
              <Input
                type="date"
                name="endDate"
                id="endDate"
                value={formData.endDate}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="projectType">Project Type</Label>
              <Input
                type="text"
                name="projectType"
                id="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="managerId">Manager ID</Label>
              <Input
                type="text"
                name="managerId"
                id="managerId"
                value={formData.managerId}
                onChange={handleChange}
              />
            </FormGroup>
            <Button color="primary" type="submit" block>
              Submit
            </Button>
          </Form>
          {error.message && (
            <Alert color="danger" className="mt-3">
              {error.message}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default AddProject;
