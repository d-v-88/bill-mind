import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const SignUp = () => {
  return (
    <View>
      <Text>SignUp</Text>
      {/* so when i use parenthesis the folder is not navigated itself it acts as a navigator */}
      <Link href="/(auth)/SignIn">Sign In</Link>
    </View>
  );
};

export default SignUp;
