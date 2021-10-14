import {Redirect, Route, Switch } from "react-router-dom"
import {Login} from "../../../n2-features/f1-auth/a1-login/Login";
import {Register} from "../../../n2-features/f1-auth/a2-register/Register";
import {Recovery} from "../../../n2-features/f1-auth/a3-recovery/Register";
import {NewProfile} from "../../../n2-features/f1-auth/a4-new_profile/Register";
import {Profile} from "../../../n2-features/f1-auth/a5-profile/Register";

export const PATH = {
    LOGIN: '/login',
    REGISTER: '/register',
    RECOVERY: '/recovery',
    NEW_PROFILE: '/new-profile',
    PROFILE: '/profile'
}
export const Routes = ()=>{
    return (
        <>
            <Switch>
                <Route path={'/'} exact render = {()=> <Redirect to={PATH.LOGIN}/>}/>
                <Route path={PATH.LOGIN} render={()=><Login/>}/>
                <Route path={PATH.REGISTER} render={()=><Register/>}/>
                <Route path={PATH.RECOVERY} render={()=><Recovery/>}/>
                <Route path={PATH.NEW_PROFILE} render={()=><NewProfile/>}/>
                <Route path={PATH.PROFILE} render={()=><Profile/>}/>

            </Switch>
        </>
    )
}