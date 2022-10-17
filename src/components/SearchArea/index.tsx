
import { useContext } from 'react';
import {AppContext} from '../../contexts/AppContext';

import {Container, SearchInput, SearchIcon} from './styles';

export const SearchArea = () => {
    const context = useContext(AppContext)
    return (
        <Container>
            <SearchInput />
            <SearchIcon source={require('../../../assets/img/search.png')} />
        </Container>
    );
}