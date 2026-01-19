import React from "react";
import UserContext from "./UserContext";
import { use } from "react";

const UserContextProvider = ({children}) =>{
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;