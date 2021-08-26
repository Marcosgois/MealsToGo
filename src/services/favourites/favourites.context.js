import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const saveFavourites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      //console.log(jsonValue);
      await AsyncStorage.setItem("@favourites", jsonValue);
    } catch (e) {
      console.log("Erro Storing", e);
    }
  };

  const loadFavourites = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@favourites");
      console.log("LoadFavourites: ", JSON.parse(jsonValue));
      return JSON.parse(jsonValue)
        ? setFavourites(JSON.parse(jsonValue))
        : setFavourites([]);
    } catch (e) {
      console.log("Erro Loading", e);
    }
  };

  const remove = (restaurant) => {
    const newFavourites = favourites.filter(
      (x) => x.place_id !== restaurant.place_id
    );
    setFavourites(newFavourites);
  };

  useEffect(() => {
    loadFavourites();
  }, []);

  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
