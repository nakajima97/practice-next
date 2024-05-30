"use client";

import { Movies } from "../../types/type";
import { MovieList } from "../MovieList";
import React from "react";

export const MovieListContainer = () => {
  const movies: Movies = [
    { id: 1, title: "Movie 1", synopsis: "Synopsis 1" },
    { id: 2, title: "Movie 2", synopsis: "Synopsis 2" },
    { id: 3, title: "Movie 3", synopsis: "Synopsis 3" },
  ];

  const handleClick = () => {
    console.log("clicked");
  };

  return <MovieList movies={movies} handleClick={handleClick} />;
};
