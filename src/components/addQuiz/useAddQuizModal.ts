import React, {useEffect} from 'react'
import { IQuestion, IQuiz } from '../../reducer/types'
import nextId from "react-id-generator"
import { addQuiz, updateQuiz } from '../../api_service/api_service'
import { IUseAddQuiz } from './types'
import { ADDING_QUIZ_SUCCESS, ADD_QUIZ, DELETE_QUESTION, EMPTY_WARNING, ERROR_ADDING_QUIZ, ERROR_UPDATING_QUIZ, OK, OPEN_MODAL_ADD_QUESTION, RESET, SET_EDIT_MODE, SET_EDIT_QUESTION, UPDATE_QUIZ, UPDATING_QUIZ_SUCCESS } from '../../constants/typeNames'
import { checkIsQuizValid } from '../../utils/validations/validate'

const useAddQuizModal = ({ dispatch, idQuestion, name, questions, quizObject }: IUseAddQuiz) => {

    useEffect(()=> {
        if(idQuestion !== ''){
            dispatch({type: DELETE_QUESTION, payload: idQuestion})
        }
      }, [idQuestion])  

    const onSaveQuiz = async() => {
        const quizData: IQuiz = { id: nextId(), name: name, isActive: true, questions: questions  } 

        const isQuizDataValid = checkIsQuizValid(quizData)
        if(!isQuizDataValid) return window.alert(EMPTY_WARNING)
    
        const {data, status} = await addQuiz(quizData)
    
         if(status === OK) {
          dispatch({ type: ADD_QUIZ, payload: data })
          window.alert(ADDING_QUIZ_SUCCESS)
        }
        else window.alert(ERROR_ADDING_QUIZ)    
        dispatch({ type: RESET })
      }

      const onUpdateQuiz = async() => {
      const isQuizDataValid = checkIsQuizValid({ ...quizObject, name: name, questions: questions })
      if(!isQuizDataValid) return window.alert(EMPTY_WARNING)
      const {data, status} = await updateQuiz({ ...quizObject, name: name, questions: questions })

     
      if(status === OK) {
        dispatch({ type: UPDATE_QUIZ, payload: data })
        window.alert(UPDATING_QUIZ_SUCCESS)

      } else window.alert(ERROR_UPDATING_QUIZ)    
        dispatch({ type: RESET })
    }
   
    const onEditQuestion = (question: IQuestion) => {
        dispatch({ type: SET_EDIT_QUESTION, payload: question })
        dispatch({ type: OPEN_MODAL_ADD_QUESTION })
        dispatch({ type: SET_EDIT_MODE, payload: true })
      }
  return { onSaveQuiz, onEditQuestion, onUpdateQuiz }
}

export default useAddQuizModal
useAddQuizModal.defaultProps = {
  dispatch: () => {}, 
  idQuestion: '', 
  name: '', 
  questions: [], 
  quizObject: { id:'', name: '', questions: [], isActive: true }
}