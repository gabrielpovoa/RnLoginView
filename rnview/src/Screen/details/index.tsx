import React from "react";
import { View } from "../Style";
import { SafeAreaView, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

type DetailsRouteParams = {
  id: string; // Replace 'string' with the actual type of your id
};


const Details = () => {
  const route = useRoute();
  const { id } = route.params as DetailsRouteParams;

  // Here we received the id and taking into account, we will display the poster image on the top using a backgroiund image to display the name of it above the image and display some informations as release year, and sinopse. We will try to get tese from and api

  return (
    <>
      <SafeAreaView>
        <View>
          <Text>Details for ID: {id}</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Details;
