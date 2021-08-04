import React, { useState } from 'react'
import { Button, FormControl } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import './SearchBar.scss'
export const SearchBar = () => {
  const [input, setInput] = useState('')
  const navigate = useNavigate()

  const onSearchClick = (e) => {
    e.preventDefault()
    navigate(`/word/${input}`)
  }

  return (
    <div className="search-section">
      <div className="search-bar-section">
        <FormControl
          onChange={(e) => {
            setInput(e.target.value)
          }}
          className="search-control"
          placeholder="Enter Word"
        />
        <Button
        onClick={onSearchClick}
        disabled={input.length === 0} className="search-button">
          Search
        </Button>
      </div>
      <div className="text-section">
        Didn’t find the word you were looking for? Search here.
      </div>
    </div>
  )
}
