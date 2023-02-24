import React, {useEffect, useState} from 'react'
import './Banner.css'
import axios from '../../axios'
import requests from '../../Request'

function Banner() {

    const [movie, setMovie] = useState([])

    useEffect( () => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[ Math.floor(Math.random() * (request.data.results.length - 1))])
            return request;
        }
        fetchData()
    },[])

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string
    }

  return (
    <div className='banner' style={{
        backgroundSize: "cover",
        backgroundImage: `${movie.backdrop_path !== undefined && `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')` }`,
        backgroundPosition: "center center",
    }}>

        <div className='banner__contents'>
            <h1 className='banner__title'>{movie?.name || movie?.original_name || movie.title}</h1>
            <div className='banner__buttons'>
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
                <h1 className='banner__description'>
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
        </div>
        
        <div className='banner--fadeBottom' />
    </div>
  )
}

export default Banner