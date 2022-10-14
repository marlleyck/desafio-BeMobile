import { SearchArea } from '../SearchArea';

import {Container, Content, Title} from './styles';

export const Main = () => {
    return (
        <Container>
            <Title>Funcionários</Title>

            <Content>
                <SearchArea />
            </Content>
        </Container>
    );
}