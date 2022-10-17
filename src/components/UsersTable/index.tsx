import { TableHeader } from './TableHeader';
import { TableMain } from './TableMain';

import * as Animatable from 'react-native-animatable';

export const UsersTable = () => {
    return (
        <>
            <Animatable.View
            animation="fadeInRight">
                <TableHeader />
            </Animatable.View>

            <Animatable.View
            animation="fadeInRight"
            style={{flex: 1}}> 
                <TableMain />
            </Animatable.View>
        </>
    );
}