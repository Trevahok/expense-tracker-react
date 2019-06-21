import React, { Component } from 'react';
import Login from './login';
import Dashboard from './dashboard';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component{
	render(){
		return (
			<Router>
				<Route exact path="/" component={Login} />
			  	<Route path="/login" component={Login} />
			  	<Route path="/dashboard" component={Dashboard} />
		  </Router>
		);
	}
}

export default App;
