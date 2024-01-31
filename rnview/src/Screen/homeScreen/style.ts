import React from "react";
import Styled from "styled-components/native";
import { Background, FontSize, TextColor, Theme, ViewPad } from "../../../theme/Theming";
import { ScrollView } from "react-native";
import styled from "styled-components";

export const AreaView = Styled.SafeAreaView`
background-color: ${Theme.light};
flex: 1;
`;

export const BackButton = Styled.Button`
padding: ${ViewPad.m}px;
`;

export const Container = Styled.View`
align-items: center;
margin-top: 15px;
`;

export const HeadingText = Styled.Text`
font-weight: 700;
font-size: ${FontSize.xl}px;
color: ${TextColor.l_black};
`;

export const FeaturedTag = Styled.View`
padding: ${ViewPad.l}px;
  overflow: scroll;
`;

export const FeatureText = Styled.Text`
font-weight: 500;
font-size: ${FontSize.m}px;
color: ${TextColor.l_black};
`;

