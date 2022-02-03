import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_ENDPOINT } from "./context";
import { motion } from "framer-motion";
const SingleMovie = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      x: "150vw",
      opacity: 0,
      transition: { ease: "easeInOut", duration: 0.5 },
    },
  };

  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchMovie = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setMovie(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}&i=${id}`);
  });
  if (loading) {
    return <div className="loading"></div>;
  }
  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="single-movie"
    >
      <img src={poster} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to="/" className="btn">
          back to movies section
        </Link>
      </div>
    </motion.section>
  );
};
export default SingleMovie;
