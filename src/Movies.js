import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { motion } from "framer-motion";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
const Movies = () => {
  const { movies, loading } = useGlobalContext();

  if (loading) {
    return <div className="loading"></div>;
  }
  return (
    // <section className="movies">
    <TransitionGroup component="section" className="movies">
      {movies.map((movie) => {
        const { imdbID: id, Poster: poster, Title: title, Year: year } = movie;
        return (
          <CSSTransition key={id} timeout={500} classNames="alert">
            <Link to={`/movies/${id}`} key={id} className="movie">
              <motion.article
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <img src={poster === "N/A" ? url : poster} alt="" />
                <div className="movie-info">
                  <h4 className="title">{title}</h4>
                  <p>{year}</p>
                </div>
              </motion.article>
            </Link>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
    // </section>
  );
};

export default Movies;
