import { MovieListContainer } from "@/features/MovieList/components/MovieListContainer";
import { Typography } from "@mui/material";

const Page = () => {
  return (
    <>
      <Typography variant="h3">映画一覧</Typography>
      <MovieListContainer />
    </>
  );
};

export default Page;
