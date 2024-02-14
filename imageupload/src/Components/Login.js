import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [username, Setusername] = useState('');
    const [password, Setpassword] = useState('');
    const [image , Setimage] = useState('');

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        try {
          const response = await axios.post('/api/login', { username, password });
          // Assuming your backend returns a token upon successful login
          localStorage.setItem('token', response.data.token);
          formData.append('image',image);
          axios.post('url' , formData).then((res)=>{
            console.log(res)
          })
        } catch (error) {
          console.error(error);
        }
    }
    return (
        <div className='box'>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input type='text'className='uname' value={username} onChange={(e) => Setusername(e.target.value)} placeholder="Username" />
                <input type='password' className='password' value={password} onChange={(e) => Setpassword(e.target.value)} placeholder="Password" />
                <input type='file' className='img'  onChange={(e)=>Setimage(e.target.files[0])}></input>
                <button className='bttn' type='submit'>login</button>
                <nav className='nav'>
                    <Link to="/">New user ? Signup</Link>
                </nav>
            </form>
        </div>
    )
}

export default Login
