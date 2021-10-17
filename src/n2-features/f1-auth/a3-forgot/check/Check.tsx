
import style from '../../a2-sign_up/SignUp.module.scss'
import React, {useState} from "react";
import s from '../Forgot.module.scss'
import {Button} from "@mui/material";
import send from '../../../../common/Group 281.png'
import {Redirect} from "react-router-dom";
import {PATH} from "../../../../n1-main/m1-ui/routes/Routes";

export const Check = ()=>{

    const [value, setValue] = useState(false)
    const sendData =()=>{
        setValue(true)
    }
    if (value){
        return <Redirect to={PATH.SET_PASSWORD} />
    }
    return(
        <div>
            <div className={style.register}>
                <div className={style.description}>It-incubator</div>
                <img src={send} alt="send"/>
                <h1>Check Email</h1>
                <div className={s.enter}>We’ve sent an Email with instructions to example@mail.com</div>
                <Button sx={{ width: '80%'}}  onClick={sendData} variant="contained" size="medium">Ok</Button>
            </div>
        </div>
    )
}