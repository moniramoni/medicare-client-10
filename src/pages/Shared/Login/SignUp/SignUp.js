import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import './SignUp.css'

const SignUp = () => {
    const {user, error, handleNumberChange, handleNameChange, handlePasswordChange, handleSignUp, handleEmailChange} = useAuth()
    return (
        <div className="form-container my-5">
            <div className="form text-start py-4 px-5 sm-w-75">
                <h2 className="pb-3">Create Account</h2>

                {/* --------logIn with Email & Password-------- */}
                <form onSubmit={handleSignUp}>
                    <Form.Group className="mb-3">
                        <Form.Control onBlur={handleNameChange} type="name" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control onBlur={handleNumberChange} type="number" placeholder="Number" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                    </Form.Group>
                    <div className="row mb-3 text-danger">{error}</div>
                    <Button onSubmit={handleSignUp} className="signIn-btn mb-3 w-100 p-2 rounded bg-dark" as="input" type="submit" value="Sign Up" />{' '}
                    <div className="d-flex align-middle justify-content-center"> 
                        <p className="px-2"> Have an account? </p>
                    </div>
                    <Link to="/signIn"><Button className="signIn-btn mb-3 w-100 p-2 rounded bg-light text-dark" as="input" type="submit" value="Sign In" />{' '}</Link>
                </form>
            </div>
        </div>
    );
};

export default SignUp;