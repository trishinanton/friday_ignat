import React from 'react';
import ModalContainer from "./ModalContainer";
import ModalQuestionContainer from "./questionModal/ModalQuestionContainer";
import ModalInputContainer from "./inputModal/ModalInputContainer";
import ModalMessageContainer from "./modalMessage/ModalMessageContainer";
import ModalMessageStackContainer from "./modalMessage/ModalMessageStackContainer";


const ModalsPage: React.FC = () => {

    return (
        <div
            style={{
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh'
            }}
        >

            <ModalContainer/>
            <ModalQuestionContainer/>
            <ModalInputContainer/>
            <ModalMessageContainer/>
            <ModalMessageStackContainer/>
            {/*<ModalUp/>*/}

        </div>
    );
};

export default ModalsPage;