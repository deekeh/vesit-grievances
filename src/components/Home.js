import React from 'react';

// bootstrap
import {Form, Button} from 'react-bootstrap'

const Home = () => {
    const studentLogin = (e) => {
        e.preventDefault();
    }

    const adminLogin = (e) => {
        e.preventDefault();
    }
    return(
        <div style={{
            display: 'flex',
            flexFlow: 'row wrap',
            height: '100%',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        }}>
            <div style={{
                borderRadius: '5px',
                padding: '30px',
                margin: '10px',
                color: '#B02A30',
                backgroundColor: '#E7B909',
                minWidth: '300px'
            }}>
                <h5>
                    Student Login
                </h5><hr/>
                <Form onSubmit={studentLogin}>
                    <Form.Group controlId="studentEmail">
                        <Form.Label>VESIT Email address</Form.Label>
                        <Form.Control required type="email" placeholder="Enter VESIT email" />
                    </Form.Group>

                    <Form.Group controlId="studentPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required type="password" placeholder="Password given by college" />
                    </Form.Group>
                    <Button block type="submit" style={{
                        color: '#E7B909',
                        backgroundColor: '#B02A30',
                        border: 'none'
                    }}>
                        Login
                    </Button>
                    </Form>
            </div>
            <div style={{
                borderRadius: '5px',
                padding: '30px',
                margin: '10px',
                color: '#B02A30',
                backgroundColor: '#E7B909',
                minWidth: '300px'
            }}>
                <h5>
                    Office Login
                </h5><hr/>
                <Form onSubmit={adminLogin}>
                    <Form.Group controlId="studentEmail">
                        <Form.Label>VESIT Email address</Form.Label>
                        <Form.Control required type="email" placeholder="Enter VESIT admin email" />
                    </Form.Group>

                    <Form.Group controlId="studentPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required type="password" placeholder="Admin Password" />
                    </Form.Group>
                    <Button block type="submit" style={{
                        color: '#E7B909',
                        backgroundColor: '#B02A30',
                        border: 'none'
                    }}>
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Home;