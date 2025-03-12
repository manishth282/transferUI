// import React, { useState } from "react";
// import { Form,Badge, FormGroup, Label, Input, Button, Container } from 'reactstrap';

// function ADDEmploye() {
//   const [formData, setFormData] = useState({
//     phone: "",
//     email: "",
//     designation: "",
//     salary: "",
//     location: "",
//     joiningDate: "",
//     empName: "",
//     empId: ""
//   });
//   const [error, setError] = useState({});
//   const [data, setData] = useState({});

//   async function handleSubmit(event) {
//     event.preventDefault();
//     try {
//       const response = await fetch("http://localhost:8081/createEmployee", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData)
//       });
//       if (!response.ok) {
//         throw new Error("Internal error");
//       }
//       const data = await response.json();
//       console.log(data);

//       setData(data);
//       setFormData({
//         phone: "",
//         email: "",
//         designation: "",
//         salary: "",
//         location: "",
//         joiningDate: "",
//         empName: "",
//         empId: ""
//       });
//     } catch (error) {
//       console.log(formData);

//       alert("Enter a valid name");
//       setError(error);
//     }
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   return (
//     <Container className="mt-5">
//       <Form onSubmit={handleSubmit}>
//         <FormGroup>
//           <Label for="empId">Enter the empId</Label>
//           <Input type="text" name="empId" id="empId" value={formData.empId} onChange={handleChange} />
//         </FormGroup>

//         <FormGroup>
//           <Label for="empName">Enter the empName</Label>
//           <Input type="text" name="empName" id="empName" value={formData.empName} onChange={handleChange} required />
//         </FormGroup>

//         <FormGroup>
//           <Label for="phone">Enter the phone</Label>
//           <Input type="text" name="phone" id="phone" value={formData.phone} onChange={handleChange} required />
//         </FormGroup>

//         <FormGroup>
//           <Label for="email">Enter the email</Label>
//           <Input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
//         </FormGroup>

//         <FormGroup>
//           <Label for="designation">Enter the designation</Label>
//           <Input type="text" name="designation" id="designation" value={formData.designation} onChange={handleChange} />
//         </FormGroup>

//         <FormGroup>
//           <Label for="salary">Enter the salary</Label>
//           <Input type="text" name="salary" id="salary" value={formData.salary} onChange={handleChange} />
//         </FormGroup>

//         <FormGroup>
//           <Label for="location">Enter the location</Label>
//           <Input type="text" name="location" id="location" value={formData.location} onChange={handleChange} />
//         </FormGroup>

//         <FormGroup>
//           <Label for="joiningDate">Enter the joiningDate</Label>
//           <Input type="date" name="joiningDate" id="joiningDate" value={formData.joiningDate} onChange={handleChange} />
//         </FormGroup>

//         <Button color="primary">Submit</Button>
//       </Form>
//     </Container>
//   );
// }

// export default ADDEmploye;




    


// import axios from "axios";
// import React, { useRef } from "react";
// import { Form,Badge, FormGroup, Label, Input, Button, Container } from 'reactstrap';

// const ADDEmploye = ()=>{
//     let empId = useRef();
//     let empName = useRef();
//     let phone = useRef();
//     let email = useRef();
//     let designation = useRef();
//     let salary = useRef();
//     let location = useRef();
//     let joiningDate = useRef();

//     let handleSubmit = (event) => {
//       event.preventDefault();
//       if (empId.current.value !== '' && empName.current.value !== '' && phone.current.value !== '' && email.current.value !== '' &&
//           designation.current.value !== '' && salary.current.value !== '' && location.current.value !== '' && joiningDate.current.value !== '') {
//           const data = {
//               "empId": empId.current.value,
//               "empName": empName.current.value,
//               "phone": phone.current.value,
//               "email": email.current.value,
//               "designation": designation.current.value,
//               "salary": salary.current.value,
//               "location": location.current.value,
//               "joiningDate": joiningDate.current.value
//           }
//           axios.post('http://localhost:8081/createEmployee', data)
//               .then((response) => {
//                   console.log(response);
//                   alert(response.data.message);
//                   // Clearing All Form Fields
//                   empId.current.value = ''
//                   empName.current.value = ''
//                   phone.current.value = ''
//                   email.current.value = ''
//                   designation.current.value = ''
//                   salary.current.value = ''
//                   location.current.value = ''
//                   joiningDate.current.value = ''
//               })
//               .catch((error) => {
//                   if (error.response) {
//                       if (error.response.data.message === "Validation failed") {
//                           // Error messages when validation failed
//                           let message = "";
//                           let messages = Object.values(error.response.data.errors);
//                           console.log(messages);
//                           messages.forEach(msg => {
//                               message = message + "\n" + msg
//                           });
//                           alert(message);
//                       } else {
//                           // Error message for already exists
//                           alert(error.response.data.message)
//                           console.log(error.response);
//                       }
//                   } else {
//                       alert("An unexpected error occurred");
//                       console.log(error);
//                   }
//               });
//       } else {
//           alert("Please fill all fields");
//       }
//   }

//     return (
        // <Container className="mt-5">
        //     <Form onSubmit={handleSubmit}>
        //         <FormGroup>
        //             <Label for="empId">Enter the empId</Label>
        //             <Input type="text" name="empId" id="empId" ref={empId} />
        //         </FormGroup>

        //         <FormGroup>
        //             <Label for="empName">Enter the empName</Label>
        //             <Input type="text" name="empName" id="empName" ref={empName} />
        //         </FormGroup>

        //         <FormGroup>
        //             <Label for="phone">Enter the phone</Label>
        //             <Input type="text" name="phone" id="phone" ref={phone} />
        //         </FormGroup>

        //         <FormGroup>
        //             <Label for="email">Enter the email</Label>
        //             <Input type="email" name="email" id="email" ref={email} />
        //         </FormGroup>

        //         <FormGroup>
        //             <Label for="designation">Enter the designation</Label>
        //             <Input type="text" name="designation" id="designation" ref={designation} />
        //         </FormGroup>

        //         <FormGroup>
        //             <Label for="salary">Enter the salary</Label>
        //             <Input type="text" name="salary" id="salary" ref={salary} />
        //         </FormGroup>

        //         <FormGroup>
        //             <Label for="location">Enter the location</Label>
        //             <Input type="text" name="location" id="location" ref={location} />
        //         </FormGroup>

        //         <FormGroup>
        //             <Label for="joiningDate">Enter the joiningDate</Label>
        //             <Input type="date" name="joiningDate" id="joiningDate" ref={joiningDate} />
        //         </FormGroup>

        //         <FormGroup>
        //             <Label for="joiningDate">Gender</Label>
        //             <Input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
        //             <Label className="form-check-label">Male</Label>
        //             <Input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
        //             <Label className="form-check-label">Female</Label>
        //         </FormGroup>
        //         <Button color="primary">Submit</Button>
        //     </Form>
        // </Container>
//     );
// }

// export default ADDEmploye;



import React, { useRef } from "react";
import { Form,Badge, FormGroup, Label, Input, Button, Container } from 'reactstrap';
// import { useNavigate } from "react-router-dom";

const ADDEmploye = () => {
    let empId = useRef();
    let empName = useRef();
    let phone = useRef();
    let email = useRef();
    let designation = useRef();
    let salary = useRef();
    let location = useRef();
    let joiningDate = useRef();

    let handleSubmit = (event) => {
        event.preventDefault();
        if (empId.current.value !== '' && empName.current.value !== '' && phone.current.value !== '' && email.current.value !== '' &&
            designation.current.value !== '' && salary.current.value !== '' && location.current.value !== '' && joiningDate.current.value !== '') {
            const data = {
                "empId": empId.current.value,
                "empName": empName.current.value,
                "phone": phone.current.value,
                "email": email.current.value,
                "designation": designation.current.value,
                "salary": salary.current.value,
                "location": location.current.value,
                "joiningDate": joiningDate.current.value
            }
            fetch('http://localhost:8081/createEmployee', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                if(data.status !== '200'){
                    // console.log(data);
                    //If validation fails because of fields data
                    if(data.message === 'Validation failed'){
                        let message = "";
                        let messages = Object.values(data.errors);
                        messages.forEach(msg => {
                            message = message + "\n" + msg
                        });
                        console.log(message);
                        
                        throw new Error(message);
                    }else{
                        //Message when empId or phone already exists
                        alert(data.message);
                        return false;
                    }
                }
                alert('then then '+data.message);
                // Clearing All Form Fields
                empId.current.value = ''
                empName.current.value = ''
                phone.current.value = ''
                email.current.value = ''
                designation.current.value = ''
                salary.current.value = ''
            })
            .catch((errors) => {
                    alert(errors);
            });
        } 
        else {
            alert("Please fill all fields");
        }
    }
    return (
      <Container className="mt-5">
          <Form onSubmit={handleSubmit}>
              <FormGroup>
                  <Label for="empId">Enter the empId</Label>
                  <Input type="text" name="empId" id="empId" ref={empId} />
              </FormGroup>

              <FormGroup>
                  <Label for="empName">Enter the empName</Label>
                  <Input type="text" name="empName" id="empName" ref={empName} />
              </FormGroup>

              <FormGroup>
                  <Label for="phone">Enter the phone</Label>
                  <Input type="text" name="phone" id="phone" ref={phone} />
              </FormGroup>

              <FormGroup>
                  <Label for="email">Enter the email</Label>
                  <Input type="email" name="email" id="email" ref={email} />
              </FormGroup>

              <FormGroup>
                  <Label for="designation">Enter the designation</Label>
                  <Input type="text" name="designation" id="designation" ref={designation} />
              </FormGroup>

              <FormGroup>
                  <Label for="salary">Enter the salary</Label>
                  <Input type="text" name="salary" id="salary" ref={salary} />
              </FormGroup>

              <FormGroup>
                  <Label for="location">Enter the location</Label>
                  <Input type="text" name="location" id="location" ref={location} />
              </FormGroup>

              <FormGroup>
                  <Label for="joiningDate">Enter the joiningDate</Label>
                  <Input type="date" name="joiningDate" id="joiningDate" ref={joiningDate} />
              </FormGroup>

              <FormGroup>
                  <Label for="joiningDate">Gender</Label>
                  <Input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                  <Label className="form-check-label">Male</Label>
                  <Input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                  <Label className="form-check-label">Female</Label>
              </FormGroup>
              <Button color="primary">Submit</Button>
          </Form>
      </Container>
    );
}

export default ADDEmploye;
