import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import styled from "styled-components/native";

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { fonts, fontSizes } from "../../../infrastructure/theme/fonts";
import { space } from "../../../infrastructure/theme/spacing";

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const Title = styled(Text)`
  padding: 16px;
  color: red;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    //icon,
    //photos,
    address = "CSB 10",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <>
      <RestaurantCard elevation={5}>
        <RestaurantCardCover source={{ uri: "https://picsum.photos/700" }} />
        <Title>{name}</Title>
        {/* <Title style={styles.title}>{name}</Title> */}
        <View>
          {ratingArray.map(() => (
            <SvgXml xml={star} width={20} height={20} />
          ))}
          <View>
            {isClosedTemporarily && (
              <Text variant="label">Closed Temporarily</Text>
            )}
            <View>
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </View>
          </View>
        </View>
        <Text>{address}</Text>
      </RestaurantCard>
    </>
  );
};
