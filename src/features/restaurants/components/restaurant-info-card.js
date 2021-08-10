import { Lato_400Regular } from "@expo-google-fonts/lato";
import { smiley } from "cli-spinners";
import { rest } from "lodash";
import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { colors } from "../../../infrastructure/theme/colors";
import { fonts, fontSizes } from "../../../infrastructure/theme/fonts";
import { space } from "../../../infrastructure/theme/spacing";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos,
    address = "CSB 10",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <>
      <Card elevation={5} style={styles.card}>
        <Card.Cover
          style={styles.cover}
          source={{ uri: "https://picsum.photos/700" }}
        />
        <Title style={styles.title}>{name}</Title>
        <View style={styles.rowStar}>
          {ratingArray.map(() => (
            <SvgXml xml={star} width={20} height={20} />
          ))}
          <View style={styles.open}>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                Closed Temporarily
              </Text>
            )}
            <View style={{ marginLeft: 20 }}>
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </View>
          </View>
        </View>
        <Text style={styles.address}>{address}</Text>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: space.md,
  },
  cover: {
    backgroundColor: "white",
    padding: space.sm,
  },
  title: {
    fontFamily: fonts.body,
    fontSize: fontSizes.body,
  },
  address: {
    fontSize: fontSizes.caption,
    fontFamily: fonts.monospace,
  },
  rowStar: {
    flexDirection: "row",
    alignItems: "center",
  },
  open: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
