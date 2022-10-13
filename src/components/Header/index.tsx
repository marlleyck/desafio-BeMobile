import {Container, LogoContainer, LogoImg} from './styles';

export const Header = () => {
    return (
        <Container>
            <LogoContainer>
                <LogoImg source={require('../../../assets/img/logoBeMobile.png')} />
            </LogoContainer>
        </Container>
    );
}