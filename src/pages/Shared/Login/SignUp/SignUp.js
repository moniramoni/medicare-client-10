import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    return (
        <div className="form-container my-5">
            <div className="form text-start py-4 px-5 sm-w-75">
                <h2 className="pb-3">Create Account</h2>

                {/* --------logIn with Email & Password-------- */}
                <div>
                    <Form.Group className="mb-3">
                        <Form.Control type="name" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="number" placeholder="Number" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className="signIn-btn mb-3 w-100 p-2 rounded bg-dark" as="input" type="submit" value="Sign Up" />{' '}
                    <div className="d-flex align-middle justify-content-center"> 
                        <hr className="w-25" />
                        <p className="px-2"> Have an account? </p>
                        <hr className="w-25"/>
                    </div>
                    <Link to="/signin"><Button className="signIn-btn mb-3 w-100 p-2 rounded bg-light text-dark" as="input" type="submit" value="Sign In" />{' '}</Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;