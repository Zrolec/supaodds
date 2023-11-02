import React from "react";
import FirstBanner from "./FirstBanner";
import Landingpage from "../features/landing/Landingpage";
import NewsletterSignup from "../features/landing/NewsletterSignup";
// had to correct landing page path url
function Home() {
  return (
    <>
      <FirstBanner />
      <Landingpage />
      <NewsletterSignup />
    </>
  );
}

export default Home;
