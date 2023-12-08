import { useState, useEffect, useCallback } from "react"
export const useFetch = (initial=null)=>{
    const [url, setURL] = useState(initial)
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzQ4ZWQ3MWVlNjUxYmQ5MDlkMzI1YzA2YTBiZGIyYSIsInN1YiI6IjY1NzA5MTE0NzlhMWMzMDBmZTc4MGM3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qSqTWZJxPAygGkv39nR6Lmm-7l58qvVN9VU216bI0no'
        }
      };
    useEffect(useCallback(()=>{
        const controller = new AbortController();
        const signal = controller.signal
        setLoading(true);
        fetch(url, options, signal)
        .then(res=>{
            if(res.status===200)
                return res.json()
            else
                return Promise.reject("Error Fetching Data")
        }).then(data=>setData(data))
        .catch(err=>setError(err))
        .finally(()=>setLoading(false));
        return ()=>{controller.abort()}
    }),[url, initial])
    return [setURL,data,loading,error] 
}