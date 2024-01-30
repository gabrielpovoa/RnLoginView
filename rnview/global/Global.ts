import React from "react";
import Styled from "styled-components/native";
import { Background, FontSize, TextColor, Theme, ViewPad } from "../theme/Theming";

export const GlobalAreaView = Styled.SafeAreaView`
align-items: center;
background-color: ${Theme.light};
`;
export const View = Styled.View`
background-color: ${Background.secondary};
border-radius:50%;
width: 100px;
height: 100px;
padding: 10px;
align-items: center;
margin-top: 25px;
`;
export const Image = Styled.Image`
max-width: 100%;
max-height: 100%;
`;
export const WelcomingView = Styled.View`
background: #004BA8;
height: 100%;
width:100%;
margin-top: 40px;
padding: ${ViewPad.l}px;
border-radius: 30px;
align-items: center;
gap: 27px;
`;

export const Title = Styled.Text`
font-size: ${FontSize.l}px;
color: ${TextColor.d_white};
font-weight: 700;

`;
export const SpanText = Styled.Text`
font-size: ${FontSize.m};
color: ${TextColor.d_yellow};
font-weight: 500;
`;
export const SubTitle = Styled.Text`
font-size: ${FontSize.s}px;
color: ${TextColor.d_white};
`;