import React, {Component} from 'react';
import Link from "react-router-dom/es/Link";

class SignUpForm extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password_verify: ""
        };

        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSignUp(e) {
        let target = e.target;
        let name = target.name;

        this.setState({
            [name]: target.value
        });
    }


    handleSubmit(e) {   // we would make a request to server here for sign up
        e.preventDefault();
        // we could make a request to the server and in the model layer check for existing email so as to
        // use a single DB connection (unless a singleton pattern is explicitly defined then it doesn't matter
        // w.r.t. DB but multiple network calls
        console.log("Request to Sign Up");
        console.log(this.state);
    }

    render() {
        return (
            <div className="FormCenter">
                <form className="FormFields" onSubmit={this.handleSubmit}>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Full Name</label>
                        <input type="text" id="name" className="FormField__Input"
                               placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleSignUp}/>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">Email</label>
                        <input type="email" id="email" className="FormField__Input"
                               placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleSignUp}/>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input"
                               placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleSignUp}/>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password_verify">Verify
                            Password</label>
                        <input type="password" id="password_verify" className="FormField__Input"
                               placeholder="Verify your password" name="password_verify" value={this.state.password_verify} onChange={this.handleSignUp}/>
                    </div>

                    <div className="FormField tc">* By signing up, you accept our T&C</div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20">Sign Up</button>
                        <Link to="/sign-in" className="FormField__Link">I have an account</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpForm;