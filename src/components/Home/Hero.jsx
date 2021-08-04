import React, { useState, useRef, useEffect } from 'react'
import { getRandomWordsWithMeanings } from '../../services/words.service'
import { Button, Container, FormControl } from 'react-bootstrap'
import { Loader } from '../Loader'
import leftArrow from '../../assets/svg/left-arrow.svg'
import rightArrow from '../../assets/svg/right-arrow.svg'
import './Hero.scss'
import { useNavigate } from 'react-router'

const Hero = () => {
  const [slides, setSlides] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();
  useEffect(() => {
    getRandomWordsWithMeanings(20)
      .then((words) => {
        setSlides(words)

        setLoading(false)
      })
      .catch((err) => {
        console.log('ERROR')
      })
  }, [])

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (slides.length !== 0) {
      setInterval(() => {

        setCurrent((current + 1) % slides.length)
      }, 4000)
    }
  }, [slides])
  const onNavigateClick = (word)=>{
    navigate(`/word/${word}`);
  }


  
  return (
    <div className="hero-main-container">
      {loading ? (
        <Container
          fluid
          className="d-flex justify-content-center align-items-center discover-cont"
        >
          <Loader />
        </Container>
      ) : (
        <>

        <div className="words-main-container">
        
          <span onClick={(e)=>{onNavigateClick(slides[current].word)}} className="words-main-word">{slides[current].word}</span>

          <div onClick={(e)=>{onNavigateClick(slides[current].word)}} className="info-section">
            <span className="info phonetics">
              PHONETICS : {slides[current].phonetics.length}
            </span>
            <span className="info meanings">
              MEANINGS : {slides[current].meanings.length}
            </span>
          </div>
          <div className="toggle-section">
            <img
            className="toggle-button"
              src={leftArrow}
              onClick={(e) => {
                if (current === 0) {
                  setCurrent(slides.length - 1)
                } else {
                  setCurrent(current - 1)
                }
              }}
            
            />
            <img
            className="toggle-button"
              src={rightArrow}
              onClick={(e) => {
                setCurrent((current + 1) % slides.length)
              }}
             
            />
          </div>
        </div>
              
        </>
      )}
    </div>
  )
}

export default Hero
