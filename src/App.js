import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import SignUpForm from './views/SignUpForm';
import SignInForm from './views/SignInForm';
import NavLink from "react-router-dom/es/NavLink";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="App__Form">
                        <div className="PageSwitcher">
                            <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                            <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                        </div>

                        <div className="FormTitle">
                            <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
                        </div>
                        <Route exact path="/" component={SignUpForm}/>
                        <Route exact path="/sign-in" component={SignInForm}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
