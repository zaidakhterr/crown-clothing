import React, { Component } from 'react';

import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

import { auth, createUserProfileDocument } from '../../firebase/firebaseUtils';

import './SignUpForm.scss';

export class SignUpForm extends Component {
  state = {
    password: '',
    email: '',
    displayName: '',
    confirmPassword: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        password: '',
        email: '',
        displayName: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  render = () => {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className='sign-up-form'>
        <h2>I do not have an Account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            id='displayName'
            label='Name'
            handleChange={this.handleChange}
            value={displayName}
            required
            autoComplete='off'
          />
          <FormInput
            type='email'
            name='email'
            id='signUpEmail'
            label='Email'
            handleChange={this.handleChange}
            value={email}
            required
            autoComplete='off'
          />
          <FormInput
            type='password'
            name='password'
            id='signUppassword'
            label='Password'
            handleChange={this.handleChange}
            value={password}
            required
            autoComplete='off'
          />
          <FormInput
            type='password'
            name='confirmPassword'
            id='confirmPassword'
            label='Confirm Password'
            handleChange={this.handleChange}
            value={confirmPassword}
            required
            autoComplete='off'
          />

          <Button type='submit'>Sign Up</Button>
        </form>
      </div>
    );
  };
}

export default SignUpForm;
