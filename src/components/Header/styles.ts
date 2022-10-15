import styled from "styled-components/native";
import { globalTheme } from "../../globalTheme";

export const Container = styled.View`
    width: 100%;
    height: 80px;
    padding-left: 20px;

    background-color: ${globalTheme.COLORS.BLACK};
    margin-top: 29px;

    align-items: flex-start;
    justify-content: center;
`

export const LogoContainer = styled.View`
    align-items: center;
    justify-content: center;
`

export const LogoImg = styled.Image``