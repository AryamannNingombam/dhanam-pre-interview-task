import React from 'react'
import './Phonetic.scss'
import volume from '../../assets/svg/volume.svg'
 

export const Phonetic = ({ data }) => {
  const audio = new Audio(data.audio)

  const playAudio = (e) => {
    audio.play()
  }

  return (
    <div className="phonetic-main-div">
      <img className="image" src={volume} onClick={playAudio} />
      <div className="text">
      {data.text}
      </div>
    </div>
  )
}
