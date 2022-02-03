import React from "react";
import { useState } from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { query, setQuery } = useGlobalContext();
  const [type, setType] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(type);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <h2>search movies</h2>
      <input
        type="text"
        className="form-input"
        value={type}
        onChange={(e) => setType(e.target.value)}
        // onFocus={}
      />
    </form>
  );
};

export default SearchForm;
