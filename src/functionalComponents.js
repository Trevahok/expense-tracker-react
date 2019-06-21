import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import {
    Button,
    Icon,

} from 'semantic-ui-react';

const Logout = ({ history }) => {
    return (
        <Button onClick={() => { axios.defaults.headers.common.Authorization = null; history.push('/login'); }}>
            <Icon name='sign-out' />
            Logout
        </Button>
    )
}

export { Logout };
