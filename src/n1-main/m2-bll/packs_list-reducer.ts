import {Dispatch} from "redux";
import {setAppStatusAC} from "./app-reducer";
import {packsApi, UserData} from "../../n2-features/f2-packs/api/packs-api";
import {AppRootStateType} from "./b1-srore/redux-store";
import thunk, { ThunkDispatch } from 'redux-thunk';


const initialState ={
    //start value
    packName: null,
    min: 3,
    max:9,
    sortPacks: '0updated',
    page: 2,
    pageCount: '2',
    //response
    // name: 'Name Pack',
    // cardsCount: 0,
    // updated: '18.03.2021',
    // user_name: 'Ivan Ivanov'
    response: [{
        _id: "6172d835024e930004d60b0f",
        user_id: "6172d7e1024e930004d60b0d",
        user_name: "qqqq@wwww.com",
        private: false,
        name: "qwer",
        path: "/def",
        grade: 0,
        shots: 0,
        cardsCount: 0,
        type: "pack",
        rating: 0,
        created: "2021-10-22T15:26:45.347Z",
        updated: "2021-10-22T15:27:20.683Z",
        more_id: "6172d7e1024e930004d60b0d",
        __v: 0,
        deckCover: null
    }]

}
type InitialStateType = {
    packName?: string | null,
    min?: number,
    max?:number,
    sortPacks?:string,
    page?: number,
    pageCount?: string,

    // name: string,
    // cardsCount: number,
    // updated: string,
    // user_name: string
    response: Array<UserData>
}
export const PacksListReducer = (state:InitialStateType = initialState, action:ActionsType):InitialStateType =>{
    switch (action.type) {
        case 'PACKS-LIST/CHANGE-START-VALUE':
            return {...state,packName: action.packName,
                min:action.min,
                max:action.max,
                sortPacks: action.sortPacks,
                page: action.page,
                pageCount: action.pageCount,
            }
        case 'PACKS-LIST/RESPONSE-VALUE':
            return {...state, response: action.response}
        case 'PACKS-LIST/SET-PAGE-COUNT':
            return {...state, pageCount:action.pageCount}
        default:
            return {...state}
    }
}

//actions creators
export const setStartValueAC = (packName?: string |null,
                                min?: number,
                                max?:number,
                                sortPacks?:any,
                                page?: number,
                                pageCount?: string
                                ) =>({
    type: 'PACKS-LIST/CHANGE-START-VALUE',packName,min,max,sortPacks,page,pageCount
} as const)
export const setResponseValuesAC = (response:Array<UserData>)=>({
    type: 'PACKS-LIST/RESPONSE-VALUE', response
} as const)
export const setPageCountAC = ( pageCount:string)=>{

    return{ type: 'PACKS-LIST/SET-PAGE-COUNT', pageCount} as const

}


//action types
export type setStartValuesActionType = ReturnType<typeof setStartValueAC>
export type setResponseValuesActionType = ReturnType<typeof setResponseValuesAC>
export type setPageCountActionType = ReturnType<typeof setPageCountAC>
type ActionsType = setStartValuesActionType | setResponseValuesActionType | setPageCountActionType

//thunk creators
export const packsListTC = (idUser?: string) => (dispatch: Dispatch, getState: ()=> AppRootStateType) =>{

    dispatch(setAppStatusAC('loading'))
    const packsStartValue = getState().packs_list
    // const idUser = getState().app.user_id

    packsApi.getPacks(packsStartValue.packName,
        packsStartValue.min,
        packsStartValue.max,
        packsStartValue.sortPacks,
        packsStartValue.page,
        packsStartValue.pageCount,
        idUser,
        )
        .then(res => {
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setResponseValuesAC(res.data.cardPacks))
            console.log({...res.data.cardPacks})

        })
}
export const createPackTC = (cardsPack:Object) =>(dispatch: ThunkDispatch<AppRootStateType, any, any>)=>{
    dispatch(setAppStatusAC('loading'))
    packsApi.createPack(cardsPack)
        .then(res=>{
            dispatch(setAppStatusAC('succeeded'))
            dispatch(packsListTC())
        })
}
export const deletePackTC = (id:string) =>(dispatch: ThunkDispatch<AppRootStateType, any, any>)=>{
    dispatch(setAppStatusAC('loading'))
    packsApi.deletePack(id)
        .then(res=>{
            dispatch(setAppStatusAC('succeeded'))
            dispatch(packsListTC())
        })
}
export const updatePackTC = (cardsPack:{_id:string,name?: string}) =>(dispatch: ThunkDispatch<AppRootStateType, any, any>)=>{
    dispatch(setAppStatusAC('loading'))
    packsApi.updatePack(cardsPack)
        .then(res=>{
            dispatch(setAppStatusAC('succeeded'))
            dispatch(packsListTC())
        })
}