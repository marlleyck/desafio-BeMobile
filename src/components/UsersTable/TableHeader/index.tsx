import {Container, Foto, Nome, ContainerPoint, Point} from './styles';

export const TableHeader = () => {
    return (
        <Container>
            <Foto>Foto</Foto>
            <Nome>Nome</Nome>
            <ContainerPoint>
               <Point source={require('../../../../assets/img/point.png')} />
            </ContainerPoint>
        </Container>
    );
}