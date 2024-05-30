import { List } from "@mui/material";

import { MovieListItem } from "../MovieListItem";
import { Movies } from "../../types/type";

type Props = {
  movies: Movies;
  handleClick: () => void;
};

export const MovieList = ({ movies, handleClick }: Props) => {
  return (
    <List>
      {movies.map((movie) => (
        <MovieListItem key={movie.id} movie={movie} onClick={handleClick} />
      ))}
    </List>
  );
};
