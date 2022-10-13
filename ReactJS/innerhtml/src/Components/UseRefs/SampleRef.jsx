import React from 'react'
import { useRef,useEffect } from 'react';

const SampleRef = () => {

    const inputRef = useRef(null)
    
    useEffect(() => {
        inputRef.current.focus();
        inputRef.current.value = "Hello"
    }, [])
    // The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
  return (
    <div>
        <input type={'text'} ref={inputRef} />

    </div>
  )
}

export default SampleRef;