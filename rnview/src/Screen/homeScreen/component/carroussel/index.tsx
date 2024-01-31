import React from "react";
import { View } from "react-native";
import * as S from "./style";
import ratMovies from "../../../../data/Rat";

export const CarrouseselImage = () => {
  const shuffledMovies = [...ratMovies].sort(() => Math.random() - 0.5);
  const selectedMovies = shuffledMovies.slice(0, 4);

  return (
    <S.CarrouselImage horizontal>
      {selectedMovies.map((movie) => (
        <S.Image key={movie.id} source={movie.image} />
      ))}
    </S.CarrouselImage>
  );
};
