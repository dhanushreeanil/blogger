import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UserShow = (props) => {

    const { id } = props.match.params
    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response)=>{
                const result = response.data
                setUser(result)
            })
            .catch((err)=>{
                const error = err.message
                console.log(error) 
            })

        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then((response)=>{
                const result = response.data
                setPosts(result)
            })
            .catch((err)=>{
                const error = err.message
                console.log(error) 
            })
        
    },[])

    return (
        <div>
            <h2> USERNAME - { user.name } </h2>
            <h2> Posts written by { user.name } </h2>

            <ul> 
                { posts.map((post) =>{
                    return <li key={ post.userId }>
                        <Link to={ `` } > { post.title } </Link>     </li>
                }) }
            </ul>

            <Link to="/users" > back </Link>
        </div>
    )
}

export default UserShow