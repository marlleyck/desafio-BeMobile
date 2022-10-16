import {Container, Content, UserImage, UserName} from './styles';


type UserRowType = {
    userName: string;
    userImage: string;
}

export const UserRow = ({userImage, userName}: UserRowType) => {
    return (
        <Content>
            <Container>
                <UserImage source={{uri: `${userImage}`}} />
                <UserName>{userName}</UserName>
            </Container>
        </Content>
    );
}