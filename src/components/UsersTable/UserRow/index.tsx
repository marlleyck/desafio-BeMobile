import { useState } from 'react';

import { MoreInfo } from './MoreInfo';

import { formatPhone } from '../../../utilities';

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
    userDate: string;
}

export const UserRow = ({userImage, userName, userStack, userPhone, userDate}: UserRowProps) => {
    const [ moreInfoPressed, setMoreInfoPressed ] = useState(false)
    const [userPhoneFormat, setUserPhoneFormat] = useState('')

    const arrows = {
        down: require('../../../../assets/img/arrowdown.png'),
        up: require('../../../../assets/img/arrowup.png')
    }

    const handleShowMoreInfo = () => {
        setMoreInfoPressed((state) => !state)
        const phoneFormat = formatPhone(userPhone)
        setUserPhoneFormat(phoneFormat)

    }

    return (
        <>
            <ContainerUserInfos onPress={handleShowMoreInfo}>
                <Content>
                    <UserImage source={{uri: `${userImage}`}} />
                    <UserName>{userName}</UserName>
                    <Arrow 
                    source={moreInfoPressed ? arrows.up : arrows.down} />
                </Content>
            </ContainerUserInfos>

            {moreInfoPressed ? 
                <MoreInfo 
                    userStack={userStack}
                    userPhone={userPhoneFormat}
                    userDate={userDate} 
                />
            : null }

        </>

    );
}