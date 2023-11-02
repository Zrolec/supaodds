import React from "react";
import { Link } from "@chakra-ui/react";
import "./FirstBanner.css";
import "./matchday.jpeg";
import Chel from "../assets/images/Chel.jpg";
import Mobilebanner from "../assets/images/Mobilebanner.jpeg";
import Accumulator from "../reusables/Accumulator";
import Plans from "../reusables/Plans";
import Calendar from "../reusables/Calendar";

const Firstbanner = () => {
  // input your js logic here

  return (
    <>
      <img className="Chel" src={Chel} alt="Chel" />
      <img className="Mob" src={Mobilebanner} alt="Mobilebanner" />

      {/* this is the white div for mobile; contains link buttons for predictions, calendar & accumulator */}
      <section className="flex-container" />
      <Link className="Pre">
        <Plans />
      </Link>
      {/* <>
        <Calendar />
      </> */}
      <Link className="Preee">
        <Accumulator />
      </Link>

      <section className="Webdiv" />

      <Link className="Tre">
        <Plans />
      </Link>
      <>
        <Calendar />
      </>
      <Link className="Treee">
        <Accumulator />
      </Link>
    </>
  );
};

export default Firstbanner;
