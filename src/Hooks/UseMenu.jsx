import { useEffect, useState } from "react";

let UseMenu = ()=>{
    let [menu , setMenu] = useState([]);
    let [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch('http://localhost:3000/menu')
        .then(res=> res.json())
        .then(data=>{
            setMenu(data)
            setLoading(false)
           
        })

      

    },[])

    return [menu, loading];
}

export default UseMenu ;