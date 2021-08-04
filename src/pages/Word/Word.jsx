import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import {
  getRandomWordsWithMeanings,
  getWordMeaning,
} from '../../services/words.service'
import './Word.scss'
import { Container } from 'react-bootstrap'
import { Loader } from '../../components/Loader'
import { Phonetic } from '../../components/Word/Phonetic'
import { Meaning } from '../../components/Word/Meaning'

const Word = () => {
  const { word } = useParams()
  const navigate = useNavigate()
  const [loader, setLoader] = useState(true)
  const [allPhonetics, setAllPhonetics] = useState([])
  const [allMeanings, setAllMeanings] = useState([])
  const [otherWords, setOtherWords] = useState([])

  useEffect(() => {
    getWordMeaning(word)
      .then((response) => response.data)
      .then((data) => {
        let tempPhonetics = []
        let tempMeanings = []
        for (let word2 of data) {
          tempPhonetics.push(...word2.phonetics)
          tempMeanings.push(...word2.meanings)
        }
        setAllPhonetics(tempPhonetics)
        setAllMeanings(tempMeanings)
        getRandomWordsWithMeanings(15).then((words) => {
          setOtherWords(words)
          setLoader(false)
        })
      })
      .catch((err) => {
        navigate('/error')
      })
  }, [word])

  const getAllDefinitions = () => {
    const result = []
    for (let meaning of allMeanings) {
      for (let definition of meaning.definitions) {
      
        result.push({ definition, partOfSpeech: meaning.partOfSpeech })
      }
    }
    return result
  }
  const onNavigateWord = (word)=>{
    setLoader(true);
    navigate(`/word/${word}`);
  }

  return (
    <div className="word-page-main-div">
      {loader ? (
        <Container
          fluid
          className="d-flex justify-content-center align-items-center discover-cont"
        >
          <Loader />
        </Container>
      ) : (
        <>
          <div className="first-section">
            <div className="main-heading">{word}</div>
            <div className="phonetics">
              {allPhonetics.map((phonetic,index) => (
                <Phonetic key={index} data={phonetic} />
              ))}
            </div>
            <div className="other-words">
                <span className="heading">OTHER WORDS</span>
                <div className="words">
                    {otherWords.map((word,index)=>(
                        <span key={index} onClick={e=>{onNavigateWord(word.word)}} className="word">
                            {word.word}
                        </span>
                    ))}
                </div>

            </div>
          </div>
          <div className="second-section">
            {allMeanings.length === 0  ? <h1 
            style={{color:"white"}}
            >No Meanings!</h1> : getAllDefinitions().map(({ definition, partOfSpeech },index) => (
              <Meaning
                key={index}
                partOfSpeech={partOfSpeech}
                definition={definition.definition}
                synonyms={definition.synonyms}
                example={definition.example}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Word
