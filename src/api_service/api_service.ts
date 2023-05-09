import axios from 'axios'
import { URL } from '../constants/typeNames'
import { IQuiz } from '../reducer/types'

export const getQuizesData = async() => {
    const controller = new AbortController();

    return axios.get( URL, { signal: controller.signal })
      .then( response => {
        const object = { data: response?.data, status: 'ok' }
        return object
      })
      .catch( error => {
        const object = { data: [], status: error }
        return object
      })
      .finally( () => controller.abort())
  }


  export const getSingleQuiz = async(id: string) => {
    const controller = new AbortController();

    return axios.get( URL+id, { signal: controller.signal })
      .then( response => { 
        const object = { data: response?.data, status: 'ok' }
        return object
      })
      .catch( error => {
        const object = { data: [], status: error }
        return object
      })
      .finally( () => controller.abort())
  }


  export const addQuiz = async(quiz: IQuiz) => {
    const controller = new AbortController();

    return axios.post( URL, quiz, { signal: controller.signal })
      .then( response => {
        const object = { data: response?.data, status: 'ok' }
        return object
    })
      .catch( error => {
        const object = { data: [], status: error }
        return object
      })
      .finally( () => controller.abort())
  } 

  export const deleteQuiz = async(quiz: IQuiz) => {
    const controller = new AbortController();

    return axios.put( URL+quiz.id, 
      { ...quiz, isActive: false },
      { signal: controller.signal })
      .then( () => {
        const object = { message: 'success', status: 'ok' }
        return object
    })
      .catch( error => {
        const object = { message: error, status: error }
        return object
      })
      .finally( () => controller.abort())
  }

  export const updateQuiz = async(quiz: IQuiz) => {
    const controller = new AbortController();

    return axios.put( URL+quiz.id, 
        { id: quiz.id, name: quiz.name, isActive: true, questions: quiz.questions },
        { signal: controller.signal })
      .then( (response) => { 
        const object = { data: response?.data, status: 'ok' }
        return object
    })
      .catch( error => {
        const object = { data: [], status: error }
        return object
      })
      .finally( () => controller.abort())
  }