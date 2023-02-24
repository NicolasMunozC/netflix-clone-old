import React from 'react'
import Banner from '../../components/Banner/Banner'
import Nav from '../../components/Nav/Nav'
import Row from '../../components/Row/Row'
import './Home.css'
import requests from '../../Request'
import Footer from '../../components/Footer/Footer'

function HomeScreen() {
  return (
    <div className='homeScreen'>
      <Nav /> 

      <Banner />

      { requests &&
              <>
              <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
              <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
              <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} /> 
              <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
              <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} /> 
              <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
              </>
      }


      <Footer />

    </div>
  )
}

export default HomeScreen