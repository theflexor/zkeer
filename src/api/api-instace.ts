import axios from "axios"

export const api = axios.create({
  baseURL: "http://176.126.166.239:8000/api/",
})
