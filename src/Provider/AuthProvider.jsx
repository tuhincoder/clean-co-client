/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../config/firebase.config";
import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, SetLoading] = useState(true)
    const axiosSecure = useAxiosSecure()
    // const axios = useAxiosPublic()

    const googleProvider = new GoogleAuthProvider()

    const googleSignIn = () => {
        SetLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // create user
    const createUser = (email, password) => {
        SetLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login
    const signInUser = (email, password) => {
        SetLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const logOut = () => {
        SetLoading(true)
        return signOut(auth)
    }

    // user Mange
    useEffect(() => {
        const unSubsCribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            SetLoading(false)
            console.log('currentUser', currentUser);
            const userEmail = user?.email || currentUser?.email;
            const loggedUser = { email: userEmail }
            if (currentUser) {
                axiosSecure.post('/auth/access-token', loggedUser)
                    .then(res => {
                        console.log(res.data);
                    })
            }

            else {
                axiosSecure.post('/auth/logout-token', userEmail)
                    .then(res => {
                        console.log(res.data);
                    })
            }
        })

        return () => {
            return unSubsCribe();
        }
    }, [axiosSecure, user])

    const authInfo = {
        user,
        loading,
        createUser,
        googleSignIn,
        signInUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;