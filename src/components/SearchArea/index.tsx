
import { useContext } from 'react';
import {AppContext} from '../../contexts/AppContext';

import { capitalizeString } from '../../utilities';

import {Container, SearchInput, SearchIcon} from './styles';

export const SearchArea = () => {
    const {setSearchText} = useContext(AppContext)

    return (
        <Container>
            <SearchInput
            onChangeText={(text: string) => setSearchText(capitalizeString(text))} />
            <SearchIcon source={require('../../../assets/img/search.png')} />
        </Container>
    );
}