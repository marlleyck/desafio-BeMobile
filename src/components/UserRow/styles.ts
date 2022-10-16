import styled from "styled-components/native";
import { globalTheme } from "../../globalTheme";

export const Content = styled.View`
    height: 9%;
`

export const Container = styled.View`
    align-items: center;
    justify-content: center;
    flex-direction: row;

    width: 355px;
    height: 80px;

    border: 0.4px solid gray;

    background-color: ${globalTheme.COLORS.WHITE};

`
export const UserName = styled.Text`
    font-family: ${globalTheme.FONTS.Roboto_400Regular};
    font-size: 16px;
`

export const UserImage = styled.Image`
    width: 25px;
    height: 25px;

    border-radius: 50px;
`