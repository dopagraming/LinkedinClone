import React, { useEffect } from "react";
import HomeLiftAside from "../components/HomeLiftAside";
import HomeMiddelSection from "../components/HomeMiddelSection";
import HomeRightAside from "../components/HomeRightAside";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { getArticlesAPI } from "../redux/actions";
import { users } from "../appInformations";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticlesAPI());
  });
  return (
    <main className="grid grid-cols-12 gap-4">
      <HomeLiftAside />
      <HomeMiddelSection />
      <aside
        className=" bg-white p-2 rounded-md h-fit max-[991px]:hidden min-[991px]:col-span-4 xl:col-span-3 overflow-y-auto"
        style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 8px" }}
      >
        {users?.map((user, index) => (
          <HomeRightAside user={user} key={index} />
        ))}
      </aside>
    </main>
  );
};

export default Home;
