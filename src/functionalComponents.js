import React from 'react';
import axios from 'axios';
import {
    Icon,
    Menu,
    Segment,
    Input,
    Label,
    Button
} from 'semantic-ui-react';
const Logout = ({history}) => {
    console.log(history);
    return (
        <Button color='facebook' onClick={() => { axios.defaults.headers.common.Authorization = null; history.push('/login'); }}>
            <Icon name='sign-out' />
            Logout
        </Button>
    )
}


const MenuBar = ({history}) => {
    return (<Segment inverted padded color='blue'>
        <Menu inverted color='blue' >
            <Menu.Item inverted name='Expense Tracker ' active={true} />
            <Menu.Item name='Budget' >
                <Button onClick={()=>history.push('/budget/add')}>Create Budget</Button>
            </Menu.Item>
            <Menu.Item name='Expense' >
                <Button>Add Expense</Button>
            </Menu.Item>
            <Menu.Item inverted position='right'>
                <Input inverted action={{ type: 'submit', content: 'Search' }} placeholder='Search Expense...' />
            </Menu.Item>
            <Menu.Item name='Logout' >
                <Logout history={history} />
            </Menu.Item>
        </Menu>
    </Segment>);
}

export { Logout, MenuBar };
