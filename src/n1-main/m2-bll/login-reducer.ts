import {Dispatch} from "redux";
import {setAppStatusAC, setIdUserAC, setIsLoggedInAC} from "./app-reducer";
import {signUpAPI} from "../../n2-features/f1-auth/a2-sign_up/api/sign_up-api";
import {setSignUpError, setSignUpErrorActionType} from "./sign_up-reducer";
import {loginAPI} from "../../n2-features/f1-auth/a1-login/api/login-api";

const initialState = {
    error:null
}
export const LoginReducer = (state:InitialStateType=initialState, action:ActionsType):InitialStateType=>{
    switch (action.type){
        case 'LOGIN/SET-ERROR':
            return {...state, error:action.error}
        default:
            return {...state}
    }
}
type InitialStateType = {
    error:string|null
}
//action creators
export const setLoginError = (error: string | null) => ({type: 'LOGIN/SET-ERROR', error} as const)

export type setLoginErrorActionType = ReturnType<typeof setLoginError>

//action types
type ActionsType = setLoginErrorActionType
//thunk creators
export const loginTC = (email: string, password:string, rememberMe:boolean) => (dispatch:Dispatch) =>{
    dispatch(setAppStatusAC('loading'))
    loginAPI.loginUser(email, password,rememberMe)
        .then(res =>{
            dispatch(setIsLoggedInAC(true))
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setIdUserAC(res.data._id))

        })
        .catch(error=>{
            console.log({...error})
            dispatch(setLoginError(error.response.data.error))
            dispatch(setAppStatusAC('succeeded'))
        })
}