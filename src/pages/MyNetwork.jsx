import React from "react";
import MyNetworkLiftAside from "../components/MyNetworkLiftAside";
import MyNetworkMiddelSection from "../components/MyNetworkMiddelSection";
const MyNetwork = () => {
  return (
    <>
      <main className="grid grid-cols-12 gap-4">
        <MyNetworkLiftAside />
        <MyNetworkMiddelSection />
      </main>
    </>
  );
};

export default MyNetwork;
