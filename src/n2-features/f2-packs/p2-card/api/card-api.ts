import axios, {AxiosResponse} from 'axios'

const instance = axios.create({
    // baseURL: 'http://localhost:7542/2.0/',
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true
})

export const cardApi = {
    getCard(cardAnswer:string,cardQuestion: string,cardsPack_id: string, page?:number,pageCount?:number,sortCards?:string) {
        return instance.get<{params:{cardAnswer:string,cardQuestion: string,cardsPack_id: string, page?:number,pageCount?:number,sortCards?:string}}, AxiosResponse<CardResponseType>>('/cards/card', {params:{cardAnswer,cardQuestion,cardsPack_id,sortCards,page,pageCount}});
    },
    newCard(card:NewCardType){
        return instance.post('/cards/card',{card})
    },
    deleteCard(id:string){
        return instance.delete('/cards/card', {params:{id}})
    },
    updateCard(card:UpdateType){
        return instance.put('/cards/card', {card})
    }

}


export type CardResponseType = {
    cards: Array<CardsType>,
    packUserId: string,
    page: number,
    pageCount: number,
    cardsTotalCount: number,
    minGrade: number,
    maxGrade: number,
    token: string,
    tokenDeathTime: number
}
export type CardsType = {
    answer: string,
    question: string,
    cardsPack_id: string,
    grade: number,
    rating: number,
    shots: number,
    type: string,
    user_id: string,
    created: string,
    updated: string,
    __v: number,
    _id: string
}
export type NewCardType = {
    cardsPack_id: string,
    question?: string,
    answer?: string,
    grade?: 0|1|2|3|4|5,
    shots?: number,
    rating?: number,
    answerImg?: string,
    questionImg?: string,
    questionVideo?: string,
    answerVideo?: string,
    type?: string
}
export type UpdateType = {
    _id: string,
    question?: string,
    comments?: string
}
