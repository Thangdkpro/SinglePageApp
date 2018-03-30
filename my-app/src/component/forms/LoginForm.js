import React, { Component } from 'react';
import { Form, Button,Label } from 'semantic-ui-react';
import validator from 'validator';
import InlineError from '../messages/InlineError';

class LoginForm extends Component {

    state = {
        data: {
            email: '',
            password: ''
        },
        loading: false,
        error: {}
    }
    onChange=e=> 
    this.setState({
        data:{...this.state.data,[e.target.name]:e.target.value}
    })
    onSubmit=()=>{
        const errors = this.validate(this.state.date);
        this.setState({errors})
    }
    validate =(data) =>{
        const errors={}
        if(!validator.isEmail(data.email)) errors.email="Invalid email"
        if(!data.password) errors.password="Can't blank"
        return errors;

    }
    render() {
        const {data}=this.state;
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <Label htmlFor="email">Email</Label>
                    <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="example@gmail.com" 
                    value={data.email}
                    onChange={this.onChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Label htmlFor="password">Password</Label>
                    <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    value={data.password}
                    onChange={this.onChange}
                    />
                </Form.Field>
                <Button primary>Login</Button>
            </Form>
        );
    }
}

export default LoginForm;
