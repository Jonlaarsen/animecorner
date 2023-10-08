import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AnimePage = () => {
  const [search, setSearch] = useState("");
  const [animeList, setAnimeList] = useState();

  // fetches searched data using search value from the input.

  const fetchAnime = async () => {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime?q=${search}&sfw=true`
    );
    const resData = await res.json();
    setAnimeList(resData.data);
  };

  useEffect(() => {
    fetchAnime(search);
  }, [search]);

  return (
    <>
      <div className="searchContainer">
        <input
          type="search"
          className="input-search"
          placeholder="Search for your anime!"
          onChange={(e) => setSearch(e.target.value)}
        />
        <h1 className="title">Search results</h1>
      </div>
      <h2 className="title">Anime</h2>

      <div className="cardContainer2">
        {animeList
          ? animeList.map((anime) => {
              return (
                <Link
                  to={`/anime/${anime.mal_id}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <div key={anime.mal_id} className="card2">
                    <img
                      className="cardImage2"
                      src={anime.images.jpg.large_image_url}
                      alt="animeImage"
                    />
                    <h2>{anime.title}</h2>
                    <h3>{anime.title_japanese}</h3>
                    <h4 className="score">{anime.score}</h4>
                    <div className="synopsis">
                      <h3>plot</h3>
                      <p>{anime.synopsis}</p>
                    </div>
                  </div>
                </Link>
              );
            })
          : ""}
      </div>
    </>
  );
};

export default AnimePage;
