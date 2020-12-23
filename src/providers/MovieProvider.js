import React from "react";
import { applyData } from "utils/applyData";

export const MovieProvider = ({ children }) => {
  const { movies, addMovie, removeMovie } = applyData();

  return (
    <MovieContext.Provider value={{ movies, addMovie, removeMovie }}>
      {children}
    </MovieContext.Provider>
  );
};
