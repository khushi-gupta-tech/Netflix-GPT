import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[16%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className=' text-2xl md:text-5xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6  text-md w-1/4'>{overview}</p>
        <div className='my-3 md:my-0'>
        <button className='bg-white  text-black py-1 px-1  md:px-2 md:py-2  text-lg rounded-lg hover:bg-opacity-80'>▶️ Play</button>
        <button className=' hidden md:inline-block bg-gray-500 mx-2 text-white py-2 px-2 text-lg bg-opacity-50 rounded-lg'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle