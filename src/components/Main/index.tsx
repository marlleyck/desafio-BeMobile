import { SearchArea } from '../SearchArea';
import { UsersTable } from '../UsersTable';

import {Container, Content, Title} from './styles';

export const Main = () => {
    return (
        <Container>
            <Title>Funcionários</Title>

            <Content>
                <SearchArea />
                <UsersTable />
            </Content>
        </Container>
    );
}