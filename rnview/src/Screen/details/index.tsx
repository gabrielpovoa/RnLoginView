import React, { useEffect, useState } from "react";
import { View } from "../Style";
import { SafeAreaView, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import * as S from "./style";
import ratMovies from "../../data/Rat";
import { RatType } from "../../types/RatType";
import { MovieDetail } from "../homeScreen/component/MovieDetail";
import { SeparatorItem } from "../../separator";

type DetailsRouteParams = {
  id: number; // Replace 'string' with the actual type of your id
};

const Details = () => {
  const route = useRoute();
  const { id } = route.params as DetailsRouteParams;
  const [movieDetails, setMovieDetails] = useState<RatType | undefined>();
  // !undefined

  useEffect(() => {
    const details = ratMovies.find((movie) => movie.id === id);
    setMovieDetails(details);
  }, [id]);

  return (
    <>
      <S.AreaSafe>
        <S.BackgroundAreaImage>
          {movieDetails && (
            <S.ImageBackground source={movieDetails.image}>
              <S.PlayerButton>
                <S.PlayerImageButton
                  source={require("../../../assets/player.png")}
                />
              </S.PlayerButton>
            </S.ImageBackground>
          )}
          <S.MovieArea>
            <S.MovieName>{movieDetails?.name}</S.MovieName>
            <S.RateMovie>
              <S.RateMovieStart>⭐⭐⭐</S.RateMovieStart>
            </S.RateMovie>
            <S.Sinopse>
              {movieDetails?.description} Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Debitis asperiores natus deleniti
              ratione doloribus fuga. Culpa numquam unde veritatis. Ut.
            </S.Sinopse>
          </S.MovieArea>
          <SeparatorItem />
          <MovieDetail />
        </S.BackgroundAreaImage>
      </S.AreaSafe>
    </>
  );
};

export default Details;
