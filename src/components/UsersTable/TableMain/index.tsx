import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { UserType } from "../../../types/userType";
import { UserRow } from "../UserRow";

import {FlatList} from './styles';

export const TableMain = () => {
    const {filteredUsers} = useContext(AppContext)

    return (
        <FlatList
        data={filteredUsers}
        keyExtractor={(item: UserType) => item.id}
        renderItem={({item}: {item: UserType}) => 
        <UserRow 
        userName={item.name} 
        userImage={item.image}
        userDate={item.date} 
        userStack={item.stack}
        userPhone={item.phone} /> }
        />
    );
}