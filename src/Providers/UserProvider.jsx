import React, { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/Firebase.config';
export let userAuth = createContext(null)

const UserProvider = ({children}) => {

    let [user, setUser]= useState('sifat')

    const auth = getAuth(app);

    let createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    let userInfo = {
        createUser
    }

    return (
        <userAuth.Provider value={userInfo}>
            {children}
        </userAuth.Provider>
    );
};

export default UserProvider;