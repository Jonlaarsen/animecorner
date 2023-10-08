import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MangaPage = () => {
  const [search, setSearch] = useState("");
  const [mangaList, setMangaList] = useState();

  const fetchManga = async () => {
    const res = await fetch(
      `https://api.jikan.moe/v4/manga?q=${search}&sfw=true`
    );
    const resData = await res.json();
    setMangaList(resData.data);
  };
  useEffect(() => {
    fetchManga(search);
  }, [search]);

  return (
    <>
      <div className="searchContainer">
        <input
          type="search"
          className="input-search"
          placeholder="Search for your manga!"
          onChange={(e) => setSearch(e.target.value)}
        />
        <h1 className="title">Search results</h1>
      </div>
      <h2 className="title">Manga</h2>

      <div className="cardContainer2">
        {mangaList
          ? mangaList.map((manga) => {
              return (
                <Link
                  to={`/manga/${manga.mal_id}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <div key={manga.mal_id} className="card2">
                    <img
                      className="cardImage2"
                      src={manga.images.jpg.large_image_url}
                      alt="animeImage"
                    />
                    <h2>{manga.title}</h2>
                    <h3>{manga.title_japanese}</h3>
                    <h4 className="score">{manga.score}</h4>
                    <div className="synopsis">
                      <h3>plot</h3>
                      <p>{manga.synopsis}</p>
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
export default MangaPage;
