import React from 'react'
import { Formik, Field, Form } from 'formik'
import { Button, TextField } from '@material-ui/core'
import { createTheme } from "@material-ui/core/styles"
import { MuiThemeProvider } from "@material-ui/core/styles"


export class Signup extends React.Component {
    state = {
        isLogin: this.props
    }

    initialValues = {
        username: '',
        password: '',
        repassword: '',
        fullName: '',
        email: '',
    }

    componentDidMount(){
    }

    theme = createTheme({
        overrides: {
            MuiOutlinedInput: {
                root: {
                    // Hover state
                    "&:hover $notchedOutline": {
                        borderColor: '222222'
                    },
                    // Focused state
                    "&$focused $notchedOutline": {
                        borderColor: '#FE385C'
                    }
                },
                // Default State
                notchedOutline: {
                    borderColor: 'B0B0B0'
                }
            }
        }
    });

    onSubmitUser = (user) => {
    }

    onValidate = ({ username, password, repassword, email }) => {
        const errors = {}
        if (!username) errors.username = 'Requierd'
        if (!password || !repassword) errors.password = 'Requierd'
        if (!email) errors.email = 'Requierd'
        if (password !== repassword) errors.password = 'Passwords are not the same'
        if (!password) errors.fullName = 'Required'
        const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
        if (!regex.test(email)) errors.email = 'Invalid Email'

        return errors
    }

    render() {
        return (
            <div className="form-container modal-center">
                <Formik validateOnChange validate={this.onValidate} initialValues={this.initialValues} onSubmit={this.onSubmitUser}>
                    {({ errors }) => (
                        <Form>
                            <Field name="username" type="text" as={TextField} variant="outlined" label="Username" fullWidth />
                            {<span className="error">{errors.username}</span>}
                            <Field name="password" type="password" as={TextField} variant="outlined" label="Password" fullWidth />
                            {<span className="error">{errors.password}</span>}
                            <Field name="repassword" type="password" as={TextField} variant="outlined" label="Repeat password" fullWidth />
                            {<span className="error">{errors.password}</span>}
                            <Field name="fullName" type="text" as={TextField} variant="outlined" label="Full name" fullWidth />
                            {<span className="error">{errors.fullName}</span>}
                            <MuiThemeProvider theme={this.theme}>
                                <Field name="email" type="email" as={TextField} variant="outlined" label="Email" fullWidth /></MuiThemeProvider>
                            {<span className="error">{errors.email}</span>}
                            <Button type="submit" variant="contained" color="primary" size="large">
                                Sign Up
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
}