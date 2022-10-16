import {Container, Content, UserImage, UserName} from './styles';


type UserRowType = {
    userName: string;
    userImage: string;
}

export const UserRow = ({userImage, userName}: UserRowType) => {
    return (
        <Container>
            <Content>
                <UserImage source={{uri: `${userImage}`}} />
                <UserName>{userName}</UserName>
            </Content>
        </Container>
    );
}