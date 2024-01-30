import { StatusBar } from "expo-status-bar";
import * as S from "./global/Global";
import { Screen } from "./src/Screen";
import { useState } from "react";
import { ScrollView } from "react-native";

export default function App() {
  const [loginRegistry, setloginRegistry] = useState("");
  const [loginPassWord, setloginPassword] = useState("");

  const handleWithRegistry = (registry: string) => {
    setloginRegistry(registry);
  };
  const handleWithLogin = (password: string) => {
    setloginPassword(password);
  };
  return (
    <ScrollView>
      <S.GlobalAreaView>
        <StatusBar style="dark" />
        <S.View>
          <S.Image source={require("./assets/mouse.png")} />
        </S.View>
        <S.WelcomingView>
          <S.Title>
            Welcome to <S.SpanText>🐀</S.SpanText> login
          </S.Title>
          <S.SubTitle>
            Enter your data to access the <S.SpanText>Cheeseland</S.SpanText>
          </S.SubTitle>
          <Screen
            userRegistry={loginRegistry}
            userPassword={loginPassWord}
            onHandleRegistryChange={handleWithRegistry}
            onHandlePasswordChange={handleWithLogin}
          />
        </S.WelcomingView>
      </S.GlobalAreaView>
    </ScrollView>
  );
}
