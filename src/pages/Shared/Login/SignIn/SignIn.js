import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import './SignIn.css'

const SignIn = () => {
    const {user, error,  signInUsingGoogle, handlePasswordChange, handleSignUp, handleEmailChange} = useAuth()

    return (
        <div>
            <div className="form-container my-5">
            <div className="form text-start py-4 px-5 sm-w-100">
                <h2 className="pb-3">Sign-In </h2>

                {/* --------logIn with Email & Password-------- */}
                <form onSubmit={handleSignUp}>
                    <Form.Group className="mb-3">
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Email" required/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required/>
                    </Form.Group>
                    <Button className="signIn-btn mb-3 w-100 p-2 rounded" as="input" type="submit" value="Sign In" />{' '}
                    <div className="d-flex align-middle justify-content-center">
                        <p className="px-2"> New to Medicare? </p>
                    </div>
                    <div className="row mb-3 text-danger">{error}</div>
                    <Link to="/signUp"><Button onSubmit={handleSignUp} className="signIn-btn mb-3 w-100 p-2 rounded bg-light text-dark" as="input" type="submit" value="Create New Account" />{' '}</Link>


                    {/* -------logIn with Another way------- */}

                    <div className="text-center mt-3 text-white"> 
                        <p className="px-2 text-white-75"> Or LogIn with Google</p>
                        <hr className="text-dark"/>
                        <div className="d-flex justify-content-center align-items-center text-dark fs-2">
                            <button onClick={signInUsingGoogle} className="bg-transparent mx-1 border-0 text-dark"><i className=" fab fa-google"></i> - Google</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default SignIn;