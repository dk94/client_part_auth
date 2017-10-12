import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';


class Signup extends Component {
    
    handleFormSubmit(values){
        console.log(values);
    }
    
    render() {

        const handleSubmit = this.props.handleSubmit;
        console.log(this.props)

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Email:</label>
                    <Field component="input" name="email" className="form-control" />
                </fieldset>
                <fieldset className="form-group">
                    <label>Password:</label>
                    <Field component="input" name="password" type="password" className="form-control" />
                </fieldset>
                <fieldset className="form-group">
                    <label>Password confirm:</label>
                    <Field component="input" name="passwordConfirm" type="password" className="form-control" />
                </fieldset>
                <button action="submit" className="btn btn-primary">Sign up</button>

            </form>
        );
    }
}

function validate(formProps) {
    const errors = {};

    if(formProps.password !== formProps.passwordConfirm) {
        errors.password = 'Passwords are not equal'
    }
    console.log(errors)
    return errors;
}


export default reduxForm(
    {
        form: 'signup',
        validate
    })(Signup);