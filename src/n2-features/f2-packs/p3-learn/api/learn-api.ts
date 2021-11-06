import axios, {AxiosResponse} from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    // baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true
})

export const LearnApi = {
    setGrade(grade:GradeType){
        return instance.post('/cards/grade', {grade})
    }
}

type GradeType = {
    grade: number,
    card_id: string
}