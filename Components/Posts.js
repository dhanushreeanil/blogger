import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Posts = (props) => {

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
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
             <h2> Total Posts - { posts.length } </h2>
            <ul>
                {
                    posts.map((post)=>{
                        return <li 
                            key={post.id}> 
                            <Link to={ `/posts/${post.id}` }> { post.title } </Link> 
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Posts
