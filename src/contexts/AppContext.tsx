import { createContext, useState, useEffect, ReactNode } from "react";
import { api } from "../services/api";

import { dateRandom } from "../utilities";

import { UserType } from "../types/userType";

type AppContextProps = {
    children: ReactNode;
}

type AppContextType = {
    users: UserType[] | undefined;
    setUsers: (newState: UserType[]) => void;
    filteredUsers: UserType[] | undefined;
    setFilteredUsers: (newState: UserType[] | undefined) => void;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppContextProvider = ({children}: AppContextProps) => {
    const [users, setUsers] = useState<UserType[] | undefined>()
    const [filteredUsers, setFilteredUsers] = useState<UserType[]>()

    
    //Chamada da API e obtenção dos usuários
    useEffect(() => {
        const fetchApi = async () => {
            const response = await api.get('/users')
            let list = response.data.map((user: UserType) => {
                return {
                    ...user,
                    date: dateRandom()
                }
            })
            setUsers(list)
        }
        fetchApi()
    }, [])

    //Chamada da API e obtenção dos usuários


    return (
        <AppContext.Provider value={{users, setUsers, filteredUsers, setFilteredUsers}}>
            {children}
        </AppContext.Provider>
    )
}

