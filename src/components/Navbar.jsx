import React from 'react';
import '../assets/css/active.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { ToggleSwitch } from 'flowbite-react';
//activeClassName="active"
const activeLink = 'text-blue-500';
const normalLink = '';
const Navbar = (props) => {
    

  return (
    <>
    <nav className={`${props.mode==='dark'?'bg-[#121212] border-b border-gray-500':'bg-gray-50'}  `}>
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a  className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className={`self-center text-2xl font-semibold whitespace-nowrap ${props.mode==='dark'?'text-white':''}`}>TextUtils</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className={`font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:${props.mode==='dark'?'bg-[#121212]':'bg-gray-50'}`}>
            <li>
            <NavLink to="/" className={`block py-2 px-3 ${props.mode==='dark'?'text-white':'text-gray-800'} rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 `} >Home</NavLink>
            </li>
            <li>
            <NavLink to="/modification" className={`block py-2 px-3 ${props.mode==='dark'?'text-white':'text-gray-800'} rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0`} >Modification</NavLink>
            </li>
            <li>
            <NavLink to="/about" className={`block py-2 px-3 ${props.mode==='dark'?'text-white':'text-gray-800'} rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0`} >About</NavLink>
            </li>
            <li>
            <label className="relative inline-flex items-center mb-5 cursor-pointer">
            <input type="checkbox" value="" onChange={props.modeFunction} className="sr-only peer"/>
            <div className={`w-11 h-6 bg-gray-300 peer-focus:outline-none  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] ${props.mode==='dark'?'after:bg-black':'after:bg-white'} after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all  peer-checked:bg-white`}></div>
            <span className={`ms-3 text-sm font-medium ${props.mode==='dark'?'text-white':'text-gray-900'}`}>{props.modeText}</span>
            </label>
            </li>
            
        </ul>
        </div>
    </div>
    </nav>
    </>
  )
}

export default Navbar
