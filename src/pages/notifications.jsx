import React from "react";
import NotificationsLiftAside from "../components/NotificationsLiftAside";
import NotificationsMiddelSection from "../components/NotificationsMiddelSection";
import NotificationsRightAside from "../components/NotificationsRightAside";
const notifications = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <NotificationsLiftAside />
      <NotificationsMiddelSection />
      <NotificationsRightAside />
    </div>
  );
};

export default notifications;
