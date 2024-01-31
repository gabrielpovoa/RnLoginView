import { StatusBar } from "expo-status-bar";
import * as S from "../../../global/Global";
import { Screen } from "../../Screen";
import { useState } from "react";
import { ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [loginRegistry, setloginRegistry] = useState("");
  const [loginPassWord, setloginPassword] = useState("");
  const [showErr, setShowErr] = useState(false);

  const { navigate } = useNavigation();

  const handleWithRegistry = (registry: string) => {
    setloginRegistry(registry);
  };
  const handleWithPassword = (password: string) => {
    setloginPassword(password);
  };

  const handleWithLogin = () => {
    if (loginRegistry.trim() && loginPassWord.trim()) {
      setShowErr(false);
      navigate("HomeScreen");
    } else {
      setShowErr(true);
      setloginRegistry("");
      setloginPassword("");
      navigate("Home");
    }
  };

  return (
    <ScrollView>
      <S.GlobalAreaView>
        <StatusBar style="dark" />
        <S.View>
          <S.Image source={require("../../../assets/mouse.png")} />
        </S.View>
        <S.WelcomingView>
          <S.Title>
            Welcome to <S.SpanText>🐀</S.SpanText> login
          </S.Title>
          <S.SubTitle>
            Enter your data to access the <S.SpanText>Cheeseland</S.SpanText>
          </S.SubTitle>
          {showErr && (
            <S.AlertMessage>
              You need to fill out the fields to proceed litle mouse
            </S.AlertMessage>
          )}
          <Screen
            userRegistry={loginRegistry}
            userPassword={loginPassWord}
            onHandleRegistryChange={handleWithRegistry}
            onHandlePasswordChange={handleWithPassword}
            onHandleLogin={handleWithLogin}
          />
        </S.WelcomingView>
      </S.GlobalAreaView>
    </ScrollView>
  );
};

export default Home;
