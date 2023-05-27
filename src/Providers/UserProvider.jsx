import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';
export let userAuth = createContext(null)

const UserProvider = ({children}) => {

    let [user, setUser]= useState(null)
    let [loading, setLoading] = useState(true)

    const auth = getAuth(app);

    let createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        let unsubscribe = onAuthStateChanged(auth, user=>{
            console.log(user);
            setUser(user);
            setLoading(false);
        })

        return ()=>{
            unsubscribe();
        }
    },[])

    let signIn =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    let logOut = () =>{
        signOut(auth)
    }


    let userInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    }

    return (
        <userAuth.Provider value={userInfo}>
            {children}
        </userAuth.Provider>
    );
};

export default UserProvider;