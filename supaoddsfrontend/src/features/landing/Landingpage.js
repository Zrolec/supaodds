import React from "react";
import { Text } from "@chakra-ui/react";
import "./Landingpage.css";
import Predictable from "./Predictable";

const Landingpage = () => {
  return (
    <>
      <section className="Mobland" />

      <Text className="Bla" fontSize="3xl">
        PREDICTIONS
      </Text>

      <Predictable />
    </>
  );
};

export default Landingpage;
