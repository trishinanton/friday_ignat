import React, {useState} from 'react';
import Modal from "../Modal";


const ModalInputContainer: React.FC = () => {
    const [show, setShow] = useState(false);
    const [answer, setAnswer] = useState('')

    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

    return (
        <>
            <div style={{display: 'flex'}}>
                <button onClick={() => setShow(true)}>show question Modal</button>
                <span>{answer}-</span>
                <span>{value1}-</span>
                <span>{value2}</span>
            </div>

            <Modal
                enableBackground={true}
                backgroundOnClick={() => setShow(false)}

                width={300}
                height={200}
                // modalOnClick={() => setShow(false)}

                show={show}
            >
                Input Modal
                <div style={{width: '50%', display: 'flex',flexDirection:'column', justifyContent:'space-between'}}>
                    <Input value={answer} setValue={setAnswer}/>
                    <Input value={value1} setValue={setValue1}/>
                    <Input value={value2} setValue={setValue2}/>
                    <button onClick={()=>setShow(false)}>Ok</button>
                </div>

            </Modal>
        </>
    );
};

const Input = (props:{value:string,setValue:any})=>( <input value={props.value} onChange={(e)=>props.setValue(e.currentTarget.value)}/> )

export default ModalInputContainer;