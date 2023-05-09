export interface IInitialType {
  quizes: IQuiz[],
  selectedQuiz: IQuiz,
  showAddQuizModal: boolean,
  showAddQuestionModal: boolean,
  questions: IQuestion[],
  quizName: string,
  editMode: boolean,
  questionId: string,
  singleQuestion: IQuestion
}

export interface IQuiz {
  id: string,
  name: string,
  isActive: boolean,
  questions: IQuestion[],
}

export interface IQuestion {
  id: string,
  question: string,
  answer: string,
}

export interface IAction {
  type: string,
  payload?: any,
}
