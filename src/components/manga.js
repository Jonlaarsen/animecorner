import React from "react";
import { useRef, useEffect, useState } from "react";

const Manga = () => {
  const [mangaData, setMangaData] = useState("");

  const fetchTopManga = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/top/manga`);
    const MangaData = await res.json();
    setMangaData(MangaData.data);
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      fetchTopManga();
    }, 1000);
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
      <h1 className="title">Top Manga</h1>
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
        {mangaData
          ? mangaData.map((manga) => {
              return (
                <div key={manga.mal_id} className="card">
                  <img
                    className="cardImage"
                    src={manga.images.jpg.large_image_url}
                    alt="animeImage"
                  />
                  <h3>{manga.title}</h3>
                  <h4>{manga.title_japanese}</h4>
                </div>
              );
            })
          : "Not Found"}
      </div>
    </>
  );
};

export default Manga;
