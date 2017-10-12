import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Header extends Component {

    configureRender() {
        console.log(this.props.isAuthenticated)
        if (this.props.isAuthenticated) {
            return (
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <Link to='signout'>Sign Out</Link>
                    </li>
                </ul>
            )
        } else {
             return (
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <Link to='signin'>Sign In</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='signup'>Sign Up</Link>
                    </li>
                </ul>
            )
        }
    }

    render() {
        return (
            <nav className="navbar navbar-light">
                <Link to='/' className="navbar-brand">Redux Auth</Link>
                {this.configureRender()}
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.authenticated
    }
}

export default connect(mapStateToProps)(Header);