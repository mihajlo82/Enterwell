import styled from "styled-components";

export const PreviewContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const PreviewMain = styled.article`
  width: 60%;
  height: 100%;
  background-color: #42413c;
  display: flex;
  flex-direction: column;
  align-items: center;

  & h1 {
    padding: 10px 0;
    font-size: 28px;
    color: white;
  }

  & h4 {
    color: white;
  }

  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const Questions = styled.div`
  margin-top: 25px;
  padding: 7px;
  padding-top: 20px;
  width: 92%;
  border-radius: 10px;
  height: 300px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  overflow: auto;

  @media (max-width: 768px) {
    height: 200px;
    font-size: 18px;
  }
`;

export const AnswerContainer = styled.div`
  margin-top: 20px;
  width: 92%;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  color: white;
`;

export const ShowAnswer = styled.button`
  background-color: green;
  color: white;
  height: 45px;
  width: 130px;
  border: 1px solid green;
  border-radius: 12px;
`;

export const OrderContainer = styled.div`
  padding: 10px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  `;

  export const MoveQuestion = styled.button`
  background-color: white;
  color: #1a1918;
  font-weight: bold;
  height: 40px;
  width: 100px;
  border: 1px solid #1a1918;
  border-radius: 12px;
`;
