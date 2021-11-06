import React, {useState} from 'react';
import ModalMessage from './ModalMessage';

const ModalMessageStackContainer: React.FC = () => {
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

    return (
        <>
            <div>
                <button onClick={() => setShowSuccess(true)}>add Success</button>
            </div>

            <ModalMessage
                show={showSuccess}
                close={() => setShowSuccess(false)}
                width={100}
                height={50}
            >
                <span>add success</span>
            </ModalMessage>

            <div>
                <button onClick={() => setShowError(true)}>add Error</button>
            </div>

            <ModalMessage
                show={showError}
                close={() => setShowError(false)}
                width={100}
                height={50}
                background={{background:'red'}}
            >
                <span>add success</span>
            </ModalMessage>
        </>
    );
};

export default ModalMessageStackContainer;