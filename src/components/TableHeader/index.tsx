import {Container, Foto, Nome, Point} from './styles';

export const TableHeader = () => {
    return (
        <Container>
            <Foto>Foto</Foto>
            <Nome>Nome</Nome>
            <Point source={require('../../../assets/img/point.png')} />
        </Container>
    );
}