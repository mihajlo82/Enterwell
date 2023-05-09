import styled from "styled-components";

export const QuizContiner = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const TableContainer = styled.article`
  width: 50%;
  padding-top: 50px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ButtonAddQuiz = styled.button`
  padding: 5px 15px;
  background-color: green;
  color: white;
  border: 1px solid green;
  cursor: pointer;
  border-radius: 5px;
`;

export const ButtonStartQuiz = styled.button`
  padding: 4px 12px;
  background-color: blue;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid blue;
`;

export const ButtonDeleteQuiz = styled.button`
  padding: 4px 12px;
  background-color: red;
  border: 1px solid red;
  color: white;
  cursor: pointer;
  border-radius: 5px;
`;

export const Table = styled.table`
  margin-top: 10px;
  width: 100%;
  border: 1px solid black;
  border-collapse: collapse;
`;
export const TableHead = styled.thead``;
export const Row = styled.tr``;
export const HeadCell = styled.th`
  width: 200px;
  padding: 15px 0;
  text-align: center;
  background-color: brown;
  color: white;
`;
export const TableBody = styled.tbody``;

export const Cell = styled.td`
  width: 200px;
  padding: 5px 0;
  text-align: center;
  cursor: pointer;
`;
