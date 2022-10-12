import React from 'react'

const Sample1 = () => {
    function createMarkup(){
        return {__html:"First &middot;Second"};
    }

    // function MyComponent(){
    //     return <div dangerouslySetInnerHTML={createMarkup()}/>;
    // }
  return (
    <div dangerouslySetInnerHTML={createMarkup()}>
          
        </div>
  )
}

export default Sample1