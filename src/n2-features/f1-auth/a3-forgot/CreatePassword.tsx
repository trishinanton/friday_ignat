import style from "../a2-sign_up/SignUp.module.scss";
import React from "react";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl/FormControl";
import {Box, Button, IconButton, InputAdornment} from "@mui/material";
import {loginTC} from "../../../n1-main/m2-bll/login-reducer";
import s from './Forgot.module.scss'
import { createNewPasswordTC, forgotTC} from "../../../n1-main/m2-bll/forgot-reducer";
import {useDispatch, useSelector} from "react-redux";
import {PATH} from "../../../n1-main/m1-ui/routes/Routes";
import {Redirect} from "react-router-dom";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import {AppRootStateType} from "../../../n1-main/m2-bll/b1-srore/redux-store";
import CircularProgress from "@mui/material/CircularProgress";
import {RequestStatusType} from "../../../n1-main/m2-bll/app-reducer";

export const CreatePassword = () =>{
    const dispatch = useDispatch()
    const success = useSelector<AppRootStateType, boolean>(state => state.forgot.success);
    const errorPassword = useSelector<AppRootStateType, string |null>(state => state.forgot.errorNewPassword);
    const loading = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status);
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
        redirect: boolean;
        token: string
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
        token: 'cd10a930-2ecc-11ec-923a-dd8cf4ece234'
    });
    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [prop]: event.target.value});
    };
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const sendData = () => {
        dispatch(createNewPasswordTC(values.password,values.token))
    }
    if (values.redirect){
        return <Redirect to={PATH.LOGIN}/>
    }
    if (success){
        return <Redirect to={PATH.PROFILE} />
    }
    return(
        <div>
            {loading === 'loading' ? <Box sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <CircularProgress/>
            </Box> :<div className={style.register}>
                <div className={style.description}>It-incubator</div>
                <h1>Create new password</h1>
                <FormControl sx={{m: 1, width: '80%'}} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <div className={s.enter}>Create new password and we will send you further instructions to email</div>
                <div style={{position: 'relative', display:'flex', flexDirection: 'column', width:'100%', alignItems: 'center'}}>
                    {errorPassword && <div className={style.error}>{errorPassword}</div>}
                    <Button sx={{ width: '80%'}} disabled={values.disabled} onClick={sendData} variant="contained" size="medium">Create new password</Button>
                </div>


            </div>

            }

        </div>
    )
}