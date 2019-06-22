import React, {Component} from 'react';
import axios from 'axios';
import {
    Button,
    Form,
    Header,
    Segment,
    Divider,
    Icon,
    Message,
    
} from 'semantic-ui-react';

export default class GenericForm extends Component {

    constructor() {
        super();
        this.state = {
            error: "",
            fields: [],
            header: "",
        };
    }
    handleSubmit(){
        
    }

    componentWillMount() {
        axios({
            method: 'OPTIONS',
            url: `${this.props.url}`,
        }).then(response => {
            console.log(response.data.actions.POST);
            let fields = [];
            for (let field in response.data.actions.POST) {
                if (!response.data.actions.POST[field].read_only)
                    fields.push(response.data.actions.POST[field]);
            }
            this.setState({fields: fields, header: response.data.name});
        }).catch(error=>{
            console.log(error.response);
            this.setState({error: error.response.data.detail});
        });
    }

    render() {
        var const_error='';
        if(this.state.error)
            const_error = (<Message negative>{this.state.error}</Message>);
        return (
            <div>
                <Segment raised padded >
                    <Header primary as='h2' textAlign='center'>
                    <Icon name='users' size='big'/>
                        {this.state.header}
                    </Header>
                    <Divider/>
                    {const_error}
                    <Form size='large'>
                        { this.state.fields.map((item, index) => (
                            <Form.Input fluid required placeholder={`${item.label}...`} />    
                        ) )}
                        <Button fluid size= 'large' type='submit' color='teal'>Submit</Button>
                    </Form>
                </Segment>
            </div>
        );
    }
}