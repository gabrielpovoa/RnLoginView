import React, { useState } from "react";
import * as S from "./Style";
import { ActivityIndicator } from "react-native";
import { TextColor, Theme } from "../../theme/Theming";

type Props = {
  userRegistry: string;
  userPassword: string;
  onHandleRegistryChange: (item: string) => void;
  onHandlePasswordChange: (item: string) => void;
};

export const Screen = ({ userRegistry, userPassword, onHandleRegistryChange, onHandlePasswordChange}:Props) => {
  return (
    <>
      <S.View>
        <S.Label>Enter Your Registry</S.Label>
        <S.Input
          placeholder="Enter your registry"
          value={userRegistry}
          onChangeText={(param) => onHandleRegistryChange(param)}
        />
        <S.Label>Enter Your Password</S.Label>
        <S.Input
          placeholder="Enter your Password"
          value={userPassword}
          onChangeText={(param) => onHandlePasswordChange(param)}
        />
        <S.SubmitButton>
          <S.ButtonText>
          {/* <ActivityIndicator size="small" color={TextColor.d_yellow}/> */}
             Log in 🧀!
            </S.ButtonText>
        </S.SubmitButton>
        <S.RecoveryPassword>
          <S.RecoveryPasswordButton>
            <S.RecoveryPasswordTextButton>Recovery Password</S.RecoveryPasswordTextButton>
          </S.RecoveryPasswordButton>
        </S.RecoveryPassword>
        <S.Footer>
          <S.FooterText>Made my Mr Mouse</S.FooterText>
        </S.Footer>
      </S.View>
    </>
  );
};
