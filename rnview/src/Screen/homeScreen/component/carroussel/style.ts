import React from "react";
import Styled from "styled-components/native";
import { ScrollView } from "react-native";
import styled from "styled-components";
import { ViewPad } from "../../../../../theme/Theming";

export const CarrouselImage = Styled(ScrollView).attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
  })`
  padding: ${ViewPad.m}px;
  flex-direction: row;
  overflow: visible;
  overflow: scroll;
  `;
  
  export const Image = Styled.Image`
  width:280px;
  height:200px;
  border-radius:8px;
  margin-right:15px;
  `;