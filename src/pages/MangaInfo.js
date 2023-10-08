import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

const MangaInfo = () => {
  const [details, setDetails] = useState(null);
  const { mal_id } = useParams();

  const getDetailsManga = () => {
    fetch(`https://api.jikan.moe/v4/manga/${mal_id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data.data));
  };

  useEffect(() => {
    getDetailsManga();
  }, []);

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
          <div className="info-plot-etc">
            <h3>PLOT</h3>
            <p>{details.synopsis}</p>
          </div>
          <div className="info-extra">
            <p>Score: {details.score}</p>
            <p>Rank: {details.rank}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MangaInfo;
