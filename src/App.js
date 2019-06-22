import React, { Component } from 'react';
import Login from './login';
import Dashboard from './dashboard';
import { BrowserRouter as Router, Route } from "react-router-dom";
import BudgetForm from './ BudgetForm';

class App extends Component{
	render(){
		return (
			<Router>
				<Route exact path="/" component={Login} />
			  	<Route path="/login" component={Login} />
			  	<Route path="/dashboard" component={Dashboard} />
				<Route path="/budget/add" component={BudgetForm} />
		  	</Router>
		);
	}
}

export default App;
