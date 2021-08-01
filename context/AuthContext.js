import React, {createContext, useContext, useState } from 'react';
import { useGlobalContext } from './GlobalContext';
import { FaCheckCircle, FaPoop } from 'react-icons/fa';
import { useHistory, useLocation } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const AUTH_SIGNIN = 'http://buecherregal.herokuapp.com/auth/signin/';
  const [isTabLeft, setIsTabLeft] = useState(true);
  const [email, setEmail] =useState('')
  const [password, setPassword] =useState('')
  const { API_USERS, setIsUserLoggedIn, setAlert, setLoading, setUserId, setUserName, setJwt } =
    useGlobalContext();
  // const forwardPage = useHistory();
  // const { state } = useLocation();

  // // POST registriere neuen User im Backend / logge User ein (Backend)
  const signInUser = async (url, tryLogin) => {
    try {
      setLoading(true);
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          email: "lassejantsch@web.de",
          password: "!qW2AyXs"
        }),
      });
      if (res.ok) {
        
        const userData = await res.json();
        setLoading(false);
        if (tryLogin) {
          setUserId(userData.user._id)
          setUserName(userData.user.name)
          setJwt(userData.token)

          // sessionStorage.setItem('id', userData.user._id);
          // sessionStorage.setItem('name', userData.user.name);
          // sessionStorage.setItem('token', userData.token);
          setIsUserLoggedIn(true)
        } else {
          setAlert({
            display: true,
            //icon: <FaCheckCircle />,
            msg: 'Du bist registriert! Logge dich nun ein!',
          });
          setEmail("")
          setPassword("");
          setIsTabLeft(true);
        }
      } else {
        console.log(Fehler)
        throw new Error('Hoppala, da ist wohl was schief gelaufen...');
      }
    } catch (error) {
      console.log('errrorrrrr', error);
      setLoading(false);
      setAlert({
        display: true,
        //icon: <FaPoop />,
        msg: 'Das hat leider nicht geklappt',
      });
      setEmail("")
      setPassword("");
    }
  };

  // logge den User ein (UI)
  const loginNow = (e) => {
    e.preventDefault();
    signInUser(AUTH_SIGNIN, isTabLeft);
  };

  // registriere den User
  const signupNow = (e) => {
    e.preventDefault();
    signInUser(API_USERS);
  };

  // speichere states und functions in Variable
  const authValues = {
    AUTH_SIGNIN,
    isTabLeft,
    setIsTabLeft,
    //userCredential,
    //setUserCredential,
    //checkSigninInput,
    loginNow,
    signupNow,
    setEmail,
    setPassword
  };

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
