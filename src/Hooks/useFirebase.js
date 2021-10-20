import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from './../pages/Shared/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase =() => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider);
        
    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {

        })
        .finally(() => setIsLoading(false))
    }

    useEffect( () =>{
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;

    }, [])

    // email password sign in

        const handleEmailChange = e =>{
            setEmail(e.target.value);
        }
        const handleNameChange = e =>{
            setEmail(e.target.value);
        }
        const handleNumberChange = e =>{
            setEmail(e.target.value);
        }
        const handlePasswordChange = e =>{
            setPassword(e.target.value);
        }

        const handleSignUp = e => {
            console.log(email, password)
            e.preventDefault()
            if(password.length <6){
                setError('Password Must be 6 character')
                return
            }
            if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
                setError('password must contain 2 uppercase')
                return
            }
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                setError('');
                verifyEmail()
            })
            .catch((error) => {
                setError (error.message);
            });
        }

        const processLogin =(email, password) =>{
            signInWithEmailAndPassword(auth, email, password)
            .then(result=>{
                const user = result.user;
                console.log(user)
                setError('')
            })
            .catch(error =>{
                setError(error.message)
            })
        }
        const verifyEmail = () =>{
            sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
        }

    return {
        user,
        setUser,
        isLoading,
        logOut,
        signInUsingGoogle,
        // email sign in
        handleEmailChange,
        handleSignUp,
        handlePasswordChange,
        handleNameChange,
        error,
        handleNumberChange,
        setIsLoading
    }
}

export default useFirebase;