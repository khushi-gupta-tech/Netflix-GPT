import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[18%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='py-6  text-md w-1/4'>{overview}</p>
        <button className='bg-white  text-black px-4 py-3 px-12 text-xl rounded-lg hover:bg-opacity-80'>▶️ Play</button>
        <button className='bg-gray-500 mx-2 text-white py-3 px-4 text-xl bg-opacity-50 rounded-lg'>More Info</button>
    </div>
  )
}

export default VideoTitle