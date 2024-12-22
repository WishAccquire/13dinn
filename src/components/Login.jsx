import React, { useState } from 'react'
import imgsrc from '../images/pexels-cottonbro-4694289.jpg'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { validateorNot } from '../features/Slice'

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

function validateinfo() {
        const info = {
            username: username,
            password: password,
            createdAt: new Date().toISOString(),
        }
        console.log("hello");
        dispatch(validateorNot(info))
        console.log("hello");

        setUsername('');
        setPassword('');
    }

    return (
        <div className='flex flex-row items-center m-h-[1080px] w-[100%] h-[80%] gap-0 border-white bg-black'>

            <div className='w-full  overflow-hidden'>
                <img src={imgsrc} alt="meetup photh" className=' min-w-[75%] h-[91.3vh] ' />
            </div>
            <div className='flex  flex-col gap-y-9 justify-center min-w-[40%]   items-center'>
                <div
                    className=' flex flex-col py-7  gap-y-10 justify-around rounded-2xl  text-left mx-auto text-white px-3 min-w-[60%]   h-[65%]'
                    style={{ backgroundColor: '#1C1C1C' }}>

                    <div className='flex flex-col gap-3'>
                        <h1
                            className='font-bold text-3xl'>
                            Welcome Back!
                        </h1>
                        <p
                            className='font-bold text-sm'>
                            Let's Get You Signed In
                        </p>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <input
                            type="text"
                            placeholder='UserName'
                            className='py-2 px-4  bg-gray-800 rounded-xl hover:bg-gray-950 text-white'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />

                        <input
                            type="password"
                            placeholder='Password'
                            className='py-2 px-4 bg-gray-800 rounded-xl hover:bg-gray-950 text-white '
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div
                            className='flex justify-end text-sm' >
                            <NavLink>Forget Password?</NavLink>
                        </div>
                        <button
                            type='submit'
                            className={`bg-gray-900 py-3 px-4  border-2 border-gray-700 rounded-xl hover:bg-blue-500/100
                            ${username === '' && password === '' ? 'cursor-not-allowed' : 'hover:bg-blue-500/100'
                             }`}
                            
                            onClick={validateinfo}>
                            Login
                        </button>
                    </div>

                </div>

                <div className=' flex flex-row justify-center items-center rounded-2xl  text-left m-auto text-white  min-w-[60%]   py-3 px-3'
                    style={{ backgroundColor: '#1C1C1C' }}>
                    <span>New User? </span>
                    <NavLink to='/signup' className='hover:text-blue-500/100'> SignUp</NavLink>
                </div>
            </div>

        </div>
    )
}

export default Login
