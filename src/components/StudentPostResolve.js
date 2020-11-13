import React from 'react';
//import {Link} from 'react-router-dom';
import Header from './Header'
//import Post from './UserMain'

// bootstrap
import {Container} from 'react-bootstrap'

const Resolve = () => {
    return(
        <>
            <Header/>
            <Container className='mt-2'>
                <div>
                    <h3 style={{
                        display:'inline-block'
                    }}>
                        <b>Change Of Lecture Timings</b>
                    </h3>
                </div><hr/>
                <div className='mb-4'>
                    <div>
                        <b>Your Query:</b>
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus viverra accumsan in nisl nisi. 
                    </div>
                </div>
                <div className="mb-4">
                    <div>
                        <b>Admin Reply:</b>
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus viverra accumsan in nisl nisi. 
                    </div>
                </div>
                <hr/>
                <div className='btn btn-success'>Resolved</div>
            </Container>
        </>

    )
}

export default Resolve;