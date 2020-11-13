import React, {useState} from 'react';
import {Link} from 'react-router-dom';

// components
import Header from './Header'

// bootstrap
import {Container, Table} from 'react-bootstrap'

const TableRow = (props) => {
    return (
        <tr>
            <td>{props.number}</td>
            <td>{props.title}</td>
            <td>{props.description}</td>
            <td>{props.category}</td>
            <td>{props.studentName}</td>
            <td>
                <Link to={{
                    pathname: '/admin/post',
                    data: {
                        user: props.studentName,
                        description: props.description
                    }
                }}>
                    <button
                        className={(props.status==='Success') ? 'btn btn-success btn-block' : (props.status==='Awaiting Response') ? 'btn btn-warning btn-block' : 'btn btn-danger btn-block'}
                    >
                        {props.status}
                    </button>
                </Link>
            </td>
        </tr>
    )
}

const AdminMain = () => {
    const posts = [
        {
            title: 'Change of time table',
            description: 'Lorem ipsum dolor sit amet',
            category: 'Academics',
            studentName: 'Abhishek Mishra',
            status: 'Success'
        },
        {
            title: 'Change of time table',
            description: 'Lorem ipsum dolor sit amet',
            category: 'Placements',
            studentName: 'Sarvesh Dalvi',
            status: 'Awaiting Response'
        },
        {
            title: 'Change of time table',
            description: 'Lorem ipsum dolor sit amet',
            category: 'Examination',
            studentName: 'Devansh Tailor',
            status: 'Pending'
        },
        {
            title: 'Fee payment',
            description: 'Lorem ipsum dolor sit amet',
            category: 'Fees',
            studentName: 'Tony Stark',
            status: 'Success'
        }
    ]

    const [postArray, setPostArray] = useState([]);

    const getPosts = () => {
        setPostArray(posts);
    }

    return (
        <>
            <Header/>
            <Container>
                {/* {console.log(postArray)} */}
                <header className='mt-2'>
                    <h3>
                        Top Grievances
                    </h3><hr/>
                    <div className='my-2'>
                        <button className='btn btn-danger' onClick={getPosts}>
                            Get Posts
                        </button>
                    </div>
                    <Table responsive bordered hover>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Student Name</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                postArray.map((item, index) => <TableRow key={index} number={index+1} title={item.title} description={item.description} category={item.category} studentName={item.studentName} status={item.status} />)
                            }
                        </tbody>
                    </Table>
                </header>
            </Container>
        </>
    )
}

export default AdminMain;