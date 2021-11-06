import {Dispatch} from "redux";
import {LearnApi} from "../../n2-features/f2-packs/p3-learn/api/learn-api";

export const setGradeTC = (grade:number, card_id: string) => (dispatch:Dispatch)=>{
    LearnApi.setGrade({grade,card_id})
}