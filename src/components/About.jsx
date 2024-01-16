import React from 'react'
import { Accordion } from 'flowbite-react';

export default function About(props) {
  return (
    <>
    <div>
    <h2 className={`text-2xl md:text-3xl ${props.mode === 'dark'?'text-white':''}`} >About TextUtils</h2>
        <p className={`mt-5 ${props.mode === 'dark'?'text-white':''}`}>TextUtils is a application where you can modify your text.</p>
    </div>
    
    <div className="py-5 lg:py-10">
    <Accordion collapseAll className={`${props.mode === 'dark'?'bg-[#121212] ':''} `}>
      <Accordion.Panel >
        <Accordion.Title className={`${props.mode === 'dark'?'hover:bg-[#1F2937] text-white bg-[#121212]':''}`}>What is TextUtils?</Accordion.Title>
        <Accordion.Content>
          <p className={`mb-2 text-gray-500 ${props.mode === 'dark'?'text-white':''}`}>
          TextUtils is a website where you can modify your text as your wish. You can Uppercase, Lowercase, Remove extra space, make copy with your text.
          </p>
          
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className={`${props.mode === 'dark'?'hover:bg-[#1F2937] text-white bg-[#121212]':''}`}>Is it cost free ?</Accordion.Title>
        <Accordion.Content>
          <p className={`mb-2 text-gray-500 ${props.mode === 'dark'?'text-white':''}`}>
            Yes, TextUtils is absolutely free of cost.
          </p>
          
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className={`${props.mode === 'dark'?'hover:bg-[#1F2937] text-white bg-[#121212]':''}`}>What is TextUtils main purpose?</Accordion.Title>
        <Accordion.Content>
          
          <p className={`mb-2 text-gray-500 ${props.mode === 'dark'?'text-white':''}`}>
           The main purpose of TextUtils is to modify your text like uppercase, lowercase, remove extra space and so on.
          </p>
          
          
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
    </div>

    </>
  )
}
