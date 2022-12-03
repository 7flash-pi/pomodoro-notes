import React,{ useContext } from "react";

const AppContext=React.createContext();

const AppProvider = ({children}) =>{



    return <AppProvider.Provider>
        {children}
    </AppProvider.Provider>
}