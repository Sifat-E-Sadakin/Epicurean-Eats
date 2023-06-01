import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { userAuth } from "../Providers/UserProvider";

const useAdmin = () => {

    let {user} = useContext(userAuth)

    const { data : isAdmin, refetch } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async ()=>{
            let res = await fetch(`http://localhost:3000/users/isadmin?email=${user.email}`)

            return res.json()
            
            
        },
        
        
      })

   
    
    return isAdmin
};

export default useAdmin;