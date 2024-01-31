import { Text, TouchableOpacity } from "react-native";
import * as S from "./style";
import ratData from "../../../../data/Rat";
import { RatType } from "../../../../types/RatType";
import { FontSize } from "../../../../../theme/Theming";

export const ImageItem = ({ id, name, description, image }: RatType) => {
  const cars = ratData;

  return (
    <>
      <S.ViewList>
        <S.ViewListImage source={image} />
        <S.ListDetail key={id}>
          <S.ViewTextInfo style={{ flex: 1, fontWeight:'bold', fontSize: FontSize.m }}>{name}</S.ViewTextInfo>
          <S.ViewTextInfo style={{ flex: 1 }}>{description}</S.ViewTextInfo>
        </S.ListDetail>
        <S.ReadMoreButton>
          <S.ReadMoreButtonText>Reade more</S.ReadMoreButtonText>
        </S.ReadMoreButton>
      </S.ViewList>
    </>
  );
};
