import {ContainerUserMoreInfo, CargoContainer, CargoTitle, Cargo} from './styles';

type MoreInfoType = {
    userName: string;
    userImage: string;
}

export const MoreInfo = ({userName, userImage}: MoreInfoType) => {
    return (
        <ContainerUserMoreInfo>
            <CargoContainer>
                <CargoTitle>Cargo</CargoTitle>
                <Cargo>{userName}</Cargo>
            </CargoContainer>

        </ContainerUserMoreInfo>
    );
}