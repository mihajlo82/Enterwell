import React from 'react'
import { ModalContiner } from './styles'

const Modal = ({ children }) => {
  return (
    <ModalContiner>
        { children }
    </ModalContiner>
  )
}

export default Modal