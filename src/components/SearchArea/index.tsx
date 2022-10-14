import {Container, SearchInput, SearchIcon} from './styles';

export const SearchArea = () => {
    return (
        <Container>
            <SearchInput />
            <SearchIcon source={require('../../../assets/img/search.png')} />
        </Container>
    );
}