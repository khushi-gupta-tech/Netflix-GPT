import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[16%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='py-6  text-md w-1/4'>{overview}</p>
        <button className='bg-white  text-black px-2 py-2  text-lg rounded-lg hover:bg-opacity-80'>▶️ Play</button>
        <button className='bg-gray-500 mx-2 text-white py-2 px-2 text-lg bg-opacity-50 rounded-lg'>More Info</button>
    </div>
  )
}

export default VideoTitle