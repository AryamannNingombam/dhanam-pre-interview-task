import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Error.scss';


 const Error = () => {
    return (
        <div className="error-page-main-container">
                <div className="not-found-heading">NOT FOUND</div>
                <div className="subtitle-text">We could not find the word you searched for</div>
                <Link to="/">
                <Button className="home-button">Home</Button>
                </Link>
                
        </div>
    )
}
export default Error;