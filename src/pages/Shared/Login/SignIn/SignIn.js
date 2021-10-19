import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SignIn.css'

const SignIn = () => {
    return (
        <div>
            <div className="form-container my-5">
            <div className="form text-start py-4 px-5 sm-w-100">
                <h2 className="pb-3">Sign-In </h2>

                {/* --------logIn with Email & Password-------- */}
                <div>
                    <Form.Group className="mb-3">
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className="signIn-btn mb-3 w-100 p-2 rounded" as="input" type="submit" value="Sign In" />{' '}
                    <div className="d-flex align-middle justify-content-center"> 
                        <hr className="w-25 text-dark" />
                        <p className="px-2"> New to Emajon? </p>
                        <hr className="w-25 text-dark"/>
                    </div>
                    <Link to="/signup"><Button className="signIn-btn mb-3 w-100 p-2 rounded bg-light text-dark" as="input" type="submit" value="Create New Account" />{' '}</Link>


                    {/* -------logIn with Another way------- */}

                    <div className="text-center mt-3 text-white"> 
                        <p className="px-2 text-white-75"> Or LogIn with one of the following:</p>
                        <hr className="text-dark"/>
                        <div className="d-flex justify-content-center align-items-center text-dark fs-2">
                            <button onClick="" className="bg-transparent mx-1 border-0 text-dark"><i className=" fab fa-google"></i></button>
                            <button className="bg-transparent mx-1 border-0 text-dark"><i className=" fab fa-github"></i></button>
                            <button className="bg-transparent mx-1 border-0 text-dark"><i className=" fab fa-facebook"></i></button>
                            <button className="bg-transparent mx-1 border-0 text-dark"><i className=" fab fa-twitter"></i></button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default SignIn;