import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import EventIcon from "@material-ui/icons/Event";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";

interface IProps {
  setTabIdx: (newValue: number) => any;
}

const BottomNavBar = (props: IProps) => {
  const [navIdx, setNavIdx] = useState(1);

  const handleTabChange = (e: any, newValue: number) => {
    // TODO: This feels inefficient
    setNavIdx(newValue);
    props.setTabIdx(newValue);
  };

  return (
    <footer className="footer-nav">
      <BottomNavigation value={navIdx} onChange={handleTabChange} showLabels>
        <BottomNavigationAction label="Calendar" icon={<EventIcon />} />
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Notifications" icon={<SettingsIcon />} />
      </BottomNavigation>
    </footer>
  );
};

export default BottomNavBar;
