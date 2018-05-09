import React from 'react';
import { Link } from "react-router-dom";
import { login } from "../login";
import PropTypes from 'prop-types';
import MainSection from './MainSection';
import axios from "axios";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginData: {
                login: '',
                password:''
            },
            errors: {},
            isLoading: false
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        const login = this.state.loginData.login,
              pass = this.state.loginData.password;
        const target = e.target;
        if(target.name === 'username') {
            const newState = {
                login: target.value,
                password: pass
            }
            this.setState({
                loginData: newState
            })
        } else {
            const newState = {
                login: login,
                password: target.value
            }
            this.setState({
                loginData: newState
            })
        }
    }

    onSubmit(e) {
        e.preventDefault();
        axios.post("/login", this.state.loginData).then(res => console.log(res))
    }

    render() {
        return (
            <div className="login_main">
                <h1 className="login_header">PE DEPARTMENT</h1>
                <button className="epam_login login_button">&lt;EPAM LOGIN&gt;</button>
                <p><span></span> or <span></span></p>
                <form>
                    <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange}
                        placeholder="Username"
                        className="login_username"/>
                    <br/>
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        placeholder="**********"
                        className="login_password"/>
                    <br/>
                    <button
                        className="login_button main_button"
                        onClick={this.onSubmit}
                        disabled={this.isLoading}>
                        LOGIN
                    </button>
                </form>
                <a href="#" className="forgot_pass">Forgot password?</a>
                <br/>
                <a href="#" className="additional">Additional information</a>
                <br/>
                <div className="navv">
                    <Link to="/main">About (to MainSection)</Link>
                    <br/>
                </div>
            </div>
        );
    }
}

LoginForm.contextType = {
    router: PropTypes.object.isRequired
}

export default LoginForm;