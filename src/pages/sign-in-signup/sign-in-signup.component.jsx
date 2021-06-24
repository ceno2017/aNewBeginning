import React from 'react';
import SignIn from '../../components/sign-in/sign-in-component';
import Signup from '../../components/sign-up/sign-up.component';


import './sign-in-signup.styles.scss';

const signInSignUpPage = ()=>(
    <div className="sign-in-signup">
        <SignIn />
        <Signup />
    </div>
)

export default signInSignUpPage;