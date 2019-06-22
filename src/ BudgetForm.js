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
    Form,
    Transition,
    List,
    Dropdown
} from 'semantic-ui-react';
import axios from 'axios';

import Cookies from 'js-cookie';

import {
    DateInput,
    TimeInput,
    DateTimeInput,
    DatesRangeInput
} from 'semantic-ui-calendar-react';

export default class BudgetForm extends Component {
    constructor() {
        super();
        this.state = {
            budgets: 1,
            start_date: '',
            end_date: '',
            categories: [],
        };

        axios.defaults.headers.common.Authorization = Cookies.get('Authorization');

        axios.get(`http://localhost:8000/api/category`)
            .then(response => {
                let temp = [];
                for(let i =0; i<response.data.length; i++)
                {
                    temp.push({
                        key: i,
                        text: response.data[i].name,
                        value: response.data[i].name,
                    });
                }
                this.setState({ categories: temp });
            })
            .catch(error=>{console.log(error.response)}) ;
    }

    handleChange(event, { name, value }) {
        console.log(name);
        console.log(value);
        if (this.state.hasOwnProperty("name")) {
            this.setState({ [name]: value });
        }
    }
//https://stackoverflow.com/questions/2600085/hasownproperty-in-javascript
    renderBudgetForms() {
        let segments = [];
        for (let i = 0; i < this.state.budgets; i++) {

            segments.push(
                <List.Item key={i}>
                    <Form.Input placeholder='Title... ' />
                    <Form.Input placeholder='Budget Cost' />
                    <Dropdown
                        selection
                        clearable
                        fluid
                        search
                        options={this.state.categories}
                        placeholder='Select Category'
                    />

                </List.Item>
            );
        }
        return segments;
    }

    render() {
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 800 }}>

                    <Segment raised padded >
                        <Form>
                            <Form.Group widths='equal'>

                                <DateInput
                                    name="start_date"
                                    placeholder="Start Date"
                                    value={this.state.start_date}
                                    iconPosition="left"
                                    onChange={this.handleChange}
                                />
                                <DateInput
                                    name="end_date"
                                    placeholder="End Date"
                                    value={this.state.end_date}
                                    iconPosition="left"
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                            <Button positive icon='add' onClick={() => this.setState({ budgets: this.state.budgets + 1 })}></Button>
                            <Button negative icon='minus' onClick={() => {
                                if (this.state.budgets > 1)
                                    this.setState({ budgets: this.state.budgets - 1 })
                            }}></Button>
                            <Transition.Group as={List} duration={500} divided  verticalAlign='middle'>
                                {this.renderBudgetForms()}
                            </Transition.Group>

                        </Form>
                    </Segment>

                </Grid.Column>
            </Grid>
        );
    }
}