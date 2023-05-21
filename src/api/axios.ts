import axios from "axios"

export const API_URL = "http://localhost:1000/api"

const getContentType = () => ({
    "Content-type": "application/json"
})

export const axiosConfig = axios.create({
    baseURL: API_URL,
    headers: getContentType()
})