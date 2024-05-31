import { ListItemButton, Typography } from "@mui/material";
import { Movie } from "../../types/type";

type Props = {
  movie: Movie;
  onClick: (movie: Movie) => void;
};

const MovieListItem = ({ movie, onClick }: Props) => {
  return (
    <ListItemButton onClick={() => onClick(movie)}>
      <Typography>{movie.title}</Typography>
    </ListItemButton>
  );
};

export { MovieListItem };
