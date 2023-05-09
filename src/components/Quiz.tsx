import React from 'react'
import { ButtonAddQuiz, ButtonContainer, ButtonDeleteQuiz, ButtonStartQuiz, Cell, HeadCell, QuizContiner, Row, Table, TableBody, TableContainer, TableHead } from './styles'
import useQuizReducer from '../reducer/useQuizReducer'
import AddQuizModal from './addQuiz/AddQuizModal'
import { deleteQuiz } from '../api_service/api_service'
import { useNavigate } from 'react-router-dom'
import { DELETE_QUIZ, DELETION_ERROR, OK, OPEN_MODAL_ADD_QUIZ, SELECT_QUIZ, SET_EDIT_MODE, SET_QUIZ_NAME, UPDATE_QUESTIONS } from '../constants/typeNames'
import { IQuiz } from '../reducer/types'
import { checkIsQuizValid } from '../utils/validations/validate'

const Quiz = () => {
  let rowCounter = 1
  const { state, dispatch } = useQuizReducer() 
  const navigate = useNavigate()

  const onDeleteQuiz = async(quiz: IQuiz) => {

    const isQuizValid = checkIsQuizValid(quiz)
    if(!isQuizValid) return window.alert(DELETION_ERROR)

    const { message, status } = await deleteQuiz(quiz)

    if( status === OK ){
        dispatch({ type: DELETE_QUIZ, payload: quiz.id })
        return window.alert(message)
    }
        return window.alert(message)
  }  

  const onEditQuiz = async(quiz: IQuiz) => {
    dispatch({ type: SET_QUIZ_NAME, payload: quiz.name })
    dispatch({ type: UPDATE_QUESTIONS, payload: quiz.questions })
    dispatch({ type: SET_EDIT_MODE, payload: true })
    dispatch({ type: OPEN_MODAL_ADD_QUIZ, payload: true })
    dispatch({ type: SELECT_QUIZ, payload: quiz })
    }

  return (
    <QuizContiner>
        <TableContainer>
            <ButtonContainer>
                <ButtonAddQuiz onClick={()=> dispatch({ type: OPEN_MODAL_ADD_QUIZ })}>Add New</ButtonAddQuiz>
            </ButtonContainer>

            <Table>
               <HeaderTable />

               <TableBody>
                {state?.quizes?.length > 0 && state.quizes.map( quiz => quiz.isActive &&
                    <Row key={quiz.id}>
                        <Cell onClick={() => onEditQuiz(quiz)}> {rowCounter++} </Cell>
                        <Cell onClick={() => onEditQuiz(quiz)}> {quiz.name} </Cell>
                        <Cell>
                            <ButtonStartQuiz onClick={()=> navigate(`/preview/${quiz?.id}`)} > Run </ButtonStartQuiz>
                        </Cell>
                        <Cell>
                            <ButtonDeleteQuiz onClick={()=> onDeleteQuiz(quiz)}> Delete </ButtonDeleteQuiz>
                        </Cell>
                    </Row>
                )} 
                </TableBody> 
            </Table>
        </TableContainer>

        {state?.showAddQuizModal &&
             <AddQuizModal
                editMode={state?.editMode}
                dispatch={dispatch}
                quizName={state.quizName}
                questions={state.questions}
                showAddQuestionModal={state.showAddQuestionModal}
                singleQuestion={state.singleQuestion}
                quizObject={state.selectedQuiz}            
            />}

    </QuizContiner>
  )
}

export default Quiz

const HeaderTable = () => {
    return (
        <TableHead>
        <Row>
            <HeadCell>No.</HeadCell>
            <HeadCell>Name</HeadCell>
            <HeadCell></HeadCell>
            <HeadCell></HeadCell>
        </Row>                    
    </TableHead>
    )
}