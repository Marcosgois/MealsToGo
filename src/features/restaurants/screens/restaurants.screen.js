import React from "react";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeAreaView, FlatList } from "react-native";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-info-card";
import { Spacer } from "../../../components/spacer/spacer.component";

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
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Pesquisar" />
      </SearchContainer>
      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
          { name: 11 },
          { name: 12 },
          { name: 13 },
          { name: 14 },
          { name: 15 },
        ]}
        renderItem={() => (
          <Spacer position="bottom" size="small">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => {
          item.name;
        }}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
