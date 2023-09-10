import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  Pressable,
  ScrollView,
} from "react-native";

const RecipeDetailScreen = ({ navigation, route }) => {
  const { item } = route.params;

  return (
    <View style={{ backgroundColor: item.color, flex: 1 }}>
      <SafeAreaView
        style={{
          flexDirection: "row",
          marginHorizontal: 12,
          justifyContent: "space-between",
          marginTop: 38,
        }}
      >
        <Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-circle-left" size={28} color={"white"} />
        </Pressable>

        <FontAwesome name="heart-o" size={28} color={"white"} />
      </SafeAreaView>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          marginTop: 240,
          borderTopLeftRadius: 56,
          borderTopRightRadius: 56,
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: 300,
            width: 300,
            position: "absolute",
            top: -150,
          }}
        >
          <Image
            source={item.image}
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          />
        </View>

        <View style={{ marginHorizontal: 16 }}>
          {/* Recipe Title */}
          <Text
            style={{
              marginTop: 160,
              fontSize: 28,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {item.name}
          </Text>

          <View style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {/* Recipe Description */}
              <Text
                style={{
                  fontSize: 20,
                  marginVertical: 16,
                  textAlign: "justify",
                }}
              >
                {item.description}
              </Text>

              {/* Recipe Extra Details */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    backgroundColor: "orange",
                    width: "30%",
                    paddingVertical: 20,
                    borderRadius: 8,
                    alignItems: "center",
                    backgroundColor: "#EE898A",
                  }}
                >
                  <Text style={{ fontSize: 40 }}>⏰</Text>
                  <Text style={{ fontSize: 20, fontWeight: "400" }}>
                    {item.time}
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "orange",
                    width: "30%",
                    paddingVertical: 20,
                    borderRadius: 8,
                    alignItems: "center",
                    backgroundColor: "#8DC7DD",
                  }}
                >
                  <Text style={{ fontSize: 40 }}>💫</Text>
                  <Text style={{ fontSize: 20, fontWeight: "400" }}>
                    {item.difficulty}
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "orange",
                    width: "30%",
                    paddingVertical: 20,
                    borderRadius: 8,
                    alignItems: "center",
                    backgroundColor: "#EFC076",
                  }}
                >
                  <Text style={{ fontSize: 40 }}>🔥</Text>
                  <Text style={{ fontSize: 20, fontWeight: "400" }}>
                    {item.calories}
                  </Text>
                </View>
              </View>

              {/* Recipe Ingresdients */}
              <View style={{ alignItems: "flex-start", marginVertical: 22 }}>
                <Text
                  style={{ fontSize: 20, fontWeight: "700", marginVertical: 8 }}
                >
                  Ingredients :
                </Text>

                {item.ingredients.map((ingredient, index) => (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginVertical: 4,
                    }}
                    key={index}
                  >
                    <View
                      style={{
                        backgroundColor: "red",
                        height: 10,
                        width: 10,
                        borderRadius: 5,
                      }}
                    ></View>
                    <Text style={{ fontSize: 18, marginLeft: 6 }}>
                      {ingredient}
                    </Text>
                  </View>
                ))}
              </View>

              {/* Recipe Steps */}
              <View style={{ paddingBottom: 20 }}>
                <Text
                  style={{ fontSize: 20, fontWeight: "700", marginBottom: 8 }}
                >
                  Step Cooking :
                </Text>

                {item.steps.map((step, index) => (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                    }}
                    key={index}
                  >
                    <Text style={{ fontSize: 22 }}>{"\u2022"}</Text>
                    <Text
                      style={{
                        fontSize: 18,
                        marginLeft: 6,
                        marginVertical: 4,
                        flex: 1,
                      }}
                    >{`${step}`}</Text>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RecipeDetailScreen;
