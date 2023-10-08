import "./App.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import MangaPage from "./pages/MangaPage";
import AnimePage from "./pages/AnimePage";
import AnimeInfo from "./pages/AnimeInfo";
import MangaInfo from "./pages/MangaInfo";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="About" />
        <Route element={<MangaPage />} path="Manga" />
        <Route element={<AnimePage />} path="Anime" />
        <Route element={<AnimeInfo />} path="anime/:mal_id" />
        <Route element={<MangaInfo />} path="manga/:mal_id" />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
