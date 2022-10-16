import { UserType } from "../../../types/userType";
import { UserRow } from "../UserRow";

import {FlatList} from './styles';

type TableMainProps = {
    users: UserType[] | undefined;
}

export const TableMain = ({users}: TableMainProps) => {
    return (
        <FlatList
        data={users}
        keyExtractor={(item: UserType) => item.id}
        renderItem={({item}: {item: UserType}) => <UserRow userName={item.name} userImage={item.image} /> }
        />
    );
}