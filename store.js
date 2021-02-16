import React, { createContext, useContext, useState } from "react";

export const StoreContext = createContext([]);

export const withStore = UnComposedComponent => {
    return function DCMStoreComponent(props) {
        const [isSignedIn,setIsSignedIn] = useState(false);
        const [email,setEmail] = useState('')
        const [password,setPassword] = useState('')

        const login =(email,password) =>{
            setIsSignedIn(true);
        }

        return (
            <StoreContext.Provider
                value={{
                    email,
                    setEmail,
                    password,
                    setPassword,
                    isSignedIn,
                    setIsSignedIn,
                    login
                }}
            >
                <UnComposedComponent {...props} />
            </StoreContext.Provider>
        );
    };
};

export const useStore = () => useContext(StoreContext);
