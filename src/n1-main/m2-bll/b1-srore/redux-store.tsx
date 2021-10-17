import {applyMiddleware, combineReducers, createStore} from "redux";
import {LoginReducer} from "../login-reducer";
import {ForgotReducer} from "../forgot-reducer";
import {Sign_upReducer} from "../sign_up-reducer";
import {NewProfileReducer} from "../new_profile-reducer";
import {ProfileReducer} from "../profile-reducer";
import {appReducer} from "../app-reducer";
import thunkMiddleware from 'redux-thunk'

export const rootReducer = combineReducers({
    app: appReducer,
    login: LoginReducer,
    forgot: ForgotReducer,
    sign_up: Sign_upReducer,
    new_profile: NewProfileReducer,
    profile: ProfileReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store;