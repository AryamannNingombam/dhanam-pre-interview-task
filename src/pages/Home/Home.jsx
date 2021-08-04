import React from 'react'
import Hero from '../../components/Home/Hero'
import { SearchBar } from '../../components/Home/SearchBar'
import './Home.scss'


 const Home = () => {
    return (
        <div className="home">
            <Hero/>
            <SearchBar/>
        </div>
    )
}

export default Home;