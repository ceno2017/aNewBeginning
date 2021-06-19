import React from 'react';
import FormInput from '../form-input/form-input.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in-component.styles.scss';

class SignIn extends React.Component{
  constructor(){
      super();
      this.state={
          email: '',
          password:'',
      }
  }

  handleSubmit = e=>{
      e.preventDefault();
      this.setState({ email:'', password: ''});
  }
  handleChange= e =>{
      const{name, value} = e.target;
      this.setState({[name]: value})
  }

  render(){
      return(
          <div className='sign-in'>
             <h2 className='title'>I have already have an account</h2>
             <span>Sign in with email and Password</span>
             <form onSubmit={this.handleSubmit}>
                <FormInput 
                type='email' 
                name='email'
                 value={this.state.email}
                 handleChange={this.handleChange}
                 label='Email'
                 required/>
                <FormInput 
                  type='password' 
                  name='password'
                  value={this.state.password} 
                  handleChange= {this.handleChange}
                  label='Password'
                  required/>
                  <div className="buttons">
                     <CustomButton type='submit'>Sign In</CustomButton>
                     <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                  </div>
                 
             </form>
          </div>
      )
  }
}

export default SignIn;