import { Text, TouchableOpacity } from "react-native";
import * as S from "./style";
import ratData from "../../../../data/Rat";
import { RatType } from "../../../../types/RatType";
import { FontSize } from "../../../../../theme/Theming";
import { useNavigation } from "@react-navigation/native";

export const ImageItem = ({ id, name, description, image }: RatType) => {
  const navigation = useNavigation();
  const handleReadMore = () => {
    // Navigate to 'ReadMoreScreen' and pass 'id' as a parameter
    navigation.navigate("Details", { id });
  };
  return (
    <>
      <S.ViewList>
        <S.ViewListImage source={image} />
        <S.ListDetail key={id}>
          <S.ViewTextInfo
            style={{ flex: 1, fontWeight: "bold", fontSize: FontSize.m }}
          >
            {name}
          </S.ViewTextInfo>
          <S.ViewTextInfo style={{ flex: 1 }}>{description}</S.ViewTextInfo>
        </S.ListDetail>
        <S.ReadMoreButton onPress={handleReadMore}>
          <S.ReadMoreButtonText>Read More</S.ReadMoreButtonText>
        </S.ReadMoreButton>
      </S.ViewList>
    </>
  );
};
