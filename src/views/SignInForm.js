import React, {Component} from 'react';
import Link from "react-router-dom/es/Link";

class SignInForm extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };

        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSignIn(e) {
        let target = e.target;
        let name = target.name;

        this.setState({
            [name]: target.value
        });
    }


    handleSubmit(e) {   // we would make a request to server here for sign in
        e.preventDefault();
        console.log("Request to Sign In");
        console.log(this.state);
    }
    render() {
        return (
            <div className="FormCenter">
                <form onSubmit={this.handleSubmit} className="FormFields">
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">Email</label>
                        <input type="email" id="email" className="FormField__Input"
                               placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleSignIn}/>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input"
                               placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleSignIn}/>
                    </div>


                    <div className="FormField">
                        <button className="FormField__Button mr-20">Sign In</button>
                        <Link to="/" className="FormField__Link">Create an account</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignInForm;