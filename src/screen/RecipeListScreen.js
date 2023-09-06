import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Header from "../components/Header";

const RecipeListScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
      <Header headerText={"Hallo Yoga"} headerIcon={"bell-o"} />
    </SafeAreaView>
  );
};

export default RecipeListScreen;
