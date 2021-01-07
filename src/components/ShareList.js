import * as React from "react";
import { List, Datagrid, TextField, EditButton } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    text: {
        fontFamily: 'Barlow',
    },

});

const ShareList = props => {
    const classes = useStyles();
    return (
    <List {...props}>
        <Datagrid >
            <TextField source="name" className={classes.text}/>
            <TextField source="symbol" className={classes.text} />
            <TextField source="market.code" className={classes.text} />
            <TextField source="currency" className={classes.text} />
            <EditButton basePath="shares"/>
        </Datagrid>
    </List>
)};

export default ShareList;