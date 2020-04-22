import React, { useState } from 'react';
import Form from './Form';
import * as yup from 'yup';

function App() {
  const initialFormValues = {
    name: '',
    email: '',
    password: '',
  }
  const initialFormErrors = {
    name: '',
    email: '',
    password: '',
  }
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required('Name is required')
      .min(3, 'Name must be at least 3 characters long'),
    email: yup
      .string()
      .email('Not a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters long'),
  });

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const inputChangeHandler = evt => {
    const name = evt.target.name;
    const value = evt.target.value;

    yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        return setFormErrors({
          ...formErrors,
          [name]: ''
        })
      })
      .catch(err => {
        const error = err.errors[0];

        return setFormErrors({
          ...formErrors,
          [name]: error,
        });
      })
    
    return setFormValues({
      ...formValues,
      [name]: value
    });
  }

  return (
    <div className="App">
      <Form 
        onInputChange={inputChangeHandler}
        errors={formErrors}
      />
    </div>
  );
}

export default App;
