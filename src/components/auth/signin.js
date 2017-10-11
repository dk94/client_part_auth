import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions'

class Signin extends Component {

    handleFormSubmit( {email,password} ) {
        console.log(this.props);
       this.props.signinUser({email, password});


    }

    render() {

        const { handleSubmit } = this.props;

      

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Email:</label>
                    <Field component="input" name="email" className='form-control' />
                </fieldset>
                <fieldset className="form-group">
                    <label>Password:</label>
                    <Field component="input" name="password" className='form-control' />
                </fieldset>
                <button action="submit" className="btn btn-primary">Sign in</button>
            </form>
        )
    }
}

Signin = connect(null,actions)(Signin);

export default reduxForm({
    form: 'signin',
})(Signin);