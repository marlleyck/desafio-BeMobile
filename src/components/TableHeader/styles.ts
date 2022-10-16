import styled from "styled-components/native";
import { globalTheme } from "../../globalTheme";

export const Container = styled.View`
    width: 90%;
    height: 50px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 0 20px;

    background-color: ${globalTheme.COLORS.BLUE_PRIMARY};

    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`

export const Foto = styled.Text`
    font-family: ${globalTheme.FONTS.Roboto_500Medium};
    font-size: 16px;
    text-transform: uppercase;
    color: ${globalTheme.COLORS.WHITE};
`

export const Nome = styled.Text`
    font-family: ${globalTheme.FONTS.Roboto_500Medium};
    font-size: 16px;
    text-transform: uppercase;
    color: ${globalTheme.COLORS.WHITE};
`

export const Point = styled.Image``