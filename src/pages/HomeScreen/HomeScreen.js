import React from 'react'
import Banner from '../../components/Banner/Banner'
import Nav from '../../components/Nav/Nav'
import Row from '../../components/Row/Row'
import './HomeScreen.css'
import requests from '../../Request'

function HomeScreen() {
  return (
    <div className='homeScreen'>
      <Nav /> 

      <Banner />

      <Row 
      title='Netflix Originals'
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} /> 
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} /> 
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />




    </div>
  )
}

export default HomeScreen