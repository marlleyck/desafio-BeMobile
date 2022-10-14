import styled from "styled-components/native";
import { globalTheme } from "../../globalTheme";

export const Container = styled.View`
    width: 100%;
    height: 100px;
    position: relative;

    display: flex;
    align-items: center;
`

export const SearchInput = styled.TextInput.attrs({
    placeholder: 'Pesquisar'
})`
    width: 90%;
    height: 30px;
    padding-left: 10px;

    background-color: ${globalTheme.COLORS.WHITE};
`

export const SearchIcon = styled.Image`
    width: 20px;
    height: 20px;
    position: absolute;
    right: 8%;
    top: 5%;
`