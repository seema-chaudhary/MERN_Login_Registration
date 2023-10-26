import {useState} from 'react'
import {Link} from 'react-router-dom'

function Signup() {

  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100' >
    <div className='bg-white p-3 rounded w-25' >
        <h2>Register</h2>
     <form action=''>
        <div className='mb-3'>
            <label htmlFor="name"><strong>Name</strong></label>
            <input autoComplete='off' type="text" id="name" name="name" placeholder='Enter Name' className='form-control rounded-0' />
        </div>
        <div className='mb-3'>
            <label htmlFor="email"><strong>Email</strong></label>
            <input autoComplete='off' type="email" id="email" name="email" placeholder='Enter Email' className='form-control rounded-0' />
        </div>
        <div className='mb-3'>
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" id="password" name="password" placeholder='Enter Password' className='form-control rounded-0'/>
        </div>
        <button className='btn btn-success w-100 rounded-0' type='submit'><strong>Register</strong></button>
        <p>Already Have an Account </p>
        <Link to='/login' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none' type='submit'><strong>Login</strong></Link> 
     </form>
     </div>
    </div>
  );
}

export default Signup;
