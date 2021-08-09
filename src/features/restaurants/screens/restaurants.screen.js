import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, Platform, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card";
import { space } from "../../../infrastructure/theme/spacing";
import { colors } from "../../../infrastructure/theme/colors";

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar placeholder="Pesquisar" />
    </View>
    <View style={styles.list}>
      <RestaurantInfoCard />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: space.md,
  },
  list: {
    flex: 1,
    padding: space.md,
    backgroundColor: colors.bg.primary,
  },
});
