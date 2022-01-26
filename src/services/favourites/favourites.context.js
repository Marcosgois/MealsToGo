import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authentication.context";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [favourites, setFavourites] = useState([]);

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const saveFavourites = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      //console.log(jsonValue);
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
    } catch (e) {
      console.log("Erro Storing", e);
    }
  };

  const loadFavourites = async (uid) => {
    try {
      const jsonValue = await AsyncStorage.getItem(`@favourites-${uid}`);
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
    if (user) {
      loadFavourites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      saveFavourites(favourites, user.uid);
    }
  }, [favourites, user]);

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
