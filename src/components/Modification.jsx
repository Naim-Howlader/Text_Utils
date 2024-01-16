import React from 'react';
import { useState } from 'react';
import { Button } from 'flowbite-react';
import { Label, Textarea } from 'flowbite-react';

export default function Modification(props) {

    const [text,setText] = useState('');
    


    const uppercaseHandler=()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.alert('Text converted to uppercase','success');
    }
    const lowercaseHandler=()=>{
      let newText = text.toLowerCase();
      setText(newText);
      props.alert('Text converted to lowercase','success');
    }
    const copyTextHandler=()=>{
      navigator.clipboard.writeText(text);
      props.alert('Text copied to clipboard','success');
    }
    const capitalizeHandler=()=>{
      let input = text;
      let sentences = input.split(/\. /);
      let capitalizedSentences = sentences.map(function(sentence) {
        return sentence.charAt(0).toUpperCase() + sentence.slice(1);
      });
      let result = capitalizedSentences.join('. ');

      setText(result);
      props.alert('Text capitalized','success');
    }
    const clearTextHandler=()=>{
      setText('');
    }
    const changeHandler=(event)=>{
        setText(event.target.value);
    }
  return (
    <>
    <div>
        <h2 className={`text-2xl md:text-3xl ${props.mode === 'dark'?'text-white':''}`}>TextUtils Modification</h2>
        <p className={`mt-5 ${props.mode === 'dark'?'text-white':''}`}>In this belowed box you simpley put your text and select your choice with the text you want to do.</p>
    </div>
    <div className="w-ful md:w-10/12 mt-5">
      <div className="mb-2 block">
      </div>
      <Textarea placeholder='Enter Your Text' className={`${props.mode === 'dark'?'bg-gray-100':''}`} value={text} required rows={8} onChange={changeHandler}/>
      <div className='grid grid-cols-12'>
      <div className='col-span-12 md:col-span-6'>
        <div className='mt-5 flex gap-x-2'>
        <Button  color={`${props.mode === 'dark'?'light':'dark'}`} onClick={uppercaseHandler}>Uppercase</Button>
        <Button  color={`${props.mode === 'dark'?'light':'dark'}`} onClick={lowercaseHandler}>Lowercase</Button>
        <Button  color={`${props.mode === 'dark'?'light':'dark'}`} onClick={capitalizeHandler}>Capitalize</Button>
        </div>
        <div className='mt-3 flex gap-x-2'>
        <Button  color={`${props.mode === 'dark'?'light':'dark'}`} onClick={copyTextHandler}>Copy Text</Button>
        <Button  color={`${props.mode === 'dark'?'light':'dark'}`} onClick={clearTextHandler}>Clear Text</Button>
        </div>
      </div>

      <div className='col-span-12 md:col-span-6'>
        <h2 className={`text-xl font-semibold my-3 ${props.mode==='dark'?'text-white':''}`}>Text Summary</h2>
        <p className={` ${props.mode==='dark'?'text-white':''}`}>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
        <h2 className={`text-xl font-semibold my-3 ${props.mode==='dark'?'text-white':''}`}>Text Preview</h2>
        <p className={` ${props.mode==='dark'?'text-white':''}`}>{text.length>0?text:'Write something in the above Text Box to preview here.'}</p>
      </div>
      </div>
    </div>
    </>
  )
}
