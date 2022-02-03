import React from "react";
import Form from "./SearchForm";
import Movies from "./Movies";
import { motion } from "framer-motion";
const Home = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Form />
      <Movies />
    </motion.main>
  );
};

export default Home;
