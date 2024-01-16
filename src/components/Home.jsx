import React from 'react'
import { Button } from 'flowbite-react';

import { Link } from 'react-router-dom'

export default function Home(props) {
  return (
    <>
    <div>
        <h2 className={`text-2xl md:text-3xl ${props.mode === 'dark'?'text-white':''}`} >Welcome To TextUtils</h2>
        <p className={`mt-5 ${props.mode === 'dark'?'text-white':''}`}>In this website you can modify your text as your wish. You can Uppercase, Lowercase, Remove extra space, make copy with your text.</p>
        <Link to='/modification'>
        <Button className='mt-5' color={`${props.mode === 'dark'?'light':'dark'}`}>Try TextUtils</Button>
        </Link>
    </div>
    </>
  )
}
