import React from "react";
import Styled from "styled-components/native";
import { Platform, ScrollView } from "react-native";
import styled from "styled-components";
import {
  Background,
  FontSize,
  TextColor,
  Theme,
  ViewPad,
} from "../../../../../theme/Theming";

export const ViewList = Styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;
gap: 12px;
/* background-color: ${Background.quaternary}; */
margin-top: 25px;
margin-bottom: 10px;
overflow: hidden; 
padding: 10px;
${Platform.OS === 'android' ? 'elevation: 5;' : ''}
  ${Platform.OS === 'ios' ? 'shadow-color: #000; shadow-opacity: 0.3; shadow-radius: 5px;' : ''}
`;

export const ViewListImage = Styled.Image`
width: 120px;
height: 100px;
border-radius:8px;
background-color:${Background.quaternary};
`;

export const ListDetail = Styled.View`
flex-direction: column;
flex: 1 1 0%;
`;

export const ViewTextInfo = Styled.Text`
font-size: ${FontSize.s}px;
color: ${TextColor.l_black};
`;

export const ReadMoreButton = Styled.TouchableOpacity`
padding: ${ViewPad.s}px;
border-radius: 8px;
opacity: 0.7;
align-self: center;
width: 80px;
`;

export const ReadMoreButtonText = Styled.Text`
color: ${TextColor.d_blue};
font-weight: bold;
font-size: ${FontSize.s}px;
text-align: center;
`;
