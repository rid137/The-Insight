import { createContext, useContext, useEffect,useState } from 'react'
import { GoogleAuthProvider, signOut, onAuthStateChanged, signInWithPopup,signInWithRedirect } from 'firebase/auth'
import { auth } from '../../Firebase-config'


const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({})

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        // signInWithPopup(auth, provider)
        signInWithRedirect(auth, provider)
    }

    
    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const manageUserState = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log('user', currentUser)
        })
        return () => {
            manageUserState();
        }
    }, [])

    return (
        <AuthContext.Provider value={{googleSignIn, user, setUser, logOut}}>
            {children}
        </AuthContext.Provider>
    )
}

// UserAuth Function Must Begin With Capital Letter Cos Of useContext Call
export const UserAuth = () => {
    return useContext(AuthContext)
};