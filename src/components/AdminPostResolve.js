import React from 'react';

// components
import Header from './Header'

// bootstrap
import { Container, Button } from "react-bootstrap";

const MessageBox = (props) => {
    return (
        <div className='mb-4'>
            <h5 className='text-danger p-2 mb-0 d-inline-block' style={{
                backgroundColor: '#FAF1CD',
                border: 'solid 1px #E7B909',
                borderBottom: 'hidden',
                borderTopLeftRadius: '3px',
                borderTopRightRadius: '3px'
            }}>
                <i>{props.userName}'s Message</i>
            </h5>
            <div className='d-block p-4 mt-0 d-inline-block' style={{
                backgroundColor: '#FAF1CD',
                border: 'solid 1px #E7B909',
                borderBottomLeftRadius: '3px',
                borderBottomRightRadius: '3px',
                borderTopRightRadius: '3px'
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