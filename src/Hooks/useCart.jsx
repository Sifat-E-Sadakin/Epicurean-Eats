import React from 'react';
import { useContext } from 'react';
import { userAuth } from '../Providers/UserProvider';
import { useQuery } from '@tanstack/react-query'

const useCart = () => {

    let {user} = useContext(userAuth);
    console.log(user);

    const { isLoading, isError, data : cart= [], error, refetch } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async()=>{
            let res = await fetch(`http://localhost:3000/carts?email=${user?.email}`)
            return res.json();
        },
      })

    return [cart, refetch ]
};

export default useCart;