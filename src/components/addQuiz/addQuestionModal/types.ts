import { IAction, IQuestion } from '../../../reducer/types'

export interface IAddQuestion {
    showAddQuestionModal: boolean,
    dispatch: React.Dispatch<IAction>,
    editMode: boolean,
    singleQuestion: IQuestion
} 