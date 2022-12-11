import React,{ useContext, useState } from "react";
import { query, collection , onSnapshot , setDoc ,doc } from 'firebase/firestore';
import db from "../firebase";

const AppContext=React.createContext();

const AppProvider = ({children}) =>{
    const [notes,setNotes]=useState([]);
    const [editId,setEditId]=useState(null);
    const [edit,setEdit]=useState(false);
      const [inputTask,setInputTask]=useState({
    task:'',
    category:'',
    duration:''
  });


  const addNotes = async(e) => {
    const newId=new Date().getTime().toString();
    if(inputTask.task){
      await setDoc(doc(db,'notes',newId),{
            task: inputTask.task,
            category: inputTask.category,
            duration: inputTask.duration,
            id: newId
        })
        setInputTask({
            task:'',
            category:'',
            duration:''
         });
        setNotes(inputTask);
        }

        if(edit){
            
        }

    }

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
        setEdit,
        addNotes,
        inputTask,
        setInputTask
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext);
}

export {AppProvider};