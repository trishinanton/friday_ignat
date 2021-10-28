import { NavLink } from 'react-router-dom'
import style from './Header.module.css'
import {PATH} from "../routes/Routes";

export const Header = ()=>{
    return(
        <div className={style.menu}>
            <div className={style.menu_item}><NavLink to={PATH.LOGIN}>LOGIN</NavLink></div>
            <div className={style.menu_item}><NavLink to={PATH.REGISTER}>SIGN UP</NavLink></div>
            <div className={style.menu_item}><NavLink to={PATH.RECOVERY}>FORGOT</NavLink></div>
            <div className={style.menu_item}><NavLink to={PATH.SET_PASSWORD}>CreatePass</NavLink></div>
            <div className={style.menu_item}><NavLink to={PATH.CHECK}>Check</NavLink></div>
            <div className={style.menu_item}><NavLink to={PATH.NEW_PROFILE}>NEW_PROFILE</NavLink></div>
            <div className={style.menu_item}><NavLink to={PATH.PROFILE}>PROFILE</NavLink></div>
            <div className={style.menu_item}><NavLink to={PATH.PACKS_LIST}>PACKS_LIST</NavLink></div>
            <div className={style.menu_btn}>Menu</div>
        </div>
    )
}