import {combineReducers, createStore} from "redux";
import {LoginReducer} from "../login-reducer";
import {RecoveryReducer} from "../recovery-reducer";
import {RegisterReducer} from "../register-reducer";
import {NewProfileReducer} from "../new_profile-reducer";
import {ProfileReducer} from "../profile-reducer";

export const CommonReducer = combineReducers({
    login: LoginReducer,
    recovery: RecoveryReducer,
    register: RegisterReducer,
    new_profile: NewProfileReducer,
    profile: ProfileReducer
})

export const store = createStore(CommonReducer)