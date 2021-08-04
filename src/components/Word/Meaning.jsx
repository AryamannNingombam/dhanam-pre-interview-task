import React from 'react'
import './Meaning.scss'

export const Meaning = ({partOfSpeech,definition,example}) => {
    return (
        <div className="meaning-main-div">
            <div className="inside-text">
            <span className="make-bold">Part Of Speech :</span> {partOfSpeech}
            </div>
            <div className="inside-text">
            <span className="make-bold">Definition : </span>{definition}
            </div>
            <div className="inside-text">
            <span className="make-bold">Example : </span>{example}
            </div>
        </div>
    )
}
