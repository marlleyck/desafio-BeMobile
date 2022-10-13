import { StatusBar } from 'expo-status-bar';
import { Header } from '../../components/Header';

import {} from './styles';

export const Home = () => {
    return (
        <>
            <Header />
            <StatusBar style="auto" backgroundColor='white' />
        </>
    );
}