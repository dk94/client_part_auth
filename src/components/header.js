import React, { Component } from 'react';
import { Link } from 'react-router';


class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        Sign in
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Header;