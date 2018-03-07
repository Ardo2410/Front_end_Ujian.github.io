import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
    render = () =>
    <div className="render form-group">
        <label htmlFor="login">Name</label>
        <input type="text" ref="login" id="login" className="form-control"/>
        <Link to='/welcome' onClick={() => {
            this.props.changeActive(1);
            this.props.changeName(this.refs.login.value);
        }}  
        className="btn btn-primary">Submit</Link>
    </div>
}

export default Login;