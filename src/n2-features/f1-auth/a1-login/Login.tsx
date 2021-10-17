import style from "../a2-sign_up/SignUp.module.scss";
import React, {useEffect} from "react";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl/FormControl";
import {Box, Button, Checkbox, IconButton, InputAdornment} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {signUpTC} from "../../../n1-main/m2-bll/sign_up-reducer";
import s from './Login.module.scss'
import {loginTC} from "../../../n1-main/m2-bll/login-reducer";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {PATH} from "../../../n1-main/m1-ui/routes/Routes";
import {AppRootStateType} from "../../../n1-main/m2-bll/b1-srore/redux-store";
import {RequestStatusType} from "../../../n1-main/m2-bll/app-reducer";
import CircularProgress from "@mui/material/CircularProgress";


export const Login = ()=>{
    useEffect(()=>{
        //@ts-ignore
        window.gapi.load('auth2', function() {
            /* библиотека загрузилась */
            //@ts-ignore
            window.gapi.auth2.init({
                client_id: '372303875667-nlvppvulrt4kevh9ld3ieh5jh3n146bu.apps.googleusercontent.com',

            })
                .then(()=>console.log('init OK'), ()=>console.log('init ERR'))
        });
    })
    const dispatch = useDispatch()
    const isLogged = useSelector<AppRootStateType, boolean>(state => state.app.logged)
    const error = useSelector<AppRootStateType, string | null>(state => state.login.error);
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
        turnOnSignUp: boolean;
        userName: string | null
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
        turnOnSignUp: false,
        userName: null
    });
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
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
    const handleChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues(values =>({...values, remember:event.target.checked}));
    };
    const sendData = () => {
        dispatch(loginTC(values.email,values.password,values.remember))
    }
    const signIn = () =>{
        //@ts-ignore
        const _authOK = user=>{
            const userGoogle = user.getBasicProfile().getName()
            console.log(userGoogle)
            setValues((v)=>({...v,userName: userGoogle }))
            // user.getBasicProfile().getName()
        }
        const _authErr=()=>{
            console.log('Auth Err')
        }
        //@ts-ignore
        const GoogleAuth = window.gapi.auth2.getAuthInstance()
        GoogleAuth.signIn({scope: 'profile email'})
            .then(_authOK,_authErr )
    }

    if (isLogged) {
        return <Redirect to={PATH.PROFILE}/>
    }
    if (values.turnOnSignUp){
        return <Redirect to={PATH.REGISTER}/>
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
                <h1>Sign In</h1>
                {values.userName && <span className={s.user}>Hello, {values.userName}</span>}
                <FormControl sx={{m: 1, width: '80%'}} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
                    <Input
                        value={values.email}
                        onChange={handleChange('email')}
                    />
                </FormControl>
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
                <div className={s.remember}>
                    <Checkbox {...label} checked={values.remember}  onChange={handleChangeCheckBox}/><div>Remember Me</div>
                </div>

                <a className={s.forgot}>Forgot Password</a>
                <Button sx={{ width: '80%'}} disabled={values.disabled} onClick={sendData} variant="contained" size="medium">Login</Button>
                <Button sx={{ width: '80%', marginTop: '10px'}} disabled={values.disabled} onClick={signIn} variant="contained" size="medium">Login with google</Button>
                <div className={s.descr}>Don’t have an account?</div>
                <a className={s.sign} onClick={()=>setValues(v=>({...v,turnOnSignUp: true}))}>Sign Up</a>
            </div>
            }

        </div>
    )
}