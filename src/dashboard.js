import React, { Component } from 'react';
import { MenuBar } from './functionalComponents';
import {
    Menu,
    Segment,
    Input,
    Placeholder,
    Grid,
    Progress,
    Label,
    Pagination,
    Button

} from 'semantic-ui-react';
import { Logout } from './functionalComponents';
import Cookies from 'js-cookie';
import axios from 'axios';

class Paginator extends Component {
    render() {
        return (

            <Grid textAlign='center' verticalAlign='bottom'>

            <Pagination defaultActivePage={1} firstItem={null} lastItem={null} pointing secondary totalPages={3} position='right' />

            </Grid>


        )
    }
}

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            progress: 60,
        }
        axios.defaults.headers.common.Authorization = Cookies.get('Authorization');
    }
    render() {
        return (
            <div>
                <MenuBar history={this.props.history}/>
                <Segment padded>
                    <Label> Part of your budget consumed for this month </Label>
                    <Progress percent={this.state.progress} inverted active progress color='green' />

                    <Label> Recent expenses this month </Label>
                    <br />
                    <br />

                    <PlaceholderExampleGrid />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <Paginator />

                </Segment>
            </div>
        )

    }
}
const PlaceholderExampleGrid = () => (
    <Grid columns={3} stackable>
        <Grid.Column>
            <Segment raised>
                <Placeholder>
                    <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                        <Placeholder.Line length='medium' />
                        <Placeholder.Line length='short' />
                    </Placeholder.Paragraph>
                </Placeholder>
            </Segment>
        </Grid.Column>

        <Grid.Column>
            <Segment raised>
                <Placeholder>
                    <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                        <Placeholder.Line length='medium' />
                        <Placeholder.Line length='short' />
                    </Placeholder.Paragraph>
                </Placeholder>
            </Segment>
        </Grid.Column>

        <Grid.Column>
            <Segment raised>
                <Placeholder>
                    <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                        <Placeholder.Line length='medium' />
                        <Placeholder.Line length='short' />
                    </Placeholder.Paragraph>
                </Placeholder>
            </Segment>
        </Grid.Column>
    </Grid>
)