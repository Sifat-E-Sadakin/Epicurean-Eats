import { useQueries, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

let UseMenu = ()=>{
    // let [menu , setMenu] = useState([]);
    // let [loading, setLoading] = useState(true)

    // useEffect(()=>{
    //     fetch('http://localhost:3000/menu')
    //     .then(res=> res.json())
    //     .then(data=>{
    //         setMenu(data)
    //         setLoading(false)
           
    //     })

      

    // },[])
    let {data: menu = [], isLoading: loading, refetch} = useQuery({
        queryKey : ['menu'],
        queryFn : async ()=>{
            let res = await fetch('http://localhost:3000/menu')
            return res.json();
        }
    })

    return [menu, loading, refetch];
}

export default UseMenu ;