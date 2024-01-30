import React from "react";
import Styled from "styled-components/native";
import { Background, FontSize, TextColor, ViewPad } from "../../theme/Theming";

export const View = Styled.View`
align-items: flex-start;
padding: ${ViewPad.m}px;
width: 100%;
gap: 6px;
`;
export const Label = Styled.Text`
color: ${TextColor.d_white};
font-weight: 500;
`;
export const Input = Styled.TextInput`
padding: 12px;
border-radius: 8px;
background: ${Background.tertiary};
color:${TextColor.l_blue};
width: 100%;
margin-bottom: ${ViewPad.m}px;
`;
export const SubmitButton = Styled.TouchableOpacity`
width: 100%;
align-items: center;
background-color: ${Background.secondary};
padding: ${ViewPad.m}px;
border-radius:8px;
`;
export const ButtonText = Styled.Text`
color:${TextColor.d_white};
font-size: ${FontSize.m};
font-weight: 900;
`;
export const RecoveryPassword = Styled.View`
flex-direction: row;
justify-content: flex-end;
align-items: flex-end;
width:100%;
`;
export const RecoveryPasswordButton = Styled.TouchableOpacity`
margin-top: 10px;
align-items: center;
justify-content: center;
`;
export const RecoveryPasswordTextButton = Styled.Text`
padding: ${ViewPad.m}px;
color: ${TextColor.d_white};
font-size: ${FontSize.s};
`;
export const Footer = Styled.View`
align-self: center;
margin-top: 150px;
`;
export const FooterText = Styled.Text`
color: ${TextColor.d_white};
font-size: ${FontSize.m}px;
`;
