import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

// code to fetch the pressed anime and show it on a new page

const AnimeInfo = () => {
  const [details, setDetails] = useState(null);
  const { mal_id } = useParams();
  const playerRef = useRef(null);

  //fetching chosen anime using mal_id

  const getDataAnime = () => {
    fetch(`https://api.jikan.moe/v4/anime/${mal_id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data.data));
  };

  useEffect(() => {
    getDataAnime();
  }, []);

  //makes sure that details is filled before running code

  if (!details) return null;

  return (
    <>
      <div className="info-container">
        <h1 className="title">{details.title}</h1>
        <div className="info-card">
          <img
            className="details-img"
            src={details.images.jpg.large_image_url}
            alt="detailsPoster"
          ></img>
          <h2>{details.title_japanese}</h2>
          <h2>Type: {details.type}</h2>
          <div className="Trailer">
            <ReactPlayer
              ref={playerRef}
              url={details.trailer.url}
              controls={true}
            />
          </div>
          <div className="info-plot-etc">
            <h3>PLOT</h3>
            <p>{details.synopsis}</p>
          </div>
          <div className="info-extra">
            <p>score: {details.score}</p>
            <p>rank: {details.rank}</p>
            <p>{details.rating}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimeInfo;

//  <div className='AnimeInfo-container'>
//       <h1 className='title'>{details.title}</h1>
//       <div className='AnimeInfo-Card'>
//        <img src={details.image.jpg.large_image_url}></img>
//         <h2>{details.title_japanese}</h2>
//         <h2>Type: {details.type}</h2>
//         <div className='Trailer'>
//         <ReactPlayer ref={playerRef} url={details.trailer.url} controls={true} />
//         </div>
//         <p>{details.score}</p>
//         <p>{details.rank}</p>
//         <p>{details.rating}</p>
//         <p>{details.genres.map}</p>
//       </div>
//     </div>
