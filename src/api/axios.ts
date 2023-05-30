import axios from "axios"

export const API_URL = "veterans.onrender.com//api"

const getContentType = () => ({
    "Content-type": "application/json"
})

export const axiosConfig = axios.create({
    baseURL: API_URL,
    headers: getContentType()
})