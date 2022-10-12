import React from 'react'
import { useRef,useEffect } from 'react';

const SampleRef = () => {

    const inputRef = useRef(null)
    
    useEffect(() => {
        inputRef.current.focus();
        inputRef.current.value = "Hello"
    }, [])
    // UseRef hook is used to imperatively access the DOM nodes in the components.However it is not the only use, there are many
  return (
    <div>
        <input type={'text'} ref={inputRef} />

    </div>
  )
}

export default SampleRef;