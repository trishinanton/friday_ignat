import React, {CSSProperties, useEffect, useState} from 'react';
import Modal from "../Modal";

interface IModalMessage {
    show: boolean;
    close: () => void;
    width: number;
    height: number;
    background?: CSSProperties
}

const ModalMessage: React.FC<IModalMessage> = (
    {
        close,
        width,
        height,
        show,
        children,
        background
    }
) => {
    const [top, setTop] = useState(10)
    const endValue = 50
    const modalStyle={
        top: `${top}px`
    }
    useEffect(()=>{
        if (show){
            const timer = setInterval(()=>{
                setTop((value)=>{
                    if(value<endValue)return value+10
                    return value
                })
            },50)
            setTimeout(()=>{
                clearInterval(timer);
                    close();
                setTop(10)
            },1000)
        }
    },[show])

    return (
        <Modal
            enableBackground={false}
            backgroundOnClick={close}
            width={width}
            height={height}
            show={show}
            modalStyle={modalStyle}
            background={background}
        >
            {children ? children : 'message MModal'}
        </Modal>
    );
};

export default ModalMessage;