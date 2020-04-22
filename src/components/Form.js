import React from 'react';

function Form() {
  return (
    <form>
      <label for="name">Name:</label>
      <input 
        type="text" 
        id="name"
      />
      <label for="email">Email:</label>
      <input 
        type="text" 
        id="email"
      />
      <label for="password">Password:</label>
      <input 
        type="text" 
        id="password"
      />
      <label for="tos">Terms of Service:</label>
      <input 
        type="checkbox" 
        id="tos"
      />
      <button>Submit</button>
    </form>
  );
}

export default Form;
