import React, { useContext } from "react";
import { StatusBar } from "react-native";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";
import { SafeAreaView, FlatList } from "react-native";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-info-card";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  if (!isLoading) {
    return (
      <>
        <SafeArea>
          <SearchContainer>
            <Searchbar placeholder="Pesquisar" />
          </SearchContainer>
          <RestaurantList
            data={restaurants}
            renderItem={({ item }) => (
              <Spacer position="bottom" size="small">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            )}
            keyExtractor={(item) => {
              item.name;
            }}
          />
        </SafeArea>
      </>
    );
  } else {
    return <ActivityIndicator animating={true} color={Colors.red800} />;
  }
};
