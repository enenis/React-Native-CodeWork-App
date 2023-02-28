import React,{useState,useEffect} from 'react'
import axios from 'axios'

function useFetch(url){
    const[data,setData]=useState([])
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState(false)

    const fetchData=async()=>{
        try {
            const{data:responseData}=await axios.get(url)
            setData(responseData)
            setLoading(false)
        } catch (err) {
            setError(err.message)
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])

    return{data,error,loading}
}
export default useFetch