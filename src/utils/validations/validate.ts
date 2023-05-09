import { IQuestion, IQuiz } from "../../reducer/types";

export const checkIsQuizValid = (quiz: IQuiz) => {

    if( quiz?.id === null || quiz?.id?.trim() === '' || quiz?.id === undefined ) return false

    if( quiz?.name?.trim() === '' ) return false

    if( quiz?.questions?.length <= 0 ) return false

    let isValid = true

    quiz?.questions.forEach( question => {
        if(question?.answer?.trim() === '' || question?.question?.trim() === ''){
            return isValid = false
            
        }
    })
    return isValid
}

export const checkIsQuestionValid = (question : IQuestion) => {
    
    if(question?.answer?.trim() === '') return false
    if(question?.question?.trim() === '') return false

    return true
} 