import axios, {AxiosResponse} from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
    // headers: {
    //     'API-KEY': '5270c5b3-d507-4271-8572-1aea12195316'
    // }
})

export const loginAPI = {
    loginUser(email: string, password:string,rememberMe:boolean) {
        return instance.post<{ email: string,password:string,rememberMe:boolean }, AxiosResponse< SuccessResponseType >>('auth/login', {email,password,rememberMe});
    },
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