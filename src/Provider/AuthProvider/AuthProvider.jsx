import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";

const AuthProviderInfo = createContext();
const ComponentProvider = createContext();
import { toast } from "react-toastify";
import app from "../../../firebase.config";


const AuthProvider = ({ children }) => {
  // important state declare
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [chefsData, setChefsData] = useState([]);
  const [isShowPass, setShowPass] = useState(false);
  const auth = getAuth(app);
  const GithubProvider = new GithubAuthProvider();
  const GoogleProvider = new GoogleAuthProvider();

  // create new user with email password
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login  user with email password
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //user password reset email
  const passwordReset = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  // user logout
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  //show toast alert
  const Toast = (text) => {
    toast(text, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  // user github login
  const handleGithubLogin = () => {
    setLoading(true);
    signInWithPopup(auth, GithubProvider)
      .then((result) => {
        Toast("Github Login Successfully");
      })
      .catch((error) => {
        console.error(error.code);
      });
  };

  // user google login
  const handleGoogleLogin = () => {
    setLoading(true);
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        Toast("Google Login Successfully");
      })
      .catch((error) => {
        console.error(error.code);
      });
  };

  // load chef data form server
  useEffect(() => {
    fetch("https://food-reciepe-server.vercel.app/chef/")
      .then((res) => res.json())
      .then((data) => setChefsData(data));
  }, []);

  // user state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currenUser) => {
      setUser(currenUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createNewUser,
    userLogin,
    passwordReset,
    loading,
    logOutUser,
    handleGithubLogin,
    handleGoogleLogin,
    Toast,
    isShowPass,
    setShowPass,
  };

  return (
    <AuthProviderInfo.Provider value={authInfo}>
      <ComponentProvider.Provider value={{ chefsData }}>
        {children}
      </ComponentProvider.Provider>
    </AuthProviderInfo.Provider>
  );
};

export default AuthProvider;
export { AuthProviderInfo, ComponentProvider };
