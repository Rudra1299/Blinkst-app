import React from "react";
import Footer from "../components/molecules/Footer/Footer";
import HomeHeader from "../components/organisms/HomeHeader/HomeHeader";
import MainContent from "../Routes/MainContent";
import HomeTemplate from "../components/Templates/Hometemplate";
function HomePage() {
  return (
    <HomeTemplate
      banner={<HomeHeader />}
      content={<MainContent />}
      footer={<Footer />}
    />
  );
}

export default HomePage;
