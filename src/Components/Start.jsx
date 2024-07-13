import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Start = () => {
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    useEffect(() => {
    axios.get(`${import.meta.env.VITE_SUKALPA}/verify`)
    .then(result => {
      if(result.data.Status) {
        if(result.data.role === "admin") {
           navigate('/dashboard')
        } else {
          navigate('/employee_detail/'+result.data.id)
        }
      }
    }).catch(err =>console.log(err))
  }, [])
    return (
      
      <div className=''>
        
        <div className='d-flex justify-content-center align-items-center vh-100'>
          
            <div className='p-3 rounded w-25 border'  style={{marginTop:240, marginLeft:-8}}>
              
                <h2 className='text-center '>Login As</h2>
                <div className='d-flex justify-content-between mt-5 mb-2'>
                    <button type="button" className='btn btn-primary' onClick={() => {navigate('/employee_login')}}>Employee</button>
                    <button type="button" className='btn btn-success'  onClick={() => {navigate('/adminlogin')}}>Admin</button>
                </div>
            </div>
            
        </div>
        </div>
        
    )
}

export default Start