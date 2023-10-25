import { useContext,createContext } from "react";

export const UserContext = createContext()

export const UserProvider = UserContext.Provider 

export default function useUserContextHook() {

    return useContext(UserContext)
    
    
}

