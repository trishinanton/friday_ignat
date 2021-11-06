import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCardTC} from "../../../n1-main/m2-bll/card-reducer";
import {useParams} from "react-router-dom";
import {AppRootStateType} from "../../../n1-main/m2-bll/b1-srore/redux-store";
import {CardsType} from "../p2-card/api/card-api";
import {setGradeTC} from "../../../n1-main/m2-bll/learn-reducer";

export const Learn = ()=>{

    const {id}  = useParams<{id:string}>();
    const cards = useSelector<AppRootStateType,Array<CardsType & {editSpan:boolean, editSpanAnswer:boolean}>>(state=>state.card.cards)
    // const cards = [
    //     {
    //         id: 1,
    //         answer: "answer JS",
    //         question: "question JS",
    //         grade: 4,
    //     },
    //     {
    //         id: 2,
    //         answer: "answer Python",
    //         question: "question Python",
    //         grade: 1,
    //     },
    //     {
    //         id: 3,
    //         answer: "answer Angular",
    //         question: "question Angular",
    //         grade: 2,
    //     }
    //
    // ]
    // type cardsType = {
    //     id: number,
    //     answer: string,
    //     question: string,
    //     grade: number,
    // }
    const dispatch = useDispatch()
    const [card, setCard] = useState<CardsType | null>(null )
    const [showAnswer, setShowAnswer] = useState(false)
    const [grade, setGrade] = useState<number|null>(null)

    const getCard = (cards:CardsType[]) => {
        const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
        const rand = Math.random() * sum;
        const res = cards.reduce((acc: { sum: number, id: number}, card, i) => {
                const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
                return {sum: newSum, id: newSum < rand ? i : acc.id}
            }
            , {sum: 0, id: -1});
        console.log('test: ', sum, rand, res)

        return cards[res.id + 1];
    }

    const changeCard = ()=>{
        setCard(getCard(cards))
        setShowAnswer(false)
    }
    const changeGrade = (grade:number)=>{
        setGrade(grade)
        setShowAnswer(false)
        setCard(getCard(cards))
        dispatch(setGradeTC(grade,id))
    }



    useEffect(()=>{
        dispatch(getCardTC(id))
    },[])

    useEffect(()=>{
        if (cards){
            const oneCard = getCard(cards)
            setCard(oneCard)
        }
    },[cards])

    return(
        <div>
           <h1>LearnPage</h1>
            <div>{card && card.question}</div>
            <button onClick={()=>setShowAnswer(true)}>check</button>
            {showAnswer &&
            <div>
                <div>{card && card.answer}</div>
                <button onClick={()=>changeGrade(1)}>не знал</button>
                <button onClick={()=>changeGrade(2)}>забыл</button>
                <button onClick={()=>changeGrade(3)}>долго думал</button>
                <button onClick={()=>changeGrade(4)}>перепутал</button>
                <button onClick={()=>changeGrade(5)}>знал</button>
                <button onClick={changeCard}>next</button>
            </div>

            }
            {/*{cards.map(c=>{*/}
            {/*    return(*/}
            {/*        <div key={c.id}>*/}
            {/*            <div>{c.question}</div>*/}
            {/*            <button>check</button>*/}
            {/*        </div>*/}
            {/*    )*/}
            {/*})}*/}
        </div>
    )
}