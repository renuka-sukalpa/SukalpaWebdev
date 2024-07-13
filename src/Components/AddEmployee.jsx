import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    password: '',
    aadhar_number: '',
    pan_number: '',
    salary: '',
    address: '',
    category_id: '',
    image: '',
    DOB: ''

  })
  const [category, setCategory] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SUKALPA}/auth/category`)
      .then(result => {
        if (result.data.Status) {
          setCategory(result.data.Result);
        } else {
          alert(result.data.Error)
        }
      }).catch(err => console.log(err))
  }, [])

   const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('name', employee.name);
    formData.append('email', employee.email);
    formData.append('password', employee.password);
    formData.append('address', employee.address);
    formData.append('salary', employee.salary);
    formData.append('image', employee.image);
    formData.append('category_id', employee.category_id);
    formData.append('aadhar_number', employee.aadhar_number);
    formData.append('pan_number', employee.pan_number);
    formData.append('DOB', employee.DOB);


    axios.post(`${import.meta.env.VITE_SUKALPA}/auth/add_employee`, formData)
    .then(result => {
      if(result.data.Status) {
        navigate('/dashboard/employee')
     } else {
         alert(result.data.Error)
     }
    })
    .catch(err => console.log(err))
   }

  return (
    
    <div className="d-flex justify-content-center align-items-center mt-3 apj">
      
      
      <div className="p-3 rounded w-50 border" style={{}}>
      
       
        <form className="row g-1" onSubmit={handleSubmit} style={{marginTop:100}}>
          <h3 className="text-center text-white">Add Employee</h3>
          <div className="col-12">
            <label for="inputName" className="form-label  text-white">
              <b>Name</b>
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Name"
              onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
            />
          </div>
          <div className="col-12">
            <label for="inputEmail4" className="form-label  text-white">
             <b>Email</b>
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              id="inputEmail4"
              placeholder="Enter Email"
              autoComplete="off"
              onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
            />
          </div>
          <div className="col-12">
            <label for="inputPassword4" className="form-label  text-white">
            <b>Password</b>
            </label>
            <input
              type="password"
              className="form-control rounded-0"
              id="inputPassword4"
              placeholder="Enter Password"
              onChange={(e) => setEmployee({ ...employee, password: e.target.value })}
            />
            <label for="inputSalary" className="form-label  text-white">
             <b>Salary</b>
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputSalary"
              placeholder="Enter Salary"
              autoComplete="off"
              onChange={(e) => setEmployee({ ...employee, salary: e.target.value })}
            />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label  text-white">
             <b>Date Of Birth</b>
            </label>
            <input
              type="date"
              className="form-control rounded-0"
              id="inputAddress"
              placeholder="1234 Main St"
              autoComplete="off"
              onChange={(e) => setEmployee({ ...employee, DOB: e.target.value })}
            />
          </div>
          <div className="col-12">
            <label for="inputAadhar" className="form-label  text-white">
           <b>Aadhar Number</b>
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputAadhar"
               placeholder="Enter Aadhar number"
              autoComplete="off"
              onChange={(e) => setEmployee({ ...employee, aadhar_number: e.target.value })}
            />
          </div>
          <div className="col-12">
            <label for="inputPAN" className="form-label  text-white">
           <b>PAN Number</b>
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputPAN"
               placeholder="Enter PAN number"
              autoComplete="off"
              onChange={(e) => setEmployee({ ...employee, pan_number: e.target.value })}
            />
          </div>
          
          <div className="col-12">
            <label for="inputAddress" className="form-label  text-white">
             <b>Address</b>
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputAddress"
              placeholder="1234 Main St"
              autoComplete="off"
              onChange={(e) => setEmployee({ ...employee, address: e.target.value })}
            />
          </div>
          <div className="col-12">
            <label for="category" className="form-label  text-white">
             <b>Category</b>
            </label>
            <select name="category" id="category" className="form-select"
             onChange={(e) => setEmployee({...employee, category_id: e.target.value})}>
              {category.map(c => {
                return <option value={c.id}>{c.name}</option>
              })}
            </select>
          </div>
          <div className="col-12 mb-3">
            <label className="form-label  text-white" for="inputGroupFile01">
            <b>Select Image</b>
            </label>
            <input
              type="file"
              className="form-control rounded-0"
              id="inputGroupFile01"
              name="image"
              onChange={(e) => setEmployee({...employee, image: e.target.files[0]})}
            />
          </div>
          
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100  text-white">
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddEmployee