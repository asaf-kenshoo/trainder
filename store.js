import React, { createContext, useContext, useState } from "react";
import firebase from "./firebase.js";
const db = firebase.database();

export const StoreContext = createContext([]);

const StateProvider = ({ children }) => {
        const [isSignedIn,setIsSignedIn] = useState(true);
        const [username,setUsername] = useState('');
        const [score, setScore] = useState('');

        const login =(username,password) =>{
            db.ref().child("users").child(username).once('value',
                function(snapshot) {
                    if (snapshot.exists()) {
                        if(snapshot.val().password === password){
                            setUsername(username);
                            setScore(snapshot.val().score);
                            setIsSignedIn(true);
                        }
                        else {
                            console.log("username and password do not match");
                        }
                    }
                    else {
                        console.log("username: " + username + " does not exist");
                    }
                })
                .catch(function(error) {
                    console.error(error);
                });
        };

        const signUp =(username,password) => {
            db.ref().child("users").child(username).once('value',
                function(snapshot) {
                    if (snapshot.exists()) {
                        console.log("username already exists!")
                    }
                    else {
                        db.ref('users/' + username)
                            .set({
                                password: password,
                                score: 0,
                            });
                        console.log("added new user:" + username);
                        setUsername(username);
                        setScore(0);
                        setIsSignedIn(true);
                    }
                })
                .catch(function(error) {
                    console.error(error);
                });
        };

        return (
            <StoreContext.Provider
                value={{
                    username,
                    setUsername,
                    score,
                    setScore,
                    isSignedIn,
                    setIsSignedIn,
                    login,
                    signUp
                }}
            >
                {children}
            </StoreContext.Provider>
        );
};
export default StateProvider;
export const useStore = () => useContext(StoreContext);
