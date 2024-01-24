import React, { useState } from 'react'
import {useSelector, useDispatch} from "react-redux";
// import {createUser} from "../features/userSlice";

const Create = () => {
    const [user, setUser] = useState({});

    const setUserData = (e) => {
        setUser({...user, [e.target.name]:e.target.value })
    }

    // const handleSubmit = () => {
    //     console.log('set: ', user);
    //     useDispatch(createUser(user));
    // }

  return (
    <>
        <div className='container'>
            <form onSubmit={ e => e.preventDefault() } className='w-50 mx-auto shadow-sm p-4'>
                <h5>Create New User</h5>
                <input type='text' name="name" onChange={setUserData} className='form-control' placeholder='User Name' required /> <br />
                <input type='email' name='email' onChange={setUserData} className='form-control' placeholder='Email Address' required autoComplete='off' /> <br />
                
                <select className='form-select' name='gender' onChange={setUserData} required>
                    <option value={''}>Select Gender</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </select>
                <button className='btn btn-warning m-3' onClick={() => {} } >Create User</button>
            </form>
        </div>
    </>
  )
}

export default Create