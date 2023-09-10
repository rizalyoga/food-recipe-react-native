import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";

const RecipeListScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16, marginTop: 8 }}>
      <Header headerText={"Hallo Yoga"} headerIcon={"bell-o"} />
      <SearchFilter icon="search" placeholder="enter your favorite recipe" />

      <View>
        <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 6 }}>
          Categories
        </Text>
        <CategoriesFilter />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 6 }}>
          Recipes
        </Text>
        <RecipeCard />
      </View>
    </SafeAreaView>
  );
};

export default RecipeListScreen;
