import {useReducer, useEffect} from 'react'
import { IInitialType, IAction } from './types' 
import { getQuizesData } from '../api_service/api_service'
import { ADD_QUIZ, CLOSE_MODAL_ADD_QUESTION, CLOSE_MODAL_ADD_QUIZ, DELETE_QUESTION, DELETE_QUIZ, FETCH_ERROR, GET_QUIZES, OK, OPEN_MODAL_ADD_QUESTION, OPEN_MODAL_ADD_QUIZ, RESET, SAVE_QUESTION, SELECT_QUIZ, SET_EDIT_MODE, SET_EDIT_QUESTION, SET_QUESTION_ID, SET_QUIZ_NAME, UPDATE_SINGLE_QUESTION, UPDATE_QUESTIONS, UPDATE_QUIZ, RESET_SINGLE_QUESTION } from '../constants/typeNames'

const initialState: IInitialType = {
  quizes: [],
  selectedQuiz: {id:'', name:'', isActive: false, questions: [{ id: '',question: '', answer: '' }]},
  showAddQuizModal: false,
  showAddQuestionModal: false,
  questions: [],
  quizName: '',
  questionId: '',
  editMode: false,
  singleQuestion: { id: '',question: '', answer: '' }
}

const reducer = ( state= initialState, action: IAction ): IInitialType=> {
  const { type, payload } = action

  switch(type){
    case GET_QUIZES:
      return {...state, quizes: payload}
    case SET_QUIZ_NAME:
      return {...state, quizName: payload}
    case DELETE_QUIZ:
      return {...state, quizes: [...state.quizes.filter( quiz => quiz.id !== payload)]}
    case ADD_QUIZ:
      return {...state, quizes: [...state.quizes, payload]}
    case UPDATE_QUIZ:
      return {...state, quizes: [...state.quizes.map( quiz => quiz.id === payload.id ? payload : quiz)]}
    case OPEN_MODAL_ADD_QUIZ:
      return {...state, showAddQuizModal: true }
    case CLOSE_MODAL_ADD_QUIZ:
      return {...state, showAddQuizModal: false }
    case OPEN_MODAL_ADD_QUESTION:
      return {...state, showAddQuestionModal: true }
    case CLOSE_MODAL_ADD_QUESTION:
      return {...state, showAddQuestionModal: false }
    case SET_EDIT_QUESTION: 
      return {...state, singleQuestion: payload }
    case UPDATE_QUESTIONS: 
      return {...state, questions: payload}
    case SAVE_QUESTION:  
      return {...state, questions: [...state.questions, payload]}
    case DELETE_QUESTION: 
      return {...state, questions: [...state.questions.filter( question => question.id !== payload )]}
    case SELECT_QUIZ:  
      return {...state, selectedQuiz: payload }
    case SET_EDIT_MODE:  
      return {...state, editMode: payload }
    case SET_QUESTION_ID:  
      return {...state, questionId: payload }
    case UPDATE_SINGLE_QUESTION:  
      return {...state, questions: [...state.questions.map( question => question.id === payload.id ? payload : question)] }
    case RESET_SINGLE_QUESTION:  
      return {...state, singleQuestion: { id: '', answer: '', question: '' } }
    case RESET:
      return {
          ...state,  
          selectedQuiz: { id:'', name:'', isActive: true, questions: [{ id: '',question: '', answer: '' }] },
          showAddQuizModal: false,
          showAddQuestionModal: false,
          questions: [],
          quizName:'',
          editMode: false
        }
    default: 
      return state
  }

}
const useQuizReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(()=> {
    getQuizes()
  }, [])

  const getQuizes = async() => {
    const {data, status} = await getQuizesData()

    if(status === OK ) {
      dispatch({type: GET_QUIZES, payload: data})
    }
    else window.alert(FETCH_ERROR)
  }

  return {state, dispatch}
}

export default useQuizReducer