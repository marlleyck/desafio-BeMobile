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
    setSearchText: (newState: string) => void;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppContextProvider = ({children}: AppContextProps) => {
    const [users, setUsers] = useState<UserType[] | undefined>()
    const [apiArrived, setApiArrived] = useState(false)
    const [filteredUsers, setFilteredUsers] = useState<UserType[]>()
    const [searchText, setSearchText] = useState('')

    
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
            setApiArrived(true)
        }
        fetchApi()
    }, [])

    //Função que filtra a lista de usuários de acordo com a pesquisa do input
    useEffect(() => {
        if (users != undefined) {
            if (searchText === '') {
                setFilteredUsers(users)
            } else {
                setFilteredUsers(
                    users?.filter((item) => {
                        if (item.name.indexOf(searchText) > -1 
                        || item.stack.indexOf(searchText) > -1 
                        || item.phone.indexOf(searchText) > -1) {
                            return true;
                        } else {
                            return false;
                        }
                    })
                )
            }
        }
    }, [searchText, apiArrived])


    return (
        <AppContext.Provider value={{users, setUsers, filteredUsers, setFilteredUsers, setSearchText}}>
            {children}
        </AppContext.Provider>
    )
}

