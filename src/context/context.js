import React,{ useContext, useState } from "react";
import { query, collection , onSnapshot } from 'firebase/firestore';
import db from "../firebase";

const AppContext=React.createContext();

const AppProvider = ({children}) =>{
    const [notes,setNotes]=useState([]);
    const [editId,setEditId]=useState(null);
    const [edit,setEdit]=useState(false);

    const fetchNotes=async() =>{
        const q = query(collection(db, "notes"));
        const unsub = onSnapshot(q, (querySnapshot) => {
            const newNote=querySnapshot.docs.map(d => d.data());
            setNotes(newNote);
            console.log();
        });
    }



    
 return <AppContext.Provider value={{
        setNotes,
        notes,
        fetchNotes,
        setEditId,
        setEdit
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext);
}

export {AppProvider};