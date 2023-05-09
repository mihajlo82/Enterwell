import { IAction, IQuestion } from '../../../../reducer/types'

export interface IQuestionModal {
  onClose: React.Dispatch<IAction>,
  onSave: React.Dispatch<IAction>,
  setSendPayload: React.Dispatch<React.SetStateAction<IQuestion>>,
  sendPayload: IQuestion,
}
