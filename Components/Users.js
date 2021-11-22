import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Users = (props) => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then((response)=>{
                const result = response.data
                setUsers(result)
            })
            .catch((err)=>{
                const error = err.message
                console.log(error) 
            })
    },[])

    return (
        <div>
            <h2> USERS LIST - { users.length } </h2>
            <ul>
                {
                    users.map((user)=>{
                        return <li 
                            key={user.id}> 
                            <Link to={ `/users/${user.id}` }> { user.name } </Link> 
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Users

