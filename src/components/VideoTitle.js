import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div>
        <h1>{title}</h1>
        <h1>{overview}</h1>
        <button>Play</button>
        <button>More Info</button>
    </div>
  )
}

export default VideoTitle