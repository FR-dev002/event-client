import React, { createContext, useReducer } from "react";
import { AuthReducer } from "./../Reducers/Authreducer";
import LocalStorage from "./../helpers/localStorage";
export const AuthContext = createContext();

const AuthContextProvider = props => {
  
  // set auth reducers
  const [isLogged, dispatch] = useReducer(AuthReducer, false, () => {
    const { expiredToken } = LocalStorage();
    return expiredToken();
  });

  return (
    <AuthContext.Provider value={{ isLogged, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
