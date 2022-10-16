import { SearchArea } from '../SearchArea';
import { UsersTable } from '../UsersTable';

import * as Animatable from 'react-native-animatable';

import {Container, Content, Title} from './styles';

export const Main = () => {
    return (
        <Container>
            <Animatable.View
            animation="fadeInLeft"
            >
                <Title>Funcionários</Title>
            </Animatable.View>

            <Content>
                <SearchArea />
                <UsersTable />
            </Content>
        </Container>
    );
}