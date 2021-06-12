import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Col,Row} from 'react-bootstrap'
import UserCard from './UserCard'


function UserList() {
    const [listOfUSer, setListOfUSer] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(()=> {
        getUsers();
    },[])

    const getUsers = async () => {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log(res)
            setListOfUSer(res.data)
            setLoading(true)
        }
        catch (err){
            console.log(err)
            alert(err.message)
        }
    }
    /** useEffect(()=> {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(res => {setListOfUSer(res.data)})
                .catch (err =>{console.log(err)})
        },[]) */

    return (
        <div>
            <Row>
                {
                  loading &&  listOfUSer.map(user => 
                        <Col sm={12} md={6} lg={4} key={user.id}> 
                            <UserCard user={user}/>
                        </Col>)
                }
            </Row>
        </div>
    )
}

export default UserList
