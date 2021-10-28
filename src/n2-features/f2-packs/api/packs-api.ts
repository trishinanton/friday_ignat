import axios, {AxiosResponse} from 'axios'

const instance = axios.create({
    // baseURL: 'http://localhost:7542/2.0/',
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true
})

export const packsApi = {
    getPacks(packName?: string|null,min?: number, max?:number,sortPacks?:any,page?: number,pageCount?: string,user_id?: string) {
        return instance.get<{ params:{min?: number, max?:number,sortPacks?:any,page?: number,pageCount?: number,user_id?: string} }, AxiosResponse< SuccessResponseType >>('cards/pack', {params:{packName,min,max,sortPacks,page,pageCount,user_id}});
    },
    createPack(cardsPack:Object){
        return instance.post('cards/pack',{cardsPack})
    },
    deletePack(id:string){
        return instance.delete('cards/pack',{params:{id}})
    },
    updatePack(cardsPack:{_id:string,name?: string}){
        return instance.put('cards/pack', {cardsPack})
    }
}

export type UserData = {
    _id: string,
    user_id: string,
    user_name: string,
    private: boolean,
    name: string,
    path: string,
    grade: number,
    shots: number,
    cardsCount: number,
    type: string,
    rating: number,
    created: string,
    updated: string,
    more_id: string,
    __v: number,
    deckCover: null
}
export type SuccessResponseType = {
    cardPacks: Array<UserData>
}
