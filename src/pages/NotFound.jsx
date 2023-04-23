import React from 'react'

const NotFound = () => {
  return (
    <>
      <div className='not-found flex h-[65vh] justify-center items-center'>
        <span className='border-r-2 h-10 border-black text-3xl font-bold pr-2 flex items-center
         dark:text-gray-100 dark:border-gray-100'>404</span>
        <h2 className='pl-2 text-2xl text-gray-500'>This page could not be found.</h2>
      </div>

    </>
  )
}

export default NotFound