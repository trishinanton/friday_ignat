import {Dispatch} from "redux";
import {setAppStatusAC} from "./app-reducer";
import {packsApi, UserData} from "../../n2-features/f2-packs/api/packs-api";
import {AppRootStateType} from "./b1-srore/redux-store";
import thunk, { ThunkDispatch } from 'redux-thunk';
import {cardApi, CardsType} from "../../n2-features/f2-packs/p2-card/api/card-api";
import {useSelector} from "react-redux";


const initialState ={
    pageNumber: 1,
    showNumber: 3,
    cards: [] as Array<CardsType & {editSpan:boolean,editSpanAnswer:boolean}>,
    filter: '',
    cardQuestion:'',
    cardAnswer: '',
    newQuestion: '',
    newAnswer: '',
    updateQuestion:''

}
type InitialStateType = typeof initialState


export const CardReducer = (state:InitialStateType = initialState, action:ActionsType):InitialStateType =>{
    switch (action.type) {
        case 'CARD/SET-PAGE-NUMBER':
            return {...state,pageNumber: action.pageNumber}
        case 'CARD/SET-SHOW-NUMBER':
            return {...state, showNumber: action.showNumber}
        case 'CARD/SET-CARDS' :
            // return {...state, cards: [...state.cards,...action.cards]}
            return {...state, cards: [...action.cards]}
        case 'CARD/SET-EDIT-SPAN':
            return {...state, cards: state.cards.map(c=>{
                    if (c._id === action._id) c.editSpan = !c.editSpan
                    return c
                })}
        case 'CARD/SET-EDIT-SPAN-ANSWER':
            return {...state, cards: state.cards.map(c=>{
                if (c._id===action._id) c.editSpanAnswer = !c.editSpanAnswer
                    return c
                })}
        case 'CARD/SET-FILTER' :
            return {...state, filter:action.filter }
        case 'CARD/SET-CARD-QUESTION':
            return {...state, cardQuestion:action.cardQuestion}
        case 'CARD/SET-CARD-ANSWER':
            return {...state, cardAnswer:action.cardAnswer}
        case 'CARD/SET-NEW-QUESTION':
            return {...state, newQuestion:action.newQuestion}
        case 'CARD/SET-NEW-ANSWER':
            return {...state, newAnswer:action.newAnswer}
        case 'CARD/SET-UPDATE-QUESTION':
            return {...state, cards: state.cards.map(c=>{
                if (c._id ===action._id) c.question=action.updateQuestion
                    return c
                })}
        case 'CARD/SET-UPDATE-ANSWER':
            return {...state, cards: state.cards.map(c=>{
                if (c._id===action._id) c.answer = action.updateAnswer
                    return c
                })}
        default:
            return {...state}
    }
}

//actions creators
export const setPageAC = (pageNumber: number) =>({
    type: 'CARD/SET-PAGE-NUMBER',pageNumber
} as const)
export const setShowNumberAC = (showNumber: number) =>{
    return {type: 'CARD/SET-SHOW-NUMBER', showNumber} as const
}
export const setCardsAC = (cards: Array<CardsType & {editSpan:boolean,editSpanAnswer:boolean}>)=>({
    type: 'CARD/SET-CARDS',cards
} as const)
export const setEditSpan = (_id:string) =>({
    type:'CARD/SET-EDIT-SPAN',_id
} as const)
export const setEditSpanAnswerAC = (_id:string) =>({
    type: 'CARD/SET-EDIT-SPAN-ANSWER', _id
} as const)
export const setFilterAC = (filter: string)=>({
    type: 'CARD/SET-FILTER',filter
} as const)
export const setCardQuestionAC = (cardQuestion: string)=>({
    type: 'CARD/SET-CARD-QUESTION',cardQuestion
} as const)
export const setCardAnswerAC = (cardAnswer: string)=>({
    type: 'CARD/SET-CARD-ANSWER',cardAnswer
} as const)
export const setNewQuestionAC = (newQuestion: string)=>({
    type: 'CARD/SET-NEW-QUESTION', newQuestion
} as const)
export const setNewAnswerAC = (newAnswer: string)=>({
    type: 'CARD/SET-NEW-ANSWER', newAnswer
} as const)
export const setUpdateQuestionAC = (updateQuestion: string, _id:string)=>({
    type: 'CARD/SET-UPDATE-QUESTION', updateQuestion, _id
} as const)
export const setUpdateAnswerAC = (updateAnswer: string, _id:string)=>({
    type: 'CARD/SET-UPDATE-ANSWER', updateAnswer, _id
} as const)


//action types
export type setPageActionType = ReturnType<typeof setPageAC>
export type setShowNumberActionType = ReturnType<typeof setShowNumberAC>
export type setCardsActionType = ReturnType<typeof setCardsAC>
export type setFilterActionType = ReturnType<typeof setFilterAC>
export type setCardQuestionActionType = ReturnType<typeof setCardQuestionAC>
export type setCardAnswerActionType = ReturnType<typeof setCardAnswerAC>
export type setNewQuestionActionType = ReturnType<typeof setNewQuestionAC>
export type setNewAnswerActionType = ReturnType<typeof setNewAnswerAC>
export type setUpdateQuestionActionType = ReturnType<typeof setUpdateQuestionAC>
export type setEditSpanActionType = ReturnType<typeof setEditSpan>
export type setEditSpanAnswerActionType = ReturnType<typeof setEditSpanAnswerAC>
export type setUpdatAnswereActionType = ReturnType<typeof setUpdateAnswerAC>
type ActionsType = setPageActionType
    | setShowNumberActionType
    | setCardsActionType
    | setFilterActionType
    | setCardQuestionActionType
    | setCardAnswerActionType
    | setNewQuestionActionType
    | setNewAnswerActionType
    | setUpdateQuestionActionType
    | setEditSpanActionType
    | setEditSpanAnswerActionType
    | setUpdatAnswereActionType


//thunk creators
export const getCardTC = (cardsPack_id: string) => (dispatch: Dispatch, getState:()=> AppRootStateType) =>{

    dispatch(setAppStatusAC('loading'))

    const pageNumber = getState().card.pageNumber
    const showNumber = getState().card.showNumber
    const filter = getState().card.filter
    const cardQuestion = getState().card.cardQuestion
    const cardAnswer = getState().card.cardAnswer


    cardApi.getCard(cardAnswer,cardQuestion,cardsPack_id,pageNumber,showNumber,filter)
        .then(res => {
            dispatch(setAppStatusAC('succeeded'))
            const cards = res.data.cards.map(i=>({...i, editSpan:false, editSpanAnswer:false}))
            console.log(cards)
            dispatch(setCardsAC(cards))

        })
}
export const createCardTC = (cardsPack_id: string, question?:string,answer?: string) => (dispatch:ThunkDispatch<AppRootStateType, void, any>, getState: ()=> AppRootStateType) =>{
    dispatch(setAppStatusAC('loading'))
    const card = {
        cardsPack_id: cardsPack_id,
        question,
        answer
    }
    cardApi.newCard(card)
        .then(res => {
            dispatch(setAppStatusAC('succeeded'))
            dispatch(getCardTC(cardsPack_id))
        })
}
export const deleteCardTC = (idCard:string,cardsPack_id: string) =>(dispatch: ThunkDispatch<AppRootStateType, any, any>, getState:()=> AppRootStateType)=>{
    dispatch(setAppStatusAC('loading'))
    cardApi.deleteCard(idCard)
        .then(res=>{
            dispatch(setAppStatusAC('succeeded'))
            dispatch(getCardTC(cardsPack_id))
        })
}
export const updateCardTC = (updateQuestion:string,_id:string, cardsPack_id:string) =>(dispatch: ThunkDispatch<AppRootStateType, any, any>, getState:()=> AppRootStateType)=>{
    dispatch(setAppStatusAC('loading'))

    const card ={
        _id,
        question:updateQuestion
    }
    cardApi.updateCard(card)
        .then(res=>{
            dispatch(setAppStatusAC('succeeded'))
            dispatch(getCardTC(cardsPack_id))
        })
}
