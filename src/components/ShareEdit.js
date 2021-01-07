import * as React from "react";
import { Edit, SimpleForm, TextInput} from 'react-admin';



const ShareEdit = props => {
    return (
    <Edit title='Edit Post' {...props}>
        <SimpleForm >
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="symbol" />
            <TextInput source="market.code"  />
            <TextInput source="currency"  />
        </SimpleForm>
    </Edit>
)};

export default ShareEdit;