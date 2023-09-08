import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";

const RecipeListScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
      <Header headerText={"Hallo Yoga"} headerIcon={"bell-o"} />
      <SearchFilter icon="search" placeholder="enter your favorite recipe" />
    </SafeAreaView>
  );
};

export default RecipeListScreen;
