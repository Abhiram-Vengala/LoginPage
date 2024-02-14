import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

function Signup() {
    const [username, Setusername] = useState('');
    const [password, Setpassword] = useState('');
    const [image , Setimage] = useState('');
     
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        try {
          const response = await axios.post('/api/signup', { username, password });
          formData.append('image',image);
          axios.post('url' , formData).then((res)=>{
            console.log(res)
          })
          console.log(response.data);
          // Handle success
        } catch (error) {
          console.error(error);
          // Handle error
        }
    }
    return (
        <div className='box'>
            <form onSubmit={handleSubmit}>
                <h1> Sign In</h1>
                <input type='text'className='uname' value={username} onChange={(e) => Setusername(e.target.value)} placeholder="Username" />
                <input type='password' className='password' value={password} onChange={(e) => Setpassword(e.target.value)} placeholder="Password" />
                <input type='file' className='img'  onChange={(e)=>Setimage(e.target.files[0])}></input>
                <button className='bttn' type='submit'>Signup</button>
                <nav className='nav'>
                    <Link to="/login"> already a register ? Login</Link>
                </nav>
            </form>
        </div>
    )
}

export default Signup
