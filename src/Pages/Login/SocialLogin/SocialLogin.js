import React from 'react';
import google from '../../../images/social logo/google.png'
import facebook from '../../../images/social logo/facebook.jpg'
import github from '../../../images/social logo/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    let errorBox;
    if (error || error1) {
        errorBox = <p className='text-danger'>Error: {error?.message}{error1?.message}</p>
    }
    if (user || user1) {
        navigate('/home')
    }

    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: "1px" }} className='w-50 bg-primary'></div>
                <p className='px-3 mt-2'>or</p>
                <div style={{ height: "1px" }} className='w-50 bg-primary'></div>
            </div>
            {errorBox}
            <div>
                <button onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto my-3'>
                    <img style={{ width: "30px" }} className="rounded me-3" src={google} alt="" />
                    <span className='text-white fw-bold'>Google Sign In</span>
                </button>
                <button
                    className='btn btn-primary w-50 d-block mx-auto my-3'>
                    <img style={{ width: "30px" }} className="rounded me-3" src={facebook} alt="" />
                    <span className='text-white fw-bold'>Facebook Sign In</span>
                </button>
                <button onClick={() => signInWithGithub()}
                    className='btn btn-dark w-50 d-block mx-auto my-3'>
                    <img style={{ width: "30px" }} className="rounded me-3" src={github} alt="" />
                    <span className='text-white fw-bold'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;