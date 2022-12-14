import React from 'react';
import axios from 'axios';

const LoginForm = () => {
  
  const [formValue, setformValue] = React.useState({
    email: '',
    password: ''
  });

  const handleSubmit = (event) => {
    // we will fill this in the coming paragraph
  }

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Login Form</p>
      <input
        type="email"
        name="email"
        placeholder="enter an email"
        value={formValue.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="enter a password"
        value={formValue.password}
        onChange={handleChange}
      />
      <button
        type="submit"
      >
        Login
      </button>
    </form>
  )
};

export default LoginForm;