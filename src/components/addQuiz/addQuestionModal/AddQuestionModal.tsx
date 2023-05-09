import { CLOSE_MODAL_ADD_QUESTION, OPEN_MODAL_ADD_QUESTION, RESET_SINGLE_QUESTION, SAVE_QUESTION, UPDATE_SINGLE_QUESTION } from '../../../constants/typeNames'
import { IQuestion } from '../../../reducer/types'
import { checkIsQuestionValid } from '../../../utils/validations/validate'
import QuestionModal from './questionModal/QuestionModal'
import { QuestionsContainer, AddQuestionContainer, ButtonAddQuestion } from './styles'
import { IAddQuestion } from './types'
import { useEffect, useState } from 'react'
import nextId from 'react-id-generator'

const AddQuestion = ({ showAddQuestionModal, dispatch, editMode, singleQuestion }: IAddQuestion) => {
    const [sendPayload, setSendPayload] = useState<IQuestion>({ id: nextId(), answer: '', question: '' })

    const onSaveHandler = () => { 
        
        const isQuestionValid = checkIsQuestionValid(sendPayload)
        if(!isQuestionValid) return window.alert('Input must be filled!')

        if(!editMode || singleQuestion.id === ''){
            dispatch({ type: SAVE_QUESTION, payload: { ...sendPayload, id: nextId() }})
         }else{
            dispatch({ type: UPDATE_SINGLE_QUESTION, payload: sendPayload }) 
          } 

          setSendPayload({ id: nextId(), answer: '', question: '' })
          dispatch({ type: CLOSE_MODAL_ADD_QUESTION })
          dispatch({ type: RESET_SINGLE_QUESTION })
    }

    useEffect(()=> {
        if(editMode){
            setSendPayload({ id: singleQuestion.id, question: singleQuestion.question, answer: singleQuestion.answer })
        }
    }, [singleQuestion, editMode])

    const onCloseHandler = ( ) => {
        dispatch({ type: CLOSE_MODAL_ADD_QUESTION })
        dispatch({ type: RESET_SINGLE_QUESTION })
        setSendPayload({ id: '', question: '', answer: '' })
    }

    return (
    <QuestionsContainer>
        <AddQuestionContainer>
            <ButtonAddQuestion onClick={() => dispatch({ type: OPEN_MODAL_ADD_QUESTION })}> Add a question </ButtonAddQuestion>

            {showAddQuestionModal && 
                <QuestionModal 
                    onClose={onCloseHandler}
                    setSendPayload={setSendPayload}
                    sendPayload={sendPayload}
                    onSave={onSaveHandler} 
                />}
        </AddQuestionContainer>
    </QuestionsContainer>
    )
}

export default AddQuestion
AddQuestion.defaultProps = {
    showAddQuestionModal: false, 
    dispatch: () => {}, 
    editMode: false, 
    singleQuestion: { id: '', question: '', answer: ''}
}