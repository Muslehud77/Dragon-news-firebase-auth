import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from './../Firebase/firebase.config';

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()



const AuthProvider = ({children}) => {
    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true)
   
  
    
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const githubSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth,githubProvider)
    }

    const emailRegister = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const emailSignIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })

        return ()=> unSubscribe()
    },[])


const authInfo = {
  user,
  loading,
  googleSignIn,
  githubSignIn,
  emailRegister,
  emailSignIn,
  logOut
 
};


    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children : PropTypes.node
};


export default AuthProvider;







