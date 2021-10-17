import {Dispatch} from "redux";
import {setAppErrorAC, setAppStatusAC, setIsLoggedInAC} from "./app-reducer";
import {signUpAPI} from "../../n2-features/f1-auth/a2-sign_up/api/sign_up-api";
import {setSignUpError} from "./sign_up-reducer";
import {forgotApi} from "../../n2-features/f1-auth/a3-forgot/api/forgot-api";

const initialState = {
    errorForgot:null,
    errorNewPassword: null,
    value: false,
    success: false
}
type InitialStateType = {
    errorForgot:null |string,
    errorNewPassword: null |string,
    value: boolean,
    success: boolean
}
export const ForgotReducer = (state:InitialStateType=initialState, action:ActionsType)=>{
    switch (action.type){
        case 'FORGOT/ERROR-FORGOT':
            return {...state, errorForgot:action.errorForgot}
        case 'FORGOT/ERROR-PASSWORD':
            return {...state, errorNewPassword:action.errorNewPassword}
        case 'FORGOT/SUCCESS-LOGIN':
            return {...state, value:action.value}
        case 'FORGOT/SUCCESS-PASSWORD' :
            return  {...state, success: action.success}
        default:
            return {...state}
    }
}

//action creators
export const setForgotErrorAC = (errorForgot:string|null)=>({type:'FORGOT/ERROR-FORGOT', errorForgot} as const)
export const setPasswordErrorAC = (errorNewPassword:string|null)=>({type:'FORGOT/ERROR-PASSWORD', errorNewPassword} as const)
export const setSuccessLoginAC = (value: boolean)=>({type: 'FORGOT/SUCCESS-LOGIN', value} as const)
export const setSuccessPasswordAC = (success: boolean)=>({type:'FORGOT/SUCCESS-PASSWORD',success } as const)
//action types
export type setForgotErrorActionType = ReturnType<typeof setForgotErrorAC>
export type setPasswordErrorActionType = ReturnType<typeof setPasswordErrorAC>
export type setSuccessLoginActionType = ReturnType<typeof setSuccessLoginAC>
export type setSuccessPasswordActionType = ReturnType<typeof setSuccessPasswordAC>
type ActionsType = setForgotErrorActionType | setPasswordErrorActionType | setSuccessLoginActionType | setSuccessPasswordActionType

//thunk creators

export const forgotTC = (email: string, from:string,message:any) => (dispatch:Dispatch) =>{
    dispatch(setAppStatusAC('loading'))
    forgotApi.forgotUser(email, from, message)
        .then(res =>{
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setSuccessLoginAC(true))

        })
        .catch(error=>{
            console.log({...error})
            dispatch(setForgotErrorAC(error.response.data.error))
            dispatch(setAppStatusAC('succeeded'))
        })
}
export const createNewPasswordTC = (password:string,resetPasswordToken:string) => (dispatch:Dispatch)=>{
    dispatch(setAppStatusAC('loading'))
    forgotApi.newPassword(password,resetPasswordToken)
        .then(res=>{
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setSuccessPasswordAC(true))
        })
        .catch(error =>{
            console.log({...error})
            dispatch(setPasswordErrorAC(error.response.data.error))
            dispatch(setAppStatusAC('succeeded'))
        })
}