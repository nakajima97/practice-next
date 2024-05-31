"use client";

import { Movie, Movies } from "../../types/type";
import { MovieList } from "../MovieList";
import { MovieModal } from "../MovieModal";
import React from "react";
import { useState } from "react";

export const MovieListContainer = () => {
  const [open, setOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const movies: Movies = [
    {
      id: 1,
      title: "デッドデッドデーモンズデデデデデストラクション 前章",
      synopsis:
        "3年前の8月31日。東京の空に突如巨大母艦が出現し、この世は終わるかに思えた。しかし、母艦が浮かぶ東京の空は日常に溶けこんでいった。そんな東京に住む女子高校生の小山門出と中川凰蘭は、受験勉強に追われながら、毎晩オンラインゲームを楽しんでいた。",
    },
    {
      id: 2,
      title: "デッドデッドデーモンズデデデデデストラクション 後章",
      synopsis:
        "同じ大学に通うことになった門出と「おんたん」は、キャンパスライフを満喫する。その頃、宇宙からの「侵略者」が次々と目撃され、上空には傾いた母艦が現れる。世界の終わりが迫る中、おんたんは再び不思議な少年と出会う。",
    },
    {
      id: 3,
      title: "ウマ娘 プリティーダービー 新時代の扉",
      synopsis:
        "名勝負・伝説のレース・偉大な記録を残した、実在する競走馬の名前と魂を受け継いだ少女たちが切磋琢磨するTVアニメーション『ウマ娘』シリーズが、初の映画化。最強を目指してレースの世界に飛びこんだジャングルポケットが、一生に一度しか走れないレースに挑んでいく。",
    },
  ];

  const handleClick = (movie: Movie) => {
    setOpen(true);
    setSelectedMovie(movie);
  };

  return (
    <>
      <MovieList movies={movies} handleClick={handleClick} />
      {selectedMovie && (
        <MovieModal
          open={open}
          handleClose={() => setOpen(false)}
          movie={selectedMovie}
        />
      )}
    </>
  );
};
