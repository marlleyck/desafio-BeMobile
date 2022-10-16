import styled from "styled-components/native";
import { globalTheme } from "../../../../globalTheme";

export const ContainerUserMoreInfo = styled.View`
    height: 60px;

    align-items: center;

    background-color: ${globalTheme.COLORS.WHITE};
`

export const CargoContainer = styled.View`
    width: 355px;

    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`

export const CargoTitle = styled.Text`
    font-family: ${globalTheme.FONTS.Roboto_400Regular};
    font-size: 16px;
    font-weight: bold;
`

export const Cargo = styled.Text``

export const UserName = styled.Text`
    font-family: ${globalTheme.FONTS.Roboto_400Regular};
    font-size: 16px;
`
