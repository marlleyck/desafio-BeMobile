import styled from "styled-components/native";
import { globalTheme } from "../../../../globalTheme";

export const ContainerUserMoreInfo = styled.View.attrs({
    borderBottomColor: "black",
    borderBottomWidth: 0.4
})`
    height: 85px;

    align-items: center;

    background-color: ${globalTheme.COLORS.WHITE};
`

export const InfosContainer = styled.View`
    width: 355px;
    padding: 0 15px;
    margin-top: 5px;

    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`

export const InfoTitle = styled.Text`
    font-family: ${globalTheme.FONTS.Roboto_400Regular};
    font-size: 16px;
    font-weight: bold;
`
export const Info = styled.Text``


export const UserName = styled.Text`
    font-family: ${globalTheme.FONTS.Roboto_400Regular};
    font-size: 16px;
`
