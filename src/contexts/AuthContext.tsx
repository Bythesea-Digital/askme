import React, { createContext, ReactNode, useEffect, useState } from "react";
import { auth, firebase } from "../services/firebaseService";
import { useHistory, useLocation } from "react-router-dom";
import UserEntity from "../models/entity/UserEntity";
import useRoom from "../shared/hooks/useRoom";

type AuthContextType = {
  logInWithGoogle: () => Promise<void>;
  userDetails: UserEntity;
};

export const AuthContext = createContext({} as AuthContextType);

type AuthContextProps = {
  children: ReactNode;
};

export function AuthContextProvider({ children }: AuthContextProps) {
  const history = useHistory();
  const location = useLocation();

  console.log({ location });

  const [userDetails, setUserDetails] = useState({} as UserEntity);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  async function logInWithGoogle() {
    if (!Object.prototype.hasOwnProperty.call(userDetails, "id")) {
      const provider = new firebase.auth.GoogleAuthProvider();

      const result = await auth.signInWithPopup(provider);
      console.log(result);
      if (result.user) {
        setUser(result.user);
      }
    }
    if (location.pathname === "/") {
      history.push("/rooms/new");
    }
  }

  console.log(userDetails);

  function setUser(user: firebase.User) {
    const { displayName, photoURL, uid } = user;

    if (!displayName || !photoURL) {
      throw new Error("Missing User Information");
    }

    setUserDetails({ id: uid, name: displayName, avatar: photoURL });
  }

  return (
    <AuthContext.Provider value={{ logInWithGoogle, userDetails }}>
      {children}
    </AuthContext.Provider>
  );
}
