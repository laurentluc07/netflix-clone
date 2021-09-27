import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Banner.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import requests from '../config/Requests';
import axios from 'axios';
import QuickView from "./QuickView";
// import YouTube from 'react-youtube';
// import movieTrailer from 'movie-trailer';


function Banner() {

  const [ movie, setMovie ] = useState([]);
  const [popup, setPopup] = useState(false);
  // const [trailerUrl, setTrailerUrl] = useState("");

  function handleClickPopup() {
    popup ? setPopup(false) : setPopup(true);
  }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending)

      setMovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
    }
    fetchData()
  }, [])

  function truncateText(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string
  }

  const bannerStyle = {
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  }
  //   const opts = {
  //   height: "390",
  //   width: "100%",
  //   playerVars: {
  //     autoplay: 0,
  //   }
  // }

  // const handleClick = (movie) => {
  //   // console.table(movie?.title)
  //   if (trailerUrl) {
  //     setTrailerUrl('')
  //   } else {
  //     movieTrailer(movie?.title || "")
  //       .then(url => {
  //         const urlParams = new URLSearchParams(new URL(url).search);
  //         setTrailerUrl(urlParams.get('v'));
  //       }).catch((error) => console.log(error));
  //   }
  // }


  console.log(popup);


  return (
    <header className="banner" style={bannerStyle}>
      <div className="banner__content">
        <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_title}</h1>
        <p className="banner__description">
          {truncateText(movie?.overview, 100)}
        </p>
        <div className="banner__buttons">
          <Link to={`/video/${movie?.id}`}>
            <button className="banner__button banner__button--play"><PlayArrowIcon />Lecture</button>
          </Link>
          <button className="banner__button" onClick={handleClickPopup}><HelpOutlineIcon />Plus d'infos</button>
        </div>
      </div>
      <QuickView
      bannerStyle={bannerStyle}
      movie={movie}
      popup={handleClickPopup}
      popupStatus={popup}/>
    </header>
  )
}

export default Banner
