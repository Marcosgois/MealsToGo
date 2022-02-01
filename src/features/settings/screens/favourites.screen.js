import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { FavouritesContext } from "../../../services/favourites/favourites.context";

import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})``;


export const FavouritesScreen = ({ navigation }) => {
    const { favourites } = useContext(FavouritesContext);

    return (
        <>
            <SafeArea>
                <RestaurantList
                    data={favourites}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate("RestaurantDetail", {
                                        restaurant: item,
                                    })
                                }
                            >
                                <Spacer position="bottom" size="large">
                                    <RestaurantInfoCard restaurant={item} />
                                </Spacer>
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={(item) => item.name}
                />
            </SafeArea>
        </>
    );
};
