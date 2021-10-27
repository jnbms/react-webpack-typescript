// Data Fetch 관련 Hook
import {useState, useEffect} from "react";
import axios from "axios";

export default function useAxios(props){
    const [data,setData] = useState(null);
    useEffect(() => {
        axios.get(props)
            .then(res => setData(res.data))
            .catch(e => console.error(e))
    },[])
    // 완성시 삭제하기
    useEffect(() => console.log(data),[data])
    return data;
}