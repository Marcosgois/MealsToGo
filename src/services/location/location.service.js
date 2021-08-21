import { locations } from "./location.mock";
import { camelize } from "prelude-ls";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("not found");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result) => {
  const formattedResponse = result; //camelize
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;
  console.log(lat, lng);
  return { lat, lng };
};
