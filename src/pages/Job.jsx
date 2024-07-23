import React from "react";
import JobLiftAside from "../components/JobLiftAside";
import JobMiddelSection from "../components/JobMiddelSection";
import Header from "../components/Header";
const Home = () => {
  return (
    <>
      <main className="grid grid-cols-12 gap-4">
        <JobLiftAside />
        <JobMiddelSection />
      </main>
    </>
  );
};

export default Home;
