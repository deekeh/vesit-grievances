import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header'

// bootstrap
import {Form, Button, Container} from 'react-bootstrap'

        const Spost = () => {
    return (
        <>
            <Header/>
            <Container>
            <div>
                <h3 style={{
                    display: 'inline-block' 
                    
                }}>
                    Create New Post
                </h3>
                </div>
                </Container>
                <Container>
                <Form onSubmit={""}>
                <Form.Group controlId="Subject">
                <Form.Label>Subject</Form.Label>
                <Form.Control required type = "text"placeholder ="Enter Subject"></Form.Control>    
                    </Form.Group>
                    <Form.Group controlId="Description">
                <Form.Label>description</Form.Label>
                <Form.Control required type = "text"placeholder ="Enter Description"></Form.Control>    
                    </Form.Group> 
                    <Form.Group controlId="Department">
                <Form.Label>Department</Form.Label>
                <Form.Control required type = "text"placeholder ="Enter Department"></Form.Control>    
                    </Form.Group>
                    <Link to={""}>
                    <Button block type="submit" 

                    style={{
                        color: '#E7B909',
                        backgroundColor: '#B02A30',
                        border: 'none'
                        
                    }}>Submit</Button>
                    </Link>
                </Form>

                </Container>
                </>
            )
            }

export default Spost;