import React, { Component } from 'react';

import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

import { auth, signInWithGoogle } from '../../firebase/firebaseUtils';

import './SignInForm.scss';

export class SignInForm extends Component {
  state = {
    password: '',
    email: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        password: '',
        email: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  render = () => {
    const { email, password } = this.state;

    return (
      <div className='sign-in-form'>
        <h2>I already have an Account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            id='email'
            label='Email'
            handleChange={this.handleChange}
            value={email}
            required
            autoComplete='off'
          />
          <FormInput
            type='password'
            name='password'
            id='password'
            label='Password'
            handleChange={this.handleChange}
            value={password}
            required
            autoComplete='off'
          />
          <div className='buttons'>
            <Button type='submit'>Sign In</Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </Button>
          </div>
        </form>
      </div>
    );
  };
}

export default SignInForm;
