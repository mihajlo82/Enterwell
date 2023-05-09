import { IAction, IQuestion, IQuiz } from "../../reducer/types";

export interface IAddQuiz {
    dispatch: React.Dispatch<IAction>,
    editMode: boolean, 
    quizName: string, 
    questions: IQuestion[],
    showAddQuestionModal: boolean
    singleQuestion: IQuestion,
    quizObject: IQuiz
}

export interface IUseAddQuiz {
    idQuestion: string,
    dispatch: React.Dispatch<IAction>,
    name: string,
    questions: IQuestion[],
    quizObject: IQuiz
}