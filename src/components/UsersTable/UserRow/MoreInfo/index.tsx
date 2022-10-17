import {
    ContainerUserMoreInfo, 
    InfosContainer, 
    InfoTitle, 
    Info } from './styles';

type MoreInfoType = {
    userStack: string;
    userPhone: string;
    userDate: any;
}

export const MoreInfo = ({userDate, userStack, userPhone}: MoreInfoType) => {
    return (
        <ContainerUserMoreInfo>
            <InfosContainer>
                <InfoTitle>Cargo</InfoTitle>
                <Info>{userStack}</Info>
            </InfosContainer>

            <InfosContainer>
                <InfoTitle>Data de admissão</InfoTitle>
                <Info>{userDate}</Info>
            </InfosContainer>

            <InfosContainer>
                <InfoTitle>Telefone</InfoTitle>
                <Info>{userPhone}</Info>
            </InfosContainer>

        </ContainerUserMoreInfo>
    );
}