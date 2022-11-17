import React, { Fragment } from "react";

import HeroSlider from "../components/hero-slider/HeroSlider";
import PopularMenu from "../components/popular-menu/PopularMenu";
import ChooseUs from "../components/choose-us/ChooseUs";
import MenuPack from "../components/menu-pack/MenuPack";
import Testimonials from "../components/testimonials/Testimonials";
import Download from "../components/download-section/Download";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <Fragment>
      <HeroSlider />
      <PopularMenu />
      <ChooseUs />
      <MenuPack />
      <Testimonials />
      {searchParams.get("mode") !== "mobile" ? <Download /> : null}
    </Fragment>
  );
};

export default Home;
