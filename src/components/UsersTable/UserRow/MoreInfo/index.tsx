import {Container, Name} from './styles';

type MoreInfoType = {
    userName: string;
    userImage: string;
}

export const MoreInfo = ({userName, userImage}: MoreInfoType) => {
    return (
        <Container>
            <Name>{userName}</Name>
        </Container>
    );
}