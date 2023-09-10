import React from "react";
import { View, FlatList, Image, Text, Pressable } from "react-native";
import { recipeList, colors } from "../Constant";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RecipeCard = () => {
  const { navigate } = useNavigation();

  return (
    <View style={{ marginVertical: 8, flex: 1 }}>
      <FlatList
        data={recipeList}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigate("RecipeDetail", { item: item })}
            style={{
              backgroundColor: colors.COLOR_LIGHT,
              borderRadius: 16,
              marginVertical: 8,
              alignItems: "center",
              elevation: 3,
              paddingHorizontal: 11,
              paddingVertical: 26,
            }}
          >
            <Image
              style={{
                width: 150,
                height: 150,
                resizeMode: "center",
              }}
              source={item.image}
            />
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 16, fontWeight: "700" }}>
                {item.name}
              </Text>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  marginTop: 2,
                  gap: 4,
                }}
              >
                <Text>{item.time}</Text>
                <Text> | </Text>
                <FontAwesome
                  name="star"
                  size={16}
                  color={colors.COLOR_PRIMARY}
                />
                <Text>{item.rating}</Text>
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default RecipeCard;
