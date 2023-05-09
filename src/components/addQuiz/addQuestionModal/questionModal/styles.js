import styled from 'styled-components'

export const OverlayAddQuestion = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0, 6);
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
`;

export const AddQuestionModalContainer = styled.div`
  width: 44%;
  padding: 20px;
  background-color: orange;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 150;
  border-radius: 15px;
`;

export const InputWrapp = styled.div`
  width: 100%;
  display: flex;
  margin-top: 15px;
  flex-direction: column;
`;

export const Question = styled.textarea`
  padding-left: 7px;
  width: 100%;
  border-radius: 10px;
  outline: none;
  height: 120px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  outline: none;
  padding-left: 7px;
`;


export const ButtonSaveQuestion = styled.button`
  padding: 12px 24px;
  background-color: green;
  color: white;
  border: 1px solid green;
  cursor: pointer;
  border-radius: 11px;
`;
