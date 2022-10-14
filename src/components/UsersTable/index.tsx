import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Text} from 'react-native';

import { TableHeader } from '../TableHeader';

import { UserType } from '../../types/userType';

import {Container, FlatList, ListContainer, UsersContainer} from './styles';

export const UsersTable = () => {
    const [users, setUsers] = useState<UserType[] | undefined>()

    useEffect(() => {
        const fetchApi = async () => {
            const response = await api.get('/users')
            let list = response.data.map((user: UserType) => {
                return user
            })
            setUsers(list)
            console.log('users', users)
        }
        fetchApi()
    }, [])

    return (
        <Container>
            <TableHeader />
           <ListContainer>
                <FlatList
                data={users}
                keyExtractor={(item: UserType) => item.id}
                renderItem={({item}: {item: UserType}) => 
                    <UsersContainer>
                        <Text>{item.name}</Text>
                    </UsersContainer>
                }
                />
           </ListContainer>
        </Container>
    );
}