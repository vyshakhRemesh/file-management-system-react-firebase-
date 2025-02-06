import React from "react";
import Navbar from "../../components/DashboardComponents/Navbar/Navbar";
import SubBar from "../../components/DashboardComponents/SubBar/SubBar";
import HomeComponent from "../../components/DashboardComponents/HomeComponent/HomeComponent";

const DashboardPage = () => {
  return (
    <>
      <Navbar />
      <SubBar />
      <HomeComponent />
    </>
  );
};

export default DashboardPage;
