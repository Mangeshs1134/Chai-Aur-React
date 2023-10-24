import { useContext,createContext } from "react";

export const UserContext = createContext()

export const UserProvider = UserContext.Provider

export default function useUserHook(){
    return useContext(UserContext)
}