import styled from 'styled-components'

export const ContainerPreviewQuestions = styled.article`
    margin-top: 7px;
    width: 100%;
    background-color: white;
    padding: 10px 0;
    max-height: 300px;
    overflow: auto;
    border-radius: 10px;
`;

export const SingleQuestion = styled.div`
    width: 99%;
    padding-left: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & p {
        cursor: pointer;
    }
`;

export const ActionWrapp = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 200px;
`;

export const DeleteQuestion = styled.button`
    cursor: pointer;
    background-color: red;
    color: white;
    border-radius: 10px;
    height: 30px;
    width: 90px;
    margin-top: 2px;
    border: 1px solid red;
`;

export const EditQuestion = styled.button`
    cursor: pointer;
    background-color: orange;
    color: white;
    border-radius: 10px;
    height: 30px;
    width: 90px;
    margin-top: 2px;
    border: 1px solid orange;
    margin-right: 10px;
`;