import React from "react";
import { Modal, Box, Typography } from "@mui/material";
import { Movie } from "../../types/type";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type Props = {
  open: boolean;
  handleClose: () => void;
  movie: Movie;
};

const MovieModal = ({ open, handleClose, movie }: Props) => (
  <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {movie.title}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        {movie.synopsis}
      </Typography>
    </Box>
  </Modal>
);

export { MovieModal };
