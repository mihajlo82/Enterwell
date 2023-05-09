import Modal from "../../../../utils/modal/Modal"
import { AddQuestionModalContainer, ButtonSaveQuestion, Input, InputWrapp, OverlayAddQuestion, Question } from "./styles"
import { IQuestionModal } from "./types"

const QuestionModal = ({ onClose, onSave, setSendPayload, sendPayload }: IQuestionModal) => {   
    return (
        <Modal>
            <OverlayAddQuestion onClick={onClose} />
            <AddQuestionModalContainer>
                <InputWrapp>
                    <label> Type a question: </label> <Question value={sendPayload.question} onChange={(e: any) => setSendPayload({ ...sendPayload, question: e.target.value })} />
                </InputWrapp>

                <InputWrapp>
                    <label> Type an answer: </label> <Input value={sendPayload.answer} onChange={(e: any) => setSendPayload({ ...sendPayload, answer: e.target.value })} />
                </InputWrapp> <br />

                <ButtonSaveQuestion onClick={onSave}>Save question</ButtonSaveQuestion>
            </AddQuestionModalContainer>
        </Modal>
    )
}

export default QuestionModal
QuestionModal.defaultProps = {
    onClose: () => {}, 
    onSave: () => {}, 
    setSendPayload: () => {}, 
    sendPayload: { id: '', answer: '', question: '' }
}