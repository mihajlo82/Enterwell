import React from 'react'
import { ContainerPreviewQuestions, DeleteQuestion, SingleQuestion, EditQuestion, ActionWrapp } from './styles'
import { IPreviewQuestions } from './types'
import { IQuestion } from '../../../reducer/types'

const PreviewQuestions = ({ questions, setIdQuestion, onEditQuestion, editMode }: IPreviewQuestions) => {
  const onClickQuestion = (question: IQuestion) => window.alert(`${question.question}\n\nAnswer: ${question.answer}`)
  const generateText = (question: IQuestion, index: number) => <p onClick={()=> onClickQuestion(question)}> {index+1}. {question?.question?.substring(0, 39)} {question?.question?.length > 39 && '...'} </p>

  return (
    <ContainerPreviewQuestions>
        <SingleQuestion> <u><b><i> Questions overview: </i></b></u> </SingleQuestion> <br />
        
        {questions.map( (question, index) =>  {
            return (
                <SingleQuestion key={question.id}>
                    {generateText(question, index)}
                    
                    <ActionWrapp>
                      { editMode && <EditQuestion onClick={()=> onEditQuestion(question)} > Edit </EditQuestion> }
                      <DeleteQuestion onClick={()=> setIdQuestion(question?.id)}> Delete </DeleteQuestion>
                    </ActionWrapp>
                </SingleQuestion>
            )
        })}
    </ContainerPreviewQuestions>
  )
}

export default PreviewQuestions
PreviewQuestions.defaultProps = {
  questions: [], 
  setIdQuestion: () => {}, 
  onEditQuestion: () => {}, 
  editMode: false 
}