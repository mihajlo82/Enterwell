import { IQuestion } from "../../../reducer/types";

export interface IPreviewQuestions {
    questions: IQuestion[],
    setIdQuestion: React.Dispatch<React.SetStateAction<string>>,
    onEditQuestion: (question: IQuestion) => void,
    editMode: boolean
}