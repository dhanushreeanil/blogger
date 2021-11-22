import React from 'react'
import { Link, Route } from 'react-router-dom'

import Home from './Home'
import Users from './Users'
import Posts from './Posts'
import UserShow from './UserShow'
import UserPost from './UserPost'


const App = (props) => {
  return (
    <div>
      <h1> Blogger </h1>
      <ul>
        <li> <Link to="/" > Home </Link> </li>
        <li> <Link to="/users" > Users </Link> </li>
        <li> <Link to="/posts"> Posts </Link> </li>
      </ul>

      <Route path="/" component = { Home } exact = { true } />
      <Route path="/users" component = { Users } exact = { true } />
      <Route path="/posts" component = { Posts } exact = { true } />
      <Route path="/users/:id" component = { UserShow } exact = { true } />
      <Route path="/posts/:id" component = { UserPost } exact = { true } />

    </div>
  )
}

export default App
