import React,{ useContext, useState } from "react";

const AppContext=React.createContext();

const AppProvider = ({children}) =>{
    const [note,setNote]=useState([]);
    
    const addNotes = e => {
        e.preventDefault();
    }



    return <AppProvider.Provider value={{
        setNote,
        note,
        addNotes
    }}>
        {children}
    </AppProvider.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext);
}

export {AppProvider};