import * as React from "react";
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import ShareList from './components/ShareList.js';
import ShareEdit from './components/ShareEdit.js';


const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="shares" list={ShareList}  edit={ShareEdit} />
    </Admin>
);

export default App;