import Input from "@mui/material/Input";
// import style from 'Card.module.scss'
import s from '../p1-packs_list/PacksList.module.scss'
import Button from "@mui/material/Button";
import {NavLink} from "react-router-dom";
import {ChangeEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../n1-main/m2-bll/b1-srore/redux-store";
import {CardsType} from "./api/card-api";
import { useParams } from 'react-router-dom'
import {
    createCardTC, deleteCardTC,
    getCardTC,
    setCardAnswerAC,
    setCardQuestionAC, setEditSpan, setEditSpanAnswerAC,
    setFilterAC, setPageAC, setShowNumberAC, setUpdateAnswerAC, setUpdateQuestionAC, updateCardTC
} from "../../../n1-main/m2-bll/card-reducer";
import style from "../p1-packs_list/PacksList.module.scss";
import Pagination from "@mui/material/Pagination";
import {setStartValueAC} from "../../../n1-main/m2-bll/packs_list-reducer";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

export const Card = ()=>{
    console.log('card')

    const cards = useSelector<AppRootStateType,Array<CardsType & {editSpan:boolean, editSpanAnswer:boolean}>>(state=>state.card.cards)
    const dispatch = useDispatch()
    const pageCount = useSelector<AppRootStateType, number>(state=>state.card.showNumber).toString()
    const [page, setPage] = useState(1);
    const currencies = [
        {
            value: '2',
            label: '2',
        },
        {
            value: '3',
            label: '3',
        },
        {
            value: '4',
            label: '4',
        },
        {
            value: '5',
            label: '5',
        },
    ];
    // const [pageCount, setPageCount] = useState('5');
    const handleChange = (event: ChangeEvent<unknown>, value: number) => {
        setPage(value);
        dispatch(setPageAC(page))
    };
    const handleChangeSelect = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setShowNumberAC(+event.target.value))
    };

    const {id}  = useParams<{id:string}>();
    const [filter, setFilter] = useState('')
    const [questionName,setQuestionName] = useState('')
    const [answerName, setAnswerName] = useState('')
    const [newQuestion, setNewQuestion] = useState('')
    const [newAnswer, setNewAnswer] = useState('')
    const [updateQuestion, setUpdateQuestion] = useState('')


    const changeFilterUp = ()=>{
        setFilter('0question')
        dispatch(setFilterAC(filter))
    }
    const changeFilterDown = ()=>{
        setFilter('1question')
        dispatch(setFilterAC(filter))
    }

    const handleChangeQuestionName = (event: ChangeEvent<HTMLInputElement>)=>{
        setQuestionName(event.target.value);
    }
    const handleChangeAnswerName = (event: ChangeEvent<HTMLInputElement>)=>{
        setAnswerName(event.target.value);
    }

    const searchQuestion = ()=>{
        dispatch(setCardQuestionAC(questionName))
        dispatch(getCardTC(id))
    }
    const searchAnswer = ()=>{
        dispatch(setCardAnswerAC(answerName))
        dispatch(getCardTC(id))
    }

    const handleChangeNewQuestion = (event: ChangeEvent<HTMLInputElement>)=>{
        setNewQuestion(event.target.value);
    }
    const handleChangeNewAnswer = (event: ChangeEvent<HTMLInputElement>)=>{
        setNewAnswer(event.target.value);
    }

    const addNewCard = ()=>{
        dispatch(createCardTC(id,newQuestion,newAnswer))
    }

    const changeEditSpan = (_id:string) =>{
        dispatch(setEditSpan(_id))
    }
    const setValueQuestion = (_id:string,e:any) =>{
        const newQuestion=e.target.value
        setUpdateQuestion(newQuestion)
        dispatch(setUpdateQuestionAC(newQuestion,_id))

    }
    const sendUpdateQuestion = (_id:string)=>{
        dispatch(setEditSpan(_id))
        dispatch(updateCardTC(updateQuestion,_id,id))
    }

    const deleteCard = (idCard:string)=>{
        dispatch(deleteCardTC(idCard, id))
    }


    useEffect(()=>{
        dispatch(getCardTC(id))
    },[id,filter,pageCount,page])

    return(
        <div className={s.card}>
            <div className={s.input}>
                <Input value={questionName} onChange={handleChangeQuestionName}  placeholder="Search question..." />
                <Button onClick={searchQuestion}  variant="contained" size="small">Search question</Button>
                <Input value={answerName} onChange={handleChangeAnswerName} sx={{marginLeft:'20px'}} placeholder="Search answer..." />
                <Button onClick={searchAnswer} variant="contained" size="small">Search answer</Button>
            </div>

            <div className={s.table}>
                <div className={s.table_title}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div>Question</div>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <button onClick={changeFilterUp}>/\</button>
                            <button onClick={changeFilterDown} >\/</button>
                        </div>
                    </div>
                    <div>Answer</div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div>Last Updated</div>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <button onClick={changeFilterUp}>/\</button>
                            <button onClick={changeFilterDown}>\/</button>
                        </div>

                    </div>

                    <div>Grade</div>
                    <div>Actions</div>
                </div>
                {cards.map(c=>{
                    return(
                        <div key={c._id} className={s.table_description}>
                            {c.editSpan
                                ? <input type="text" value={c.question} onChange={(e:any)=>setValueQuestion(c._id,e)} onBlur={()=>sendUpdateQuestion(c._id)} autoFocus />
                                : <div className={s.name} onDoubleClick={()=>changeEditSpan(c._id)}>{c.question}</div>}

                            <div className={s.cards}>{c.answer}</div>
                            <div className={s.lastUpdated}>{c.updated}</div>
                            <div className={s.createdby}>{c.grade}</div>
                            <div className={style.card_button}>
                                <Button onClick={()=>deleteCard(c._id)} size="small" variant="outlined" color="error">
                                    Delete
                                </Button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={style.footer}>
                <div className={style.search}>
                    <Input value={newQuestion} onChange={handleChangeNewQuestion} placeholder="question..." />
                    <Input value={newAnswer} onChange={handleChangeNewAnswer} sx={{marginLeft:'20px'}} placeholder="answer..." />
                    <Button onClick={addNewCard} variant="contained" size="small">Add card</Button>
                </div>
                <div className={style.pagination}>
                    <Pagination sx={{alignSelf: 'flex-end', marginTop: '20px'}} count={10} color="primary" onChange={handleChange} page={page}/>
                    <TextField
                        sx={{width: '100px'}}
                        id="outlined-select-currency"
                        select
                        label="Select"
                        value={pageCount}
                        onChange={handleChangeSelect}
                        helperText="Show cards"
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
            </div>

        </div>
    )
}