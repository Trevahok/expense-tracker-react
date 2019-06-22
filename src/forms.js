import React, { Component } from 'react';
import {
    Menu,
    Segment,
    Input,
    Placeholder,
    Grid,
    Progress,
    Label,
    Pagination,
    Button,
    Form
    Transition,
    List
} from 'semantic-ui-react';
export default class BudgetForm extends Component{
    constructor(){
        super();
        this.state = {
            budgets: 1,
            categories: []
        };
        axios.get(`http://localhost:8000/api/category`)
        .then(response => { this.setState({categories: response.data}); });
    }

    render(){
        return (
            <Form>

                <Form.Input placeholder='Start Date' />
                <Form.Input placeholder='End Date' />

                {for loop}
                <Form.Input placeholder='Title... ' />
                <Form.Input placeholder='Budget Cost' />
                <Form.Input placeholder='Category' />
            </Form>
        );
    }
}