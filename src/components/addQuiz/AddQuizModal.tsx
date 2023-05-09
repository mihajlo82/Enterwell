import React, { useState }  from 'react'
import {  AddQuizContainer, AddQuizElements, Input, InputContainer, Overlay, SaveQuiz } from './styles'
import Modal from '../../utils/modal/Modal'
import { IAddQuiz } from './types'  
import AddQuestion from './addQuestionModal/AddQuestionModal'
import PreviewQuestions from './previewQuestions/PreviewQuestions' 
import useAddQuizModal from './useAddQuizModal'
import { CLOSE_MODAL_ADD_QUIZ, RESET, SET_QUIZ_NAME } from '../../constants/typeNames' 

const AddQuizModal = ({ dispatch,  quizName, questions, editMode, showAddQuestionModal, singleQuestion, quizObject }: IAddQuiz) => {
  const [idQuestion, setIdQuestion] = useState<string>('')
  const {onSaveQuiz, onEditQuestion, onUpdateQuiz} = useAddQuizModal({ dispatch, idQuestion, name: quizName,  questions: questions, quizObject })  

  const onCloseHandler = () => {
    dispatch({ type: CLOSE_MODAL_ADD_QUIZ })
    dispatch({ type: RESET })
   }

  return (
    <Modal>
        <Overlay onClick={onCloseHandler} />
        <AddQuizContainer>
            <AddQuizElements>
                 <h2>{editMode ? 'Edit Quiz' : 'Add Quiz'}</h2>
                <InputContainer> 
                   <label> Name </label> <Input value={quizName} onChange={(e: any) => dispatch({ type: SET_QUIZ_NAME, payload: e.target.value })} />
                </InputContainer>

                <AddQuestion showAddQuestionModal={showAddQuestionModal} dispatch={dispatch} editMode={editMode} singleQuestion={singleQuestion}  />

                {questions?.length > 0 && <PreviewQuestions editMode={editMode} onEditQuestion={onEditQuestion} questions={questions} setIdQuestion={setIdQuestion}  />}

                <SaveQuiz onClick={() => editMode ? onUpdateQuiz() : onSaveQuiz() }> {editMode ? 'Update quiz changes' : 'Save quiz'} </SaveQuiz>
            </AddQuizElements>
        </AddQuizContainer>

    </Modal>
  )
}

export default AddQuizModal 
AddQuizModal.defaultProps = {
  dispatch: () => {},  
  quizName: '', 
  questions: [], 
  editMode: false, 
  showAddQuestionModal: false, 
  singleQuestion: { id: '', name: '', answer: ''}, 
  quizObject: { id: '', name: '', questions: [], isActive: false }
}