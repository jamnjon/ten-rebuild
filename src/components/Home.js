import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import { config } from './utility/Constants'


const Home = (props) => {
const handleClick = () => {
  let url = config.url.BASE_URL + 'logout'
    axios.delete(url, {withCredentials: true})
    .then(response => {
      props.handleLogout()
      props.history.push('/')
    })
    .catch(error => console.log(error))
  }
return (

    <div>
      <Link to='/login'>Log In</Link>
      <br></br>
      <Link to='/signup'>Sign Up</Link>
      <br></br>
      {
        props.loggedInStatus ?
        <Link to='/logout' onClick={handleClick}>Log Out</Link> :
        null
      }
    </div>
  );
};
export default Home;
