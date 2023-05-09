import React, { useState } from 'react'
import { AnswerContainer, MoveQuestion, OrderContainer, PreviewContainer, PreviewMain, Questions, ShowAnswer } from './styles'
import { IQuiz } from '../../reducer/types' 
import useQuizPreview from './useQuizPreview'
import { HIDE, SHOW_ANSWER } from '../../constants/typeNames'

const QuizPreview = () => { 
    const [quizSingle, setQuizSingle] = useState<IQuiz>({ id:'', name: '', isActive: true, questions: [] })
    const [questionIndex, setQuestionIndex] = useState<number>(0)
    const [showAnswer, setShowAnswer] = useState<boolean>(false)

    const { onNext, onPrevious, onFinish } = useQuizPreview({ setQuizSingle, setQuestionIndex, setShowAnswer })
  return (
    <PreviewContainer>
        <PreviewMain>
            <h1>QUIZ: {quizSingle?.name} </h1>
            <h4>Question: {questionIndex+1} / {quizSingle.questions.length}</h4>
            <Questions> { quizSingle?.questions[questionIndex]?.question } </Questions>
            
            <AnswerContainer>
                 <p><b>{showAnswer && `Answer: ${quizSingle?.questions[questionIndex]?.answer}`} </b></p>
                <ShowAnswer onClick={() => setShowAnswer(prev => !prev)}>{showAnswer ? HIDE : SHOW_ANSWER}</ShowAnswer>
            </AnswerContainer>

            <OrderContainer>
                {questionIndex <= 0 ? <div /> : <MoveQuestion onClick={onPrevious}> Previous </MoveQuestion> }
                {questionIndex < (quizSingle.questions.length-1) ? <MoveQuestion onClick={onNext}> Next </MoveQuestion> : <div />}
                {questionIndex === (quizSingle.questions.length-1) &&  <MoveQuestion onClick={onFinish}> FINISH </MoveQuestion>}
            </OrderContainer>
        </PreviewMain>
    </PreviewContainer>
  )
}

export default QuizPreview