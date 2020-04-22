import React from 'react';
import styled from 'styled-components';

/****** STYLED COMPONENTS ******/
const FormContainer = styled.div`
  width: 50vw;
  margin: 10vh auto 0;
`;

const StyledForm = styled.form`
  height: 33vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #F5F5F5;
  padding: 1rem;
`;

const Label = styled.label`
  width: 80%;
`;

const Input = styled.input`
  padding: .2rem;
  margin: .5rem 0;
  width: 100%;
`;

const ErrorMessage = styled.span`
  font-size: 12px;
  color: orangered;
`;

const Button = styled.button`
  width: 50%;
  color: white;
  background-color: ${props => props.disabled ? '#8B0000' : '#60EE60'};
  border: none;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin-top: 2rem;
  
  &:hover {
    cursor: pointer;
  }
`;


function Form(props) {
  const { onInputChange, onSubmit, errors, submitDisabled } = props;
  return (
    <FormContainer>
      <StyledForm>
        <ErrorMessage>{errors.name}</ErrorMessage>
        <Label>Name:
          <Input
            onChange={onInputChange}
            type="text" 
            name="name"
          />
        </Label>

        <ErrorMessage>{errors.email}</ErrorMessage>
        <Label>Email:
          <Input 
            onChange={onInputChange} 
            type="text"
            name="email"
          />
        </Label>

        <ErrorMessage>{errors.password}</ErrorMessage>
        <Label>Password:
          <Input 
            onChange={onInputChange} 
            type="text"
            name="password"
            id="password"
          />
        </Label>

        <ErrorMessage>{errors.tos}</ErrorMessage>
        <Label>Terms of Service:
          <input
            onChange={onInputChange}
            type="checkbox" 
            name="tos"
          />
        </Label>
        {!submitDisabled 
          ? <Button onClick={onSubmit}>Submit</Button> 
          : <Button disabled={submitDisabled}>Submit</Button>
        }
      </StyledForm>
    </FormContainer>
  );
}

export default Form;
