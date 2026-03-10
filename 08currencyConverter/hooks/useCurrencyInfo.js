import { useEffect,useState } from "react";
// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json

function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        console.log(data)
        // it can also be fetched by
    //      async function fetchData(){
    //     const response = await fetch(`https://.../${currency}.json`)
    //     const json = await response.json()
    //     setData(json[currency])
    // }

    // fetchData()
    },[currency])
    console.log(data);
    return data
    
}
export default useCurrencyInfo