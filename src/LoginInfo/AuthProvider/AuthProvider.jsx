import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase.config';
import axios from 'axios';

const auth = getAuth(app)

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true) 
    
    const googleLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
     }
    
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
  
     }

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
     }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
     } 

     useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            
            setUser(currentUser)
            setLoading(false)

            if(currentUser){
                axios.post('http://localhost:5000/jwt',{email: currentUser.email})
                .then(data =>{
                    console.log(data.data.token)
                    localStorage.setItem('access-token',data.data.token)
                })
            }
            else{
                localStorage.removeItem('access-token')
            }

        })
        return () => {
            return unSubscribe()
         }
    }, [])
    
    const authInfo = {
        user,
        loading,
        googleLogIn,
        createUser,
        logIn,
        logOut,
    }

   
 
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;