import axios from 'axios'

const api = 'http://localhost:3000'

export const getExpenses = async() => {
    return await axios.get(`${api}/expenses`)
}

export const createExpense = async(expense) => {
    return await axios.post(`${api}/expenses`, expense)
}

export const updateExpense = async(id, updatedExp) => {
    return await axios.put(`${api}/expenses/${id}`, updatedExp)
}

export const deleteExpense = async(id) => {
    return await axios.delete(`${api}/expenses/${id}`)
}

export const filterExpenses = async(category) => {
    return await axios.get(`${api}/expenses/filter?category=${category}`)
}

export const searchExpenses = async(keyword) => {
    return await axios.get(`${api}/expenses/search?keyword=${keyword}`)
}

export const sortExpenses = async(order) => {
    return await axios.get(`${api}/expenses/sort?order=${order}`)
}




//auth
export const SignUp = async(data)=> {
    const res = await axios.post( `${api}/auth/signup`,data)
    return res.data
}

export const LogIn = async(data)=> {
    const res = await axios.post(`${api}/auth/login`, data)
    return res.data
}