import styled from "styled-components/native";
import { globalTheme } from "../../globalTheme";

export const Container = styled.View`
    width: 100%;
    height: 100%;

`

export const Content = styled.View`
    width: 100%;
    height: 100%;

    
    align-items: center;
`

export const Title = styled.Text`
    font-family: ${globalTheme.FONTS.Roboto_500Medium};
    font-size: 24px;
    margin: 20px;
`