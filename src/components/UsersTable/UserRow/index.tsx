import { useState } from 'react';

import { MoreInfo } from './MoreInfo';

import {
    ContainerUserInfos, 
    Content, 
    UserImage, 
    UserName, 
    Arrow} from './styles';


type UserRowProps = {
    userName: string;
    userImage: string;
    userStack: string;
    userPhone: string;
    userDate: any;
}

export const UserRow = ({userImage, userName, userStack, userPhone, userDate}: UserRowProps) => {
    const [ moreInfoPressed, setMoreInfoPressed ] = useState(false)

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
            ? <MoreInfo 
            userImage={userImage} 
            userName={userName}
            userStack={userStack}
            userDate={userDate} />
            : null }

        </>

    );
}