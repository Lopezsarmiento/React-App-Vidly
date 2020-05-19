import React from 'react';
import Form from './common/form';
import { Redirect } from 'react-router-dom';
import Joi from 'joi-browser';
import auth from '../services/authService';

class LoginForm extends Form {
  state = {
    data: { username: '', password: '' },
    errors: {}
  }

  // Form Validation
  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password')
  }

  doSubmit = async () => {
    try {
      // logging user
      const { data } = this.state;
      console.log('start authentication');
      // calling server
      await auth.login(data.username, data.password);
      console.log('authentication success');
      const { state } = this.props.location;
      // reloads app and set page to home
      window.location = state ? state.from.pathname : '/';
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = error.response.data;
        this.setState({ errors });

      }
    }
  }


  render() {
    if (auth.getCurrentUser()) return <Redirect to='/'></Redirect>;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderButton('Login')}
        </form>
      </div>
    );
  }
}

export default LoginForm;