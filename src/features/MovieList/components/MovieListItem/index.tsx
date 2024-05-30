import { ListItemButton, Typography } from "@mui/material";
import { Movie } from "../../types/type";

type Props = {
  movie: Movie;
  onClick: () => void;
};

const MovieListItem = ({ movie, onClick }: Props) => {
  return (
    <ListItemButton onClick={onClick}>
      <Typography>{movie.title}</Typography>
      <Typography>{movie.synopsis}</Typography>
    </ListItemButton>
  );
};

export { MovieListItem };
