import {Redirect, Route, Switch } from "react-router-dom"
import {SignUp} from "../../../n2-features/f1-auth/a2-sign_up/SignUp";
import {Login} from "../../../n2-features/f1-auth/a1-login/Login";
import {Forgot} from "../../../n2-features/f1-auth/a3-forgot/Forgot";
import {NewProfile} from "../../../n2-features/f1-auth/a4-new_profile/Register";
import {Profile} from "../../../n2-features/f1-auth/a5-profile/Register";
import {CreatePassword} from "../../../n2-features/f1-auth/a3-forgot/CreatePassword";
import {Check} from "../../../n2-features/f1-auth/a3-forgot/check/Check";
import {PacksList} from "../../../n2-features/f2-packs/p1-packs_list/Packs-list";
import {Card} from "../../../n2-features/f2-packs/p2-card/Card";


export const PATH = {
    LOGIN: '/login',
    REGISTER: '/register',
    RECOVERY: '/recovery',
    NEW_PROFILE: '/new-profile',
    PROFILE: '/profile',
    CHECK: '/check',
    SET_PASSWORD: '/set-new-password',
    PACKS_LIST: '/packs-list',
    CARD: '/cards/:id'
}
export const Routes = ()=>{
    return (
        <>
            <Switch>
                <Route path={'/'} exact render = {()=> <Redirect to={PATH.LOGIN}/>}/>
                <Route path={PATH.LOGIN} render={()=><Login/>}/>
                <Route path={PATH.REGISTER} render={()=><SignUp/>}/>
                <Route path={PATH.RECOVERY} render={()=><Forgot/>}/>
                <Route path={PATH.CHECK} render={()=><Check/>}/>
                <Route path={PATH.SET_PASSWORD} render={()=><CreatePassword/>}/>
                <Route path={PATH.NEW_PROFILE} render={()=><NewProfile/>}/>
                <Route path={PATH.PROFILE} render={()=><Profile/>}/>
                <Route path={PATH.PACKS_LIST} render={()=><PacksList/>}/>
                <Route path={PATH.CARD} render={()=><Card/>}/>


            </Switch>
        </>
    )
}