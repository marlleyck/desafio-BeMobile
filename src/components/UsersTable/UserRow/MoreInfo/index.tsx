import { useState } from 'react';

import {ContainerUserMoreInfo, CargoContainer, CargoTitle, Cargo} from './styles';

type MoreInfoType = {
    userName: string;
    userImage: string;
    userStack: string;
    userDate: any;
}

export const MoreInfo = ({userName, userImage, userDate, userStack}: MoreInfoType) => {
    return (
        <ContainerUserMoreInfo>
            <CargoContainer>
                <CargoTitle>Cargo</CargoTitle>
                <Cargo>{userDate}</Cargo>
            </CargoContainer>

        </ContainerUserMoreInfo>
    );
}