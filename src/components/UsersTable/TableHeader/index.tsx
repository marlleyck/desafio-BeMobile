import {Container, PhotoText, NameText, ContainerPoint, Point} from './styles';

export const TableHeader = () => {
    return (
        <Container>
            <PhotoText>Foto</PhotoText>
            <NameText>Nome</NameText>
            <ContainerPoint>
               <Point source={require('../../../../assets/img/point.png')} />
            </ContainerPoint>
        </Container>
    );
}