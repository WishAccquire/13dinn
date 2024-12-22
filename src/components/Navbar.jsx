import React from 'react'
import imgsrc from "../images/keyboard_double_arrow_down_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
import { Link, NavLink } from 'react-router-dom'
import './Signup.css'

function Navbar() {
    return (
        <div className=' flex m-auto text-white justify-between items-center py-3 px-3 height-[20vh] w-[100%] bg-black'>
            <NavLink to='/' className='flex gap-2 items-center'>
                <img src={imgsrc} alt="key cown" className='h-[100%]' />
                <h1 className='font-bold font-serif text-3xl'>MEET UP</h1>

            </NavLink >


            <div className='flex justify-between gap-3 hide-on-small-screen font-bold'>
                <div className='group space-y-1'>
                <NavLink to="/" className=' hover:text-gray-700'>Home</NavLink>
                <div className='w-full group-hover:bg-gray-500 h-[0.15rem] group'></div>
                </div>
                
                <div className='group space-y-1'>
                <NavLink to="#" className=' hover:text-gray-700'>Places</NavLink>
                <div className='w-full group-hover:bg-gray-500 h-[0.15rem] group'></div>
                </div>
                <div className='group space-y-1'>
                <NavLink to="#" className=' hover:text-gray-700'>Overview</NavLink>
                <div className='w-full group-hover:bg-gray-500 h-[0.15rem] group'></div>
                </div>
                <div className='group space-y-1'>
                <NavLink to="#" className=' hover:text-gray-700'>Friends</NavLink>
                <div className='w-full group-hover:bg-gray-500 h-[0.15rem] group'></div>
                </div>
                <div className='group space-y-1'>
                <NavLink to="#" className=' hover:text-gray-700'>Support</NavLink>
                <div className='w-full group-hover:bg-gray-500 h-[0.15rem] group'></div>
                </div>
            </div>

            <div className='flex justify-between gap-4'>
                <button className='bg-gray-800 p-2  rounded-lg text-gray-400 hover:bg-gray-900'><Link to='/login' >LogIn</Link></button>
                <button className='bg-blue-500/100 p-2 rounded-lg hover:bg-blue-600'><Link to='/signup'>SignUp</Link></button>
            </div>

        </div>
    )
}

export default Navbar
