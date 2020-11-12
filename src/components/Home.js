import React from 'react';

// bootstrap
import {Form, Button} from 'react-bootstrap'

const LoginBox = (props) => {
    const userLogin = (e) => {
        e.preventDefault();
    }

    return (
        <div style={{
            borderRadius: '5px',
            padding: '30px',
            margin: '10px',
            color: '#B02A30',
            backgroundColor: '#E7B909',
            minWidth: '300px'
        }}>
            <h5>
                {props.header}
            </h5><hr/>
            <Form onSubmit={userLogin}>
                <Form.Group controlId="studentEmail">
                    <Form.Label>VESIT Email ID</Form.Label>
                    <Form.Control required type="email" placeholder={props.emailText} />
                </Form.Group>

                <Form.Group controlId="studentPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required type="password" placeholder={props.passwordText} />
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
    )
}

const Home = () => {
    return(
        <div style={{
            display: 'flex',
            flexFlow: 'row wrap',
            height: '100%',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        }}>
            <LoginBox header='Student Login' emailText='Enter your @ves.ac.in ID' passwordText='Enter provided password' />
            <LoginBox header='Admin Login' emailText='Enter Admin ID' passwordText='Enter admin password' />
        </div>
    )
}

export default Home;