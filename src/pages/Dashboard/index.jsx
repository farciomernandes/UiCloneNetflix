/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import getMovies from "../../services/GetMovies";
import getDetails from "../../services/GetDetaisMovies";
import { useAuth } from "../../context/AuthContext";

import SlideShow from "../../components/SlideShow";
import Featured from "../../components/FeaturedMovie";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { Lists } from "./styles";

const Dashboard = () => {
  const [movies, setMovies] = useState([]);
  const [featuedData, setFeaturedData] = useState(null);
  const [userIsScroll, setUserIsScroll] = useState("transparent");

  useEffect(() => {
    const getAllMovies = async () => {
      const data = await getMovies.getAll();
      setMovies(data);

      const category = data.filter((movie) => movie.category === "originals");
      const randomMovie = Math.floor(
        Math.random() * category[0].items.results.length - 1
      );

      const movie = category[0].items.results[randomMovie];
      const movieInfo = await getDetails.getDetailsMovie(movie.id, "tv");
      setFeaturedData(movieInfo);
    };

    getAllMovies();
  }, []);

  useEffect(() => {
    const scrolledList = () => {
      if (window.scrollY > 30) {
        setUserIsScroll("#141414");
      } else {
        setUserIsScroll("transparent");
      }
    };

    window.addEventListener("scroll", scrolledList);
    return () => {
      window.removeEventListener("scroll", scrolledList);
    };
  }, []);

  return (
    <div>
      <Header scroll={userIsScroll} />
      {featuedData && <Featured movie={featuedData} />}

      <Lists>
        {movies.map((movie, key) => (
          <SlideShow key={key} title={movie.title} items={movie.items} />
        ))}
      </Lists>
      <Footer />
    </div>
  );
};

export default Dashboard;
