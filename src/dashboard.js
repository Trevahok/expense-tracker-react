import React, { Component } from 'react';
import { Logout } from './functionalComponents';
import {
    Menu,
    Segment,
    Input,
    Placeholder,
    Grid,
    Progress,
    Label,
    Pagination

} from 'semantic-ui-react';

class MenuBar extends Component {
    render() {
        return (

            <Segment inverted padded color='blue'>
                <Menu inverted color='blue' >
                    <Menu.Item inverted name='Dashboard ' active={true} />
                    <Menu.Item inverted position='right'>
                        <Input inverted action={{ type: 'submit', content: 'Search' }} placeholder='Search Expense...' />
                    </Menu.Item>
                    <Menu.Item name='Logout' >
                        <Logout history={this.props.history} />
                    </Menu.Item>
                </Menu>
            </Segment>
        )

    }
}

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
    }
    render() {
        return (

            <div>


                <MenuBar />
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