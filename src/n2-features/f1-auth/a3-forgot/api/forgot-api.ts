import axios, {AxiosResponse} from 'axios'

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
    // headers: {
    //     'API-KEY': '5270c5b3-d507-4271-8572-1aea12195316'
    // }
})

export const forgotApi = {
    forgotUser(email: string, from:string,message:any) {
        return instance.post<{ email: string,from:string,message:any }, AxiosResponse< SuccessResponseType >>('auth/forgot', {email,from,message});
    },
    newPassword(password:string,resetPasswordToken:string){
        return instance.post<{ password: string,resetPasswordToken:string }, AxiosResponse< SuccessResponseType >>('auth/set-new-password', {password,resetPasswordToken});
    }
}

export type SuccessResponseType = {
    _id: string,
    email: string,
    rememberMe: boolean,
    isAdmin: boolean,
    name: string,
    verified: boolean,
    publicCardPacksCount: number,
    created: string,
    updated: string,
    __v: number,
    token: string,
    tokenDeathTime: number,
    avatar: string,
    deviceTokens: any

}
// export type ErrorResponseType ={
//     error: string,
//     email: string,
//     in: string
// }