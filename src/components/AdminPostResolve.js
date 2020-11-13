import React from 'react';

// components
import Header from './Header'

// bootstrap
import { Container, Button } from "react-bootstrap";

const MessageBox = (props) => {
    return (
        <div className='mb-4'>
            <h5 className='text-danger p-2 mb-0 d-inline-block border border-warning border-bottom-0 rounded-top' style={{
                backgroundColor: '#FAF1CD'
            }}>
                <i>{props.userName}'s Message</i>
            </h5>
            <div className='d-block p-4 mt-0 d-inline-block border border-warning rounded-bottom rounded-right' style={{
                backgroundColor: '#FAF1CD'
            }}>
                {props.userMessage}
            </div>
        </div>
    )
}

const AdminPostResolve = (props) => {
    return (
        <>
            <Header/>
            <Container>
                <header className='mt-2'>
                    <h3>
                        Change of lecture timings
                    </h3>
                </header><hr/>
                
                <MessageBox userName={props.location.data.user} userMessage={props.location.data.description} />
                <MessageBox userName='Admin' userMessage='Lorem ipsum dolor sit amet.' />

                <div className='d-flex mb-4'>
                    <Button className='btn btn-danger btn-lg px-5 ml-auto'>
                        Add Reply
                    </Button>
                </div>
            </Container>
        </>
    )
}

export default AdminPostResolve;