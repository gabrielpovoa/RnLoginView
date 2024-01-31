import React from "react";
import * as S from "./style";
import { useNavigation } from "@react-navigation/native";
import { CarrouseselImage } from "./component/carroussel";
import { ImageItem } from "./component/ImageList";
import { FlatList } from "react-native";
import { SeparatorItem } from "../../separator";
import ratData from "../../data/Rat";

const HomeScreen = () => {
  const { navigate } = useNavigation();

  return (
    <S.AreaView>
      <S.Container>
        <S.HeadingText>Rats 🐀</S.HeadingText>
      </S.Container>
      <S.FeaturedTag>
        <S.FeatureText>Fetured</S.FeatureText>
      </S.FeaturedTag>

      <FlatList
        contentContainerStyle={{ paddingBottom: 20 }}
        ListHeaderComponent={CarrouseselImage}
        ItemSeparatorComponent={SeparatorItem}
        data={ratData}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <ImageItem {...item} />}
      />
    </S.AreaView>
  );
};

export default HomeScreen;
