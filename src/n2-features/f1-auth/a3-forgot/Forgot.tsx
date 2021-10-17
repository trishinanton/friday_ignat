import style from "../a2-sign_up/SignUp.module.scss";
import React from "react";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl/FormControl";
import {Button} from "@mui/material";
import {loginTC} from "../../../n1-main/m2-bll/login-reducer";
import s from './Forgot.module.scss'
import {forgotTC} from "../../../n1-main/m2-bll/forgot-reducer";
import {useDispatch, useSelector} from "react-redux";
import {PATH} from "../../../n1-main/m1-ui/routes/Routes";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../../../n1-main/m2-bll/b1-srore/redux-store";

export const Forgot = ()=>{
    const dispatch = useDispatch();
    const value = useSelector<AppRootStateType, boolean>(state=>state.forgot.value)
    interface State {
        amount: string;
        password: string;
        confirmPassword: string;
        email: string;
        weight: string;
        weightRange: string;
        showPassword: boolean;
        showConfirmPassword: boolean;
        disabled: boolean;
        remember: boolean;
        from:string;
        redirect: boolean,
        message: string
    }
    const [values, setValues] = React.useState<State>({
        amount: '',
        password: '',
        confirmPassword: '',
        email: '',
        weight: '',
        weightRange: '',
        showPassword: false,
        showConfirmPassword: false,
        disabled: false,
        remember: true,
        from: 'test-front-admin <ai73a@yandex.by>',
        redirect: false,
        message: `<div style="background-color: lime; padding: 15px">	
	                password recovery link: 
	                <a href='http://localhost:3000/#/set-new-password/$token$'>
	                link</a></div>`
    });
    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [prop]: event.target.value});
    };

    const sendData = () => {
        dispatch(forgotTC(values.email,values.from,values.message))
    }
    if (values.redirect){
        return <Redirect to={PATH.LOGIN}/>
    }
    if (value){
        return <Redirect to={PATH.CHECK} />
    }
    return(
        <div>
            <div className={style.register}>
                <div className={style.description}>It-incubator</div>
                <h1>Forgot your password?</h1>
                <FormControl sx={{m: 1, width: '80%'}} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
                    <Input
                        value={values.email}
                        onChange={handleChange('email')}
                    />
                </FormControl>
                <div className={s.enter}>Enter your email address and we will send you further instructions </div>
                <Button sx={{ width: '80%'}} disabled={values.disabled} onClick={sendData} variant="contained" size="medium">Send Instructions</Button>
                <div className={s.enter}>Did you remember your password?</div>
                <a className={s.try} onClick={()=>setValues(values=>({...values,redirect: true}))}>Try logging in</a>
            </div>
        </div>
    )
}