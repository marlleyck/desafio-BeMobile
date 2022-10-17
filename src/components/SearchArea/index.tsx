
import { useContext, useState, useEffect } from 'react';
import {AppContext} from '../../contexts/AppContext';

import {Container, SearchInput, SearchIcon} from './styles';

export const SearchArea = () => {
    const {users, setFilteredUsers} = useContext(AppContext)
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
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
    }, [searchText])

    return (
        <Container>
            <SearchInput
            onChangeText={(text: string) => setSearchText(text)} />
            <SearchIcon source={require('../../../assets/img/search.png')} />
        </Container>
    );
}