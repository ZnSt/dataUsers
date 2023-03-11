import styled from '@emotion/styled';

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 20px;
`;

export const Input = styled.input`
  height: 30px;
  border: none;
  border-bottom: 3px solid black;
  outline: none;

  ::placeholder {
    font-size: 20px;
    color: red;
  }
`;

export const Textarea = styled.textarea`
  height: 250px;
  width: 500px;
  resize: none;
  outline: none;
  font-size: 20px;

  ::placeholder {
    font-size: 20px;
    color: red;
  }
`;

export const Btn = styled.button`
  width: 120px;
  padding: 10px;
  font-size: 15px;
  font-weight: bold;
  background-color: white;
  cursor: pointer;

  border-radius: 5px;
`;
