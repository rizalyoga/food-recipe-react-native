import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";

const RecipeListScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
      <Header headerText={"Hallo Yoga"} headerIcon={"bell-o"} />
      <SearchFilter icon="search" placeholder="enter your favorite recipe" />

      <View>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
        <CategoriesFilter />
      </View>
    </SafeAreaView>
  );
};

export default RecipeListScreen;
