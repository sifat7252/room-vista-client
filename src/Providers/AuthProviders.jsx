import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import PropTypes from "prop-types";


export const AuthContext = createContext({});

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // ::: CREATING NEW USER :::
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // ::: SIGN IN WITH EMAIL AND PASSWORD ::::
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // ::: LOG OUT BUTTON HANDLER :::
    const signOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // ::: AUTHENTICATION PROVIDERS :::
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // ::: GOOGLE SIGN IN METHOD :::
    const googleSignIn = (email, password) => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    };

    // ::: GITHUB SIGN IN METHOD :::
    const githubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    };

    // ::: OBSERVE THE AUTH CHANGED :::
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        };
    },[]);

    const userInfo = {user, loading, createUser, signIn, signOut, googleSignIn, githubSignIn};



    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProviders;

AuthProviders.propTypes = {
    children: PropTypes.node,
}