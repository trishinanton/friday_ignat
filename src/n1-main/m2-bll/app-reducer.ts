
const initialState: InitialStateType = {
    status: 'idle',
    error: null,
    logged: false,
    user_id: '5eecf82a3ed8f700042f1186'
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        case 'APP/SET-LOGGED':
            return {...state, logged:action.logged}
        case 'APP/SET-ID':
            return {...state, user_id: action.user_id}
        default:
            return {...state}
    }
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type InitialStateType = {
    // происходит ли сейчас взаимодействие с сервером
    status: RequestStatusType
    // если ошибка какая-то глобальная произойдёт - мы запишем текст ошибки сюда
    error: string | null
    logged: boolean,
    user_id: string
}
export const setAppErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)
export const setIsLoggedInAC = (logged: boolean) => ({type:'APP/SET-LOGGED', logged} as const)
export const setIdUserAC = (user_id: string)=> ({type: 'APP/SET-ID', user_id} as const)

export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>
export type setIsLoggedInActionType = ReturnType<typeof setIsLoggedInAC>
export type setIdUserActionType = ReturnType<typeof setIdUserAC>

type ActionsType =
    | SetAppErrorActionType
    | SetAppStatusActionType
    | setIsLoggedInActionType
    | setIdUserActionType