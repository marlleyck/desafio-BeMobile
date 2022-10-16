import { useEffect, useState } from 'react';
import { api } from '../../services/api';

import { TableHeader } from '../TableHeader';
import { UserRow } from '../UserRow';

import { UserType } from '../../types/userType';

import {FlatList} from './styles';
import { TableMain } from '../TableMain';


export const UsersTable = () => {
    const [users, setUsers] = useState<UserType[] | undefined>()

    useEffect(() => {
        const fetchApi = async () => {
            const response = await api.get('/users')
            let list = response.data.map((user: UserType) => {
                return user
            })
            setUsers(list)
        }
        fetchApi()
    }, [])

    return (
        <>
           <TableHeader />
           <TableMain users={users} />
        </>
    );
}