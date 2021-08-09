import { Lato_400Regular } from "@expo-google-fonts/lato";
import { rest } from "lodash";
import React from "react";
import { Text, StyleSheet } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { space } from "../../../infrastructure/theme/spacing";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos,
    address = "CSB 10",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily,
  } = restaurant;

  return (
    <>
      <Card elevation={5} style={styles.card}>
        <Card.Content>
          <Title>{name}</Title>
        </Card.Content>
        <Card.Cover
          style={styles.cover}
          source={{ uri: "https://picsum.photos/700" }}
        />
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.bg.secondary,
    fontFamily: Lato_400Regular,
  },
  cover: {
    padding: space.md,
    backgroundColor: colors.bg.secondary,
  },
  title: {
    padding: space.md,
  },
});
