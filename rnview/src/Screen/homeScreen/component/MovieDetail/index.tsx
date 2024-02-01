import { SafeAreaView, View } from "react-native";
import * as S from "./style";

export const MovieDetail = () => {
  return (
    <SafeAreaView>
      <S.ViewArea>
        <S.ViewAreaComponent>
          <S.TextComponent>
            <S.ReleaseDate>Release Date</S.ReleaseDate>
            <S.ReleaseDate>01/02/2024</S.ReleaseDate>
          </S.TextComponent>
        </S.ViewAreaComponent>
        <S.ViewAreaComponent>
          <S.TextComponent>
            <S.DurationMovie>Duration</S.DurationMovie>
            <S.DurationMovie>2h43min</S.DurationMovie>
          </S.TextComponent>
        </S.ViewAreaComponent>
      </S.ViewArea>
    </SafeAreaView>
  );
};
