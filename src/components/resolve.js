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
        <Container>
            <div style ={{
                paddingTop:'40px'

            }}>
                <h3 style={{
                    display:'inline-block'
                    
                }}><b>Change Of Lecture Timings</b></h3>
            </div>
        </Container>
        <Container>
        <div style={{
            paddingTop:'30px',
            paddingBottom:'10px',
            fontSize:'21px'
        }}><b>Your Query:</b></div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus viverra accumsan in nisl nisi. 
        </div>
        </Container>
        <br></br>
        <Container style={{
            paddingTop:'80px'
        }}>
        <div style={{
            paddingTop:'30px',
            paddingBottom:'10px',
            fontSize:'21px'

        }}
        ><b>Admin Reply:</b></div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus viverra accumsan in nisl nisi. 
        </div>
        </Container>
        <br></br>
        <Container>
            <div style={{
                paddingTop:'200px',
                paddingLeft:'350px',
                fontSize:'40px',
                color:'green'
            }}>Resolved</div>
        </Container>
        </>

    )
}

export default Resolve;