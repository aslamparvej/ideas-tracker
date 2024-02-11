import { createContext, useContext, useState, useEffect } from "react";
import { ID } from "appwrite";

import { account } from "../appwrite";

// Create user context
const userContext = createContext();

// Custom hook to use userContext
export function useUser() {
  return useContext(userContext);
}

// Create context provider
export function UserProvider(props) {
  // User state
  const [user, setUser] = useState(null);

  async function login(email, passsword) {
    try {
      const loggedIn = await account.createEmailSession(email, passsword);
      setUser(loggedIn);
      sessionStorage.setItem("current", JSON.stringify(loggedIn));
    } catch (error) {
      console.log("Something is wrong to login", error);
    }
  }

  async function logout() {
    try {
      await account.deleteSession("current");
      setUser(null);
      sessionStorage.setItem("current", null);
    } catch (error) {
      console.log("Something is wrong to logout", error);
    }
  }

  async function register(email, passsword, name) {
    try {
      await account.create(ID.unique(), email, passsword, name);
      await login(email, passsword);
    } catch (error) {
        console.log("Something is wrong to register an user", error);
    }
  }

  async function init() {
    try {
      const loggedIn = await account.get();
    } catch (error) {
      console.log("Error in user context", error);
      setUser(null);
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <userContext.Provider value={{ current: user, login, logout, register }}>
      {props.children}
    </userContext.Provider>
  );
}
