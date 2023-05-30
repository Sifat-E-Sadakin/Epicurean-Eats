import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../Firebase/Firebase.config';
export let userAuth = createContext(null)

const UserProvider = ({children}) => {

    let [user, setUser]= useState(null)
    let [loading, setLoading] = useState(true)

    const auth = getAuth(app);

    const googleProvider = new GoogleAuthProvider();


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

    let update = (name , photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo,
        })
    }

    let google = ()=>{
        return signInWithPopup(auth, googleProvider)
    }




    let userInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        update,
        google
    }

    return (
        <userAuth.Provider value={userInfo}>
            {children}
        </userAuth.Provider>
    );
};

export default UserProvider;