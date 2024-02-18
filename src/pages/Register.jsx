import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useUser } from '../lib/context/user';

import Loading from './Loading';

const Register = () => {

    const user = useUser();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [passsword, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const onRegisterHandler  = async () => {
        setLoading(true);
        const onRegisterHandler = await user.register(email, passsword, name);

        if(onRegisterHandler){
            navigate("/");
            setLoading(false);
        }

        setLoading(false);
    }

    return (
        <div className='form-container'>
            {loading && <Loading />}
            <div className='login-container'>
                <h1 className='form-title'>Register</h1>
                <form action="">
                <div className='form-group'>
                        <label htmlFor='name_reg'>Name</label>
                        <input type='email' id='name_reg' value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Name' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email_reg'>Email</label>
                        <input type='email' id='email_reg' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' />
                    </div>
                    <div className='form-group'>
                    <label htmlFor='password_reg'>Password</label>
                        <input type='password' id='password_reg' value={passsword} onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' />
                    </div>
                    <div  className='button-container'>
                        <button className='custom-btn custom-btn-outline' type='reset' onClick={(e) => { setPassword(""); setEmail("")}}>Reset</button>
                        <button className='custom-btn custom-btn-primary' type='button' onClick={onRegisterHandler}>Register</button>
                    </div>
                    <div className='link-container'>
                        <p>Already have account? <Link to='/login'>Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;