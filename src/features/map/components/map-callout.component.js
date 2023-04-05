import React from "react";
import { Text } from "react-native-paper";
import styled from "styled-components";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info";

const MyText = styled(Text)``;

export const MapCallout = ({restaurant}) => {
  return (
    <CompactRestaurantInfo isMap restaurant={restaurant}/>
  );
};
