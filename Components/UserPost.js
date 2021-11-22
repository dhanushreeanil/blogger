import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UserPost = (props) => {

    const { id } = props.match.params
    const [user, setUser] = useState({})
    const [userName, setUserName] = useState('')
    const [comments, setComments] = useState([])
    const [isReceived, setIsReceived] = useState(false)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response)=>{
                const result = response.data
                setUser(result)
                setIsReceived(true)
            })
            .catch((err)=>{
                const error = err.message
                console.log(error) 
            })

            axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then((response)=>{
                const result = response.data
                setComments(result)
            })
            .catch((err)=>{
                const error = err.message
                console.log(error) 
            })
    },[])

    useEffect(()=>{
        if(isReceived){
            axios.get(`https://jsonplaceholder.typicode.com/users/${user.userId}`)
                .then((response)=>{
                    const result = response.data.name
                    setUserName(result)
                })
                .catch((err)=>{
                    const error = err.message
                    console.log(error) 
                })
        }
    },[isReceived])
 
    return (
        <div>
            <h2> USERNAME - { userName } </h2>
            <h3> TITLE : { user.title } </h3>
            <h3> BODY : <br/> { user.body } </h3>
            <hr/>
            <h2>COMMENTS</h2>
            <ul>
                { comments.map((comment) =>{
                    return <li key={ comment.id } > { comment.body } </li>
                }) }
            </ul>
            <hr/>
            <Link to={ `/users/${user.userId}` }> More posts of author - { userName } </Link>
        </div>
    )
}

export default UserPost
