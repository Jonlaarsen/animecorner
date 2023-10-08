import React from "react";
import { useRef, useEffect, useState } from "react";

const Anime = () => {
  const [animeData, setAnimeData] = useState("");

  const fetchTopAnime = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/top/anime`);
    const AnimeData = await res.json();
    setAnimeData(AnimeData.data);
  };

  // const fetchTopAnime = () =>{
  //   console.log(animeData);
  //   fetch(`https://api.jikan.moe/v4/top/anime`)
  //  .then(res => res.json())
  //  .then(data => setAnimeData(data.data))
  // };

  useEffect(() => {
    fetchTopAnime();
  }, []);

  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);

  const sideScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };

  return (
    <>
      <h1 className="title">Top Anime</h1>
      <div className="button-container">
        <button
          className="button"
          onClick={() => {
            sideScroll(elementRef.current, 25, 100, -10);
          }}
          disabled={arrowDisable}
        >
          Left
        </button>
        <button
          className="button"
          onClick={() => {
            sideScroll(elementRef.current, 25, 100, 10);
          }}
        >
          Right
        </button>
      </div>
      <div className="cardContainer" ref={elementRef}>
        {animeData
          ? animeData.map((anime) => {
              return (
                <div key={anime.mal_id} className="card">
                  <img
                    className="cardImage"
                    src={anime.images.jpg.large_image_url}
                    alt="cardImage"
                  />
                  <h3>{anime.title}</h3>
                  <h4>{anime.title_japanese}</h4>
                </div>
              );
            })
          : "Not Found"}
      </div>
    </>
  );
};

export default Anime;
