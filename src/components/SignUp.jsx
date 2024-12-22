import React, { useState } from 'react'
import imgsrc from '../images/pexels-cottonbro-4694289.jpg'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addTheUsers } from '../features/Slice'

function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const[confirm,setConfirm]=useState('');
    const[isActivate,setIsActivate]=useState(false);
    const dispatch = useDispatch();

    const handleConfirmChange = (e) => {
        const confirmPassword = e.target.value;
        setConfirm(confirmPassword);
     
        if (password === confirmPassword) {
          setIsActivate(false); 
        } else {
          setIsActivate(true);  
        }
      };

    function adduser() {
        const info = {
            username: username,
            password: password,
            createdAt: new Date().toISOString(),
        }
        dispatch(addTheUsers(info));

        setConfirm('');
        setPassword('')
        setUsername('');
    }
    

    return (
        <div className='flex flex-row w-[100%] gap-0 justify-center h-[80%] bg-black'>

            <div className='w-full  overflow-hidden'>
                <img src={imgsrc} alt="meetup photh" className='max-h-[100vh] w-[75%]  hide-on-small-screen h-[91.3vh]' />
            </div>
            <div className='flex  flex-col gap-y-9 justify-center m-auto min-w-[40%]   items-center'>
                <div
                    className=' flex flex-col py-7  gap-y-10 justify-around rounded-2xl  text-left mx-auto text-white px-3 min-w-[60%]   h-[65%]'
                    style={{ backgroundColor: '#1C1C1C' }}>

                    <div className='flex flex-col gap-3'>
                        <h1
                            className='font-bold text-3xl'>
                            Welcome To Meet Up!
                        </h1>
                        <p
                            className='font-bold text-sm'>
                            Ready To Meet your Friends...
                        </p>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <input
                            type="text"
                            placeholder='UserName'
                            className='py-2 px-4  bg-gray-800 rounded-xl border-b-2 border-gray-400  hover:bg-gray-950 text-white'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />

                        <input
                            type="password"
                            placeholder='Password'
                            className='py-2 px-4 bg-gray-800 rounded-xl border-b-2 border-gray-400  hover:bg-gray-950 text-white '
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder='Confirm Password'
                            className='py-2 px-4 bg-gray-800 rounded-xl border-b-2 border-gray-400  hover:bg-gray-950 text-white '
                            value={confirm}
                            disabled={password===''}
                            onChange={ handleConfirmChange }
                        />
                        <p className={`text-red-600 text-sm text-center
                            ${isActivate ? 'block' : 'hidden'
                             }`}>Password should be matched </p>
                       
                        <button
                            type='submit'
                            className={`bg-gray-900 py-3 px-4  border-gray-700/50 border-2 rounded-xl hover:bg-blue-500/100
                            ${username === '' || password === '' || confirm==='' || isActivate ? 'cursor-not-allowed' : 'hover:bg-blue-500/100'
                             }`}
                            
                            onClick={adduser}>
                            Sign Up
                        </button>
                        <div className='text-xs text-center'>By Signing Up you agree to <span><NavLink to="#" className='text-red-600 font-bold'>Terms And Condition</NavLink></span> ?</div>
                    </div>

                </div>

                <div className=' flex flex-row justify-center items-center rounded-2xl  text-left m-auto text-white  min-w-[60%]   py-3 px-3'
                    style={{ backgroundColor: '#1C1C1C' }}>
                    <span>Already User? </span>
                    <NavLink to='/login' className='hover:text-blue-500/100'> Login</NavLink>
                </div>
            </div>

        </div>
    )
}

export default SignUp
