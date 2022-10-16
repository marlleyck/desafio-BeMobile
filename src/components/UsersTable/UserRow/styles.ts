import styled from "styled-components/native";
import { globalTheme } from "../../../globalTheme";

export const Container = styled.TouchableOpacity`
    height: 60px;
`

export const Content = styled.View.attrs({
    borderBottomColor: "black",
    borderBottomWidth: 0.4
})`
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    width: 355px;
    height: 80px;
    padding: 0 15px;
    flex: 1;

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

export const ArrowDown = styled.Image`
    width: 20px;
`