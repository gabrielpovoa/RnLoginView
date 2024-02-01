import React from "react";
import Styled from "styled-components/native";
import { Background, TextColor, ViewPad } from "../../../../../theme/Theming";
import { Platform } from "react-native";

export const ViewArea = Styled.View`
padding: ${ViewPad.l}px;
flex-direction: row;
gap: 20px;
`;

export const ViewAreaComponent = Styled.View`
background-color: ${Background.quaternary};
padding: 20px;
flex: 1;
border-radius: 12px;
${Platform.OS === "android" ? "elevation: 5;" : ""}
  ${
    Platform.OS === "ios"
      ? "shadow-color: #000; shadow-opacity: 0.3; shadow-radius: 5px;"
      : ""
  }

`;

export const TextComponent = Styled.View`
flex-direction: column;
align-items: center;
gap: 8px;
`;

export const ReleaseDate = Styled.Text`
font-weight: bold;
color: ${TextColor.l_blue};
`;

export const DurationMovie = Styled.Text`
font-weight: bold;
color: ${TextColor.l_blue};
`;
