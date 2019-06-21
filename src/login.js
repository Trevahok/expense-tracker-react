import React, { Component } from 'react';
import {
    Button,
    Form,
    Grid,
    Header,
    Segment,
    Divider,
    Icon,
    Message
    
} from 'semantic-ui-react';
import {Redirect} from 'react-router-dom';

import axios from 'axios';

export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            error: '',
        };
    }

    handleSubmit() {
        const payload = JSON.stringify({username: this.state.username, password: this.state.password});
        console.log(payload);
        const requestOptions = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const url = 'localhost:8000';
        // axios.post(`http://${url}/api-token-auth/`, payload, requestOptions)
        axios.post(`http://${url}/auth/`, payload, requestOptions)
        .then(response => {
            const {token} = response.data;
            axios.defaults.headers.common.Authorization = `Token ${token}`;
            this.props.history.push('/dashboard');
        })
        .catch(error => {
            console.log(error.response.data.non_field_errors);
            this.setState({
                error: error.response.data.non_field_errors,
            });
        });
    }

    render() {
        
        var const_error = '';
        if (this.state.error)
            const_error = (<Message negative>{this.state.error}</Message>);

        return (
            <Grid  textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 500 }}>

                <Segment raised padded >

                    <Header primary as='h2' textAlign='center'>
                    <Icon name='users' size='big'/>
                            Login
                    </Header>
                    <Divider/>
                    {const_error}
                    <Form size='large' onSubmit={()=>this.handleSubmit()}>
                        <Form.Input fluid icon='user' required iconPosition='left' placeholder='Username...' onChange = {(event)=>{this.setState({username: event.target.value})}} />
                        <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password...' type='password' onChange = {(event)=>{this.setState({password: event.target.value})}} />
                        <Form.Checkbox fluid label='I agree to the Terms and Conditions' />
                        <Button fluid size= 'large' type='submit' color='teal'>Submit</Button>
                    </Form>
                </Segment>

                </Grid.Column>
            </Grid>
        );
    }
}
