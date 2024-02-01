import React from "react";
import Styled from "styled-components/native";
import styled from "styled-components";
import { Background, FontSize, TextColor, Theme, ViewPad } from "../../../theme/Theming";

export const AreaSafe = Styled.View`
flex: 1;
height: 100%;
`;

export const BackgroundAreaImage = Styled.View`
flex: 1;
width: 100%;
position: relative;
`;

export const ImageBackground = Styled.ImageBackground`
width: 100%;
height:300px;
position: relative;
overflow: hidden;
border-bottom-left-radius: 100px;
`;

export const PlayerButton = Styled.TouchableOpacity`
position: absolute;
bottom: 10px;
right: 5px;
padding: 10px;
`;
export const PlayerImageButton = Styled.Image`
margin-right: 30px;
justify-content: flex-end;
width: 40px;
height: 40px;
`;

export const MovieArea = Styled.View`
margin-top: 20px;
padding: ${ViewPad.l}px;
align-items: start;
gap: 10px;
`;

export const MovieName = Styled.Text`
font-weight: bold;
font-size: ${FontSize.l}px;
color: ${TextColor.l_black};
`;

export const RateMovie = Styled.TouchableOpacity`
margin-left: 0px;
`;

export const RateMovieStart = Styled.Text`
font-weight: bold;
font-size: ${FontSize.l}px;
`;

export const Sinopse = Styled.Text`
font-size: ${FontSize.m}px;
margin-top:10px;
color: ${TextColor.l_black};
`;
