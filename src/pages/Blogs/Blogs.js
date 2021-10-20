import './Blogs.css';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    console.log(blogs)

    useEffect( () => {
        fetch('./blogs.json')
        .then(res=> res.json())
        .then(data => setBlogs(data.medicalBlogs))
    }, [])

    return (
        <div>
            <div className="single-service-bg p-5">
                <h1 className="fw-bold">Learn Your Life</h1>
                <p>The chapter you are learning today is going to save someone's life tomorrow</p>
            </div>
            <h2 className=" p-5 ">Blog</h2>
            <Container>
                <Row className="pb-5 px-5 mb-5">
                    {
                        blogs.map(blog => ( 
                            <Col xs={12} md={12} lg={4} key={blog.id}
                            blog={blog}>
                                <div className="blog-column ">
                                    <img className="w-100" src={blog?.img} alt="" />
                                    <div className="p-3">
                                        <div className="author-date">
                                            <div className="">
                                                <div><p className="fs-6">{blog?.author}</p></div>
                                            </div>
                                            <div className="d-none d-md-block d-lg-block">
                                                <div><p>{blog.date}</p></div>
                                            </div>
                                        </div>
                                        <h2 className=" text-dark text-start fs-5 fw-bold">{blog?.title.slice(0, 35)}...</h2>
                                        <p className=" text-dark text-start">{blog?.description.slice(0,110)}</p>
                                    </div>
                                    <Link to="/signIn"><Button className="blog-btn  w-100 p-2 rounded text-light fs-6" as="input" type="submit" value="Read More" />{' '}</Link>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Blogs;