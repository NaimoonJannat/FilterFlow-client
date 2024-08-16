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

    const createUser = (name, email, photo, password) => {
        setLoading(true);
        // Create user
        return createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
    
                // Update the profile with the provided name and photoURL
                return updateProfile(user, {
                    displayName: name,
                    photoURL: photo
                }).then(() => userCredential); // Return userCredential after profile update
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

    const signInGithub = () =>{
        setLoading(true);
        return signInWithPopup(auth, providerGit);
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
        signInGithub
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;