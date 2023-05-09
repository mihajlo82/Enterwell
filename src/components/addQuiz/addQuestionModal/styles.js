import styled from "styled-components";

export const QuestionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const AddQuestionContainer = styled.div`
  padding-top: 14px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  
`;
export const ButtonAddQuestion = styled.button`
  padding: 7px 15px;
  box-shadow: 1px -1px 10px -5px rgba(255,255,255,0.75);
  background-color: blue;
  color: white;
  border: 1px solid blue;
  cursor: pointer;
  border-radius: 9px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  outline: none;
  padding-left: 7px;
`;

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
