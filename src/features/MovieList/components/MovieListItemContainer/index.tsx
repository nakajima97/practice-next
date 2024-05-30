import { Movie } from "../../types/type";
import { MovieListItem } from "../MovieListItem";

const MovieListItemContainer = (movie: Movie) => {
  const handleClick = () => {
    console.log("clicked");
  };

  return <MovieListItem movie={movie} onClick={handleClick} />;
};

export { MovieListItemContainer };
