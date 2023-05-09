import React, {useEffect} from 'react'
import { getSingleQuiz } from '../../api_service/api_service'
import { OK, SERVER_ERROR, URL_ERROR } from '../../constants/typeNames'
import { useNavigate, useParams } from 'react-router-dom'
import { IQuiz } from '../../reducer/types'

interface IUsePreview {
    setQuizSingle: React.Dispatch<React.SetStateAction<IQuiz>>
    setShowAnswer:  React.Dispatch<React.SetStateAction<boolean>>, 
    setQuestionIndex: React.Dispatch<React.SetStateAction<number>>
}

const useQuizPreview = ({ setQuizSingle, setShowAnswer, setQuestionIndex }: IUsePreview ) => {
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(()=> {
        getQuiz()
    }, [])

    const getQuiz = async() => {
        if(id === '' || id === undefined || id === null ){
            return window.alert(URL_ERROR)
        }
        const {data, status} = await getSingleQuiz(id)

        if(status === OK ) setQuizSingle(data)
        else {
            window.alert(SERVER_ERROR)
            navigate('/')
        }
    }
 
    const onNext = () => {
        setShowAnswer(false)
         setQuestionIndex(prev => prev + 1)
    }

    const onPrevious = () => {
        setShowAnswer(false)
        setQuestionIndex(prev => prev - 1)
    }

    const onFinish = () => navigate('/')

  return { onNext, onPrevious, onFinish }
}

export default useQuizPreview
useQuizPreview.defaultProps = {
    setQuizSingle: () => {}, 
    setShowAnswer: () => {},
    setQuestionIndex: () => {}
}