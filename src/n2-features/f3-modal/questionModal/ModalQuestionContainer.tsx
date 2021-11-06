import React, {useState} from 'react';
import Modal from "../Modal";


const ModalQuestionContainer: React.FC = () => {
    const [show, setShow] = useState(false);
    const [answerYes, setAnswerYes] = useState(false)

    const setYes = ()=>{
        setShow(false)
        setAnswerYes(true)
    }
    const setNo = ()=>{
        setShow(false)
        setAnswerYes(false)
    }

    return (
        <>
            <div style={{display: 'flex'}}>
                <button onClick={() => setShow(true)}>show question Modal</button>
                {answerYes ? <span>Yes</span>: <span>No</span>}
            </div>

            <Modal
                enableBackground={true}
                backgroundOnClick={() => setShow(false)}

                width={300}
                height={200}
                // modalOnClick={() => setShow(false)}

                show={show}
            >
                Question Modal
                <div style={{width: '50%', display: 'flex',justifyContent:'space-between'}}>
                    <button onClick={setYes}>Yes</button>
                    <button onClick={setNo}>No</button>
                </div>

            </Modal>
        </>
    );
};

export default ModalQuestionContainer;