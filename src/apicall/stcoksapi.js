import axios from 'axios'

export const getStocks=async()=>{
    const res=await axios.get("http://localhost:4000/stocks");
    return res.data
}