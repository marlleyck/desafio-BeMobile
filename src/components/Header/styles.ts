import styled from "styled-components/native";
import { globalColors } from "../../globalColors";

export const Container = styled.View`
    width: 100%;
    height: 80px;
    padding-left: 20px;

    background-color: ${globalColors.COLORS.BLACK};
    margin-top: 29px;

    display: flex;
    align-items: flex-start;
    justify-content: center;
`

export const LogoContainer = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const LogoImg = styled.Image``