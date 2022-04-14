import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';

const Register = () => {
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user, loading, error
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate()
    const navigateLogin = () => {
        navigate('/login')
    }
    // if (user) {
    //     navigate('/home')
    // }
    const handleRegister = async (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        // const agree = event.target.terms.checked
        // if (agree) {
        //     createUserWithEmailAndPassword(email, password)
        // }
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        alert('Updated profile')
        navigate('/home')
    }
    return (
        <div className='register-form'>
            <h2>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Email Address' required />

                <input type="password" name="password" id="" placeholder='Password' required />

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />

                {/* <label className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor='terms'>Accept terms & condition</label> */}

                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor='terms'>Accept terms & condition</label>

                <input disabled={!agree}
                    className='btn btn-primary w-50 mx-auto mt-2' type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to='/login' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;