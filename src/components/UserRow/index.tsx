import {Container, UserImage, UserName} from './styles';

type UserRowType = {
    userName: string;
    userImage: string;
}

export const UserRow = ({userImage, userName}: UserRowType) => {
    return (
        <Container>
            <UserName>{userName}</UserName>
            <UserImage source={{uri: `${userImage}`}} />
        </Container>
    );
}