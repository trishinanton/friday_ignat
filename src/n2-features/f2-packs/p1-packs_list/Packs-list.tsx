import Input from '@mui/material/Input';
import Button from "@mui/material/Button";
import style from './PacksList.module.scss'
import SuperDoubleRange from "./SuperDoubleRange";
import {ChangeEvent, ChangeEventHandler, useEffect, useState} from "react";
import {
    createPackTC,
    deletePackTC,
    packsListTC, setPageCountAC,
    setStartValueAC,
    updatePackTC
} from "../../../n1-main/m2-bll/packs_list-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../n1-main/m2-bll/b1-srore/redux-store";
import {UserData} from "../api/packs-api";
import Pagination from '@mui/material/Pagination';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import {PATH} from "../../../n1-main/m1-ui/routes/Routes";
import {NavLink} from "react-router-dom";

export const PacksList = () =>{


    const dispatch = useDispatch()
    const packs = useSelector<AppRootStateType,Array<UserData>>(state=> state.packs_list.response)
    const idUser = useSelector<AppRootStateType,string>(state=> state.app.user_id)
    const pageCount  = useSelector<AppRootStateType,string | undefined>(state=>state.packs_list.pageCount)

    const cardsPack = {}
   const [myPacks, setMyPacks] = useState(false)

    const [sortPacks,setSortPacks] = useState('')
    const [filterUpdate,setFilterUpdate] = useState(false)
    const styleArrowUp = filterUpdate ? { background: "#1976D2" } : {}
    const styleArrowDown = filterUpdate ? {} : { background: "#1976D2" }
    const changeFilterUpdateUp = ()=>{
        setFilterUpdate(true)
        setSortPacks('0updated')
        dispatch(setStartValueAC(packName,min,max,sortPacks,page,pageCount))
    }
    const changeFilterUpdateDown = ()=>{
        setFilterUpdate(false)
        setSortPacks('1updated')
        dispatch(setStartValueAC(packName,min,max,sortPacks,page,pageCount))
    }

    const [filterName, setFilterName] = useState(false)
    const styleNameUp = filterName ? { background: "#1976D2" } : {}
    const styleNameDown = filterName ? {} : { background: "#1976D2" }
    const changeFilterNameUp = ()=>{
        setFilterName(true)
        setSortPacks('0name')
        dispatch(setStartValueAC(packName,min,max,sortPacks,page,pageCount))
    }

    const changeFilterNameDown = ()=>{
        setFilterName(false)
        setSortPacks('1name')
        dispatch(setStartValueAC(packName,min,max,sortPacks,page,pageCount))
    }


    const getPacks = ()=>{
        setMyPacks(false)
        console.log(myPacks)
    }
    const getMyPacks = ()=>{
        setMyPacks(true)
        console.log(myPacks)
    }

    const [packName,setPackName] = useState('')
    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) =>{
        setPackName(event.target.value);
        dispatch(setStartValueAC(packName,min,max,sortPacks,page,pageCount))
    }

    const [min, setMin] = useState(15)
    const [max, setMax] = useState(78)
    const changeValue = (value:[number,number]) =>{
        setMin(value[0])
        setMax(value[1])
    }

    const [page, setPage] = useState(1);
    const handleChange = (event: ChangeEvent<unknown>, value: number) => {
        setPage(value);
        dispatch(setStartValueAC(packName,min,max,sortPacks,page,pageCount))
    };

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
    const handleChangeSelect = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setStartValueAC(packName,min,max,sortPacks,page,event.target.value))
    };

    const cardsPackUpdate = {_id:'617581e2078d82123090325a', name:'Anton Trishin'}
    useEffect(()=>{
        // myPacks ? dispatch(packsListTC(idUser)): dispatch(packsListTC())
        dispatch(packsListTC(idUser))
    },[packName,min,max,sortPacks,page,pageCount,myPacks])

    return(
        <div className={style.wrapper}>
            <div className={style.show}>
                <h3>Show packs cards</h3>
                <div className={style.buttons}>
                    <Button onClick={getMyPacks} sx={{marginRight:'10px'}} variant="contained" size="small">
                        My
                    </Button>
                    <Button onClick={getPacks} variant="outlined" size="small">
                        All
                    </Button>
                </div>
                <SuperDoubleRange  onChangeRange={changeValue} value = {[min,max]}/>
            </div>
            <div className={style.list}>
                <h1>Packs list</h1>
                <div className={style.input}>
                    <Input sx={{width:'100%'}} placeholder="Search..." value={packName} onChange={handleChangeInput} />
                    <Button sx={{marginLeft:'30px', fontSize: '15px'}} variant="contained" onClick={()=>dispatch(createPackTC(cardsPack))}>Add new pack</Button>
                    <Button onClick={()=>dispatch(deletePackTC('617581e2078d82123090325a'))}>Delete Pack</Button>
                    <Button onClick={()=>dispatch(updatePackTC(cardsPackUpdate))}>Update Pack</Button>
                </div>
                <div className={style.table}>
                    <div className={style.table_title}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                        <div>Name</div>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <button onClick={changeFilterNameUp} style={styleNameUp}>/\</button>
                            <button onClick={changeFilterNameDown} style={styleNameDown}>\/</button>
                        </div>
                        </div>
                        <div>Cards</div>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <div>Last Updated</div>
                            <div style={{display:'flex', flexDirection:'column'}}>
                                <button onClick={changeFilterUpdateUp} style={styleArrowUp}>/\</button>
                                <button onClick={changeFilterUpdateDown} style={styleArrowDown}>\/</button>
                            </div>

                        </div>

                        <div>Created by</div>
                        <div>Actions</div>
                    </div>
                    {packs.map(p=>{
                        return(
                            <div key={p._id} className={style.table_description}>
                                <div className={style.name}>{p.name}</div>
                                <div className={style.cards}>{p.cardsCount}</div>
                                <div className={style.lastUpdated}>{p.updated}</div>
                                <div className={style.createdby}>{p.user_name}</div>
                                <div className={style.card_button}>
                                    <Button size="small" variant="outlined" color="error">
                                        Delete
                                    </Button>
                                    <Button size="small" variant="outlined">Small</Button>
                                    <Button size="small" variant="outlined">
                                        {/*<NavLink to={`/cards/${p._id}`}>card</NavLink>*/}
                                        <NavLink to={'/cards/617997f7bd19452bf8a9a500'}>card</NavLink>

                                    </Button>
                                </div>
                        </div>
                        )
                    })}
                </div>
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
    )
}
