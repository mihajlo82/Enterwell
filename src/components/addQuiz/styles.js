import styled from 'styled-components'

export const AddQuizContainer = styled.article`
  width: 40%;
  padding: 15px;
  border-radius: 12px;
  background-color: #423a3f;
  justify-content: center;
  max-height: 500px;
  overflow: auto;
  z-index: 100;
`;

export const AddQuizElements = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & h2 {
    text-align: center;
    color: white;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  padding-left: 7px;
  outline: none;
`;

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;

export const SaveQuiz = styled.button`
  margin-top: 10px;
  height: 37px;
  border-radius: 10px;
  background-color: green;
  color: white;
  font-weight: bold;
  font-size: 16px;
  border: 1px solid green;
  cursor: pointer;
`;
