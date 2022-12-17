import React,{ useContext, useState } from "react";
import { query,
         collection ,
         onSnapshot , 
         setDoc , 
         doc , 
         updateDoc ,
         where } from 'firebase/firestore';
import db from "../firebase";

const AppContext=React.createContext();

const AppProvider = ({children}) =>{

     const [startanimate,setStartAnimate]=useState(false);

     const startTimer = () =>{
        setStartAnimate(true);
    }

    const pauseTimer = () =>{
        setStartAnimate(false);
    }

    const stopTimer = () =>{
        setStartAnimate(false);
    }

    










    const [notes,setNotes]=useState([]);
    const [editId,setEditId]=useState(null);
    const [edit,setEdit]=useState(false);
    const [inputTask,setInputTask]=useState({
            task:'',
            category:'',
            duration:''
        });


  const addNotes = async(e) => {
    e.preventDefault();
    const newId=new Date().getTime().toString();
    if(inputTask.task && !edit ){
      await setDoc(doc(db,'notes',newId),{
            task: inputTask.task,
            category: inputTask.category,
            duration: inputTask.duration,
            id: newId
        })
        }

        if(edit && editId){
             const ref = doc(db,'notes',editId);
             await updateDoc(ref,{task:inputTask.task,
                                category:inputTask.category,
                                duration:inputTask.duration }
                )
             }
             setInputTask({
            task:'',
            category:'',
            duration:''
         });
         setEdit(false);
         setEditId('');
    }

    const fetchNotes=async() =>{
        const q = query(collection(db, "notes"));
        const unsub = onSnapshot(q, (querySnapshot) => {
            const newNote=querySnapshot.docs.map(d => d.data());
            setNotes(newNote);
        });
    }

    const searchResult= async(search) =>{
        const q=query(collection(db,'notes'),where("category" , "==" , search));
        const unsub = onSnapshot(q, (querySnapshot) => {
            const newNote=querySnapshot.docs.map(d => d.data());
            setNotes(newNote);
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
        setInputTask,
        startTimer,
        stopTimer,
        pauseTimer,
        searchResult
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext);
}

export {AppProvider};