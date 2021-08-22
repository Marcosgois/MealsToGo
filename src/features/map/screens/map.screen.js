import React, { useContext, useState, useEffect } from "react";
import { Search } from "../components/search.component";
import MapView from "react-native-maps";
import styled from "styled-components";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;
export const MapScreen = () => (
  <>
    <Search />
    <Map />
  </>
);
