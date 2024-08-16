import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const provider = new GoogleAuthProvider();
    const providerGit = new GithubAuthProvider();

    const createUser = (name, email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
    
                // Update the profile with the provided name
                return updateProfile(user, {
                    displayName: name,
                }).then(() => {
                    // Force reload of user data to ensure displayName is updated
                    return auth.currentUser.reload().then(() => userCredential);
                });
            })
            .catch(error => {
                throw error;
            });
    }
    
    
    
    // const createUser = (name, email, photo, password) =>{
    //     return createUserWithEmailAndPassword(auth, name, email, photo, password);
    // }
    
    
    const signInGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }


    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe =
        onAuthStateChanged(auth, currentUser=>{
            // console.log('user in the change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    },[])
    const authInfo ={
        user, 
        loading,
        createUser,
        logOut,
        signIn,
        signInGoogle,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;