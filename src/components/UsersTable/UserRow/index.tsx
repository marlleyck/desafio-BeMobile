import { useState } from 'react';

import { MoreInfo } from './MoreInfo';

import {Container, Content, UserImage, UserName, ArrowDown} from './styles';

type UserRowType = {
    userName: string;
    userImage: string;
}

export const UserRow = ({userImage, userName}: UserRowType) => {
    const [ moreInfoPressed, setMoreInfoPressed ] = useState(false);

    const handleShowMoreInfo = () => {
        setMoreInfoPressed(true)
        console.log('clicou')
    }

    return (
        <>
            <Container
            onPress={handleShowMoreInfo}
            >
                <Content>
                    <UserImage source={{uri: `${userImage}`}} />
                    <UserName>{userName}</UserName>
                    <ArrowDown 
                    source={require('../../../../assets/img/arrowdown.png')} />
                </Content>
            </Container>

            {moreInfoPressed 
            ? <MoreInfo userImage={userImage} userName={userName} />
            : null }
        </>

    );
}