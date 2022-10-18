
import { useContext } from 'react';
import {AppContext} from '../../contexts/AppContext';

import { capitalizeString } from '../../utilities';

import {Container, SearchInput, SearchIcon} from './styles';

export const SearchArea = () => {
    const {setSearchText} = useContext(AppContext)

    const handleSetSearchText = (text: string) => {
        const capitalizedString = capitalizeString(text)
        setSearchText(capitalizedString)
    }

    return (
        <Container>
            <SearchInput
            onChangeText={handleSetSearchText} />
            <SearchIcon source={require('../../../assets/img/search.png')} />
        </Container>
    );
}