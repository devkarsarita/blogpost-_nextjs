import React from 'react'

const Comment = () => {
  return (
    <>
       {/* style jsx has component level scope to make global scope need to mention global just after jsx */}
    <style jsx global>   
    {`
    .comment{
      
    }
    `}
 
    </style>
    <div className='comment'></div>
    </>
  )
}

export default Comment