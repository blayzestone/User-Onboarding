import React from 'react';

function Form(props) {
  const { onInputChange, onSubmit, errors } = props;
  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input
        onChange={onInputChange} 
        type="text" 
        name="name"
        id="name"
      /><span>{errors.name}</span>
      <label htmlFor="email">Email:</label>
      <input 
        onChange={onInputChange} 
        type="text"
        name="email"
        id="email"
      /><span>{errors.email}</span>
      <label htmlFor="password">Password:</label>
      <input 
        onChange={onInputChange} 
        type="text"
        name="password"
        id="password"
      /><span>{errors.password}</span>
      <label htmlFor="tos">Terms of Service:</label>
      <input
        onChange={onInputChange} 
        type="checkbox" 
        name="tos"
        id="tos"
      />
      <button onClick={onSubmit}>Submit</button>
    </form>
  );
}

export default Form;
