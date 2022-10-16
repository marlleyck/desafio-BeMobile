import { StatusBar } from 'expo-status-bar';

import { Header } from '../../components/Header';
import { Main } from '../../components/Main';

import { useFonts, Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto';

import {Container} from './styles';

export const Home = () => {

    let [fontsLoaded] = useFonts({
        Roboto_500Medium,
        Roboto_400Regular
    })
    if (!fontsLoaded) {
        return null;
    }

    return (
        <Container>
            <Header />
            <Main />
            <StatusBar style="auto" backgroundColor='white' />
        </Container>
    );
}