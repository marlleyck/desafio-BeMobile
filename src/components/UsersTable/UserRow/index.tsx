import { useState } from 'react';

import { MoreInfo } from './MoreInfo';

import {
    ContainerUserInfos, 
    Content, 
    UserImage, 
    UserName, 
    Arrow} from './styles';

type UserRowType = {
    userName: string;
    userImage: string;
}

export const UserRow = ({userImage, userName}: UserRowType) => {
    const [ moreInfoPressed, setMoreInfoPressed ] = useState(false);

    const arrows = [
        require('../../../../assets/img/arrowdown.png'),
        require('../../../../assets/img/arrowup.png')
    ]

    const handleShowMoreInfo = () => {
        setMoreInfoPressed((state) => !state)
    }

    return (
        <>
            <ContainerUserInfos
            onPress={handleShowMoreInfo}
            >
                <Content>
                    <UserImage source={{uri: `${userImage}`}} />
                    <UserName>{userName}</UserName>
                    <Arrow 
                    source={moreInfoPressed ? arrows[1] : arrows[0]} />
                </Content>
            </ContainerUserInfos>

            {moreInfoPressed 
            ? <MoreInfo userImage={userImage} userName={userName} />
            : null }

        </>

    );
}