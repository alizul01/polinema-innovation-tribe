import React from "react";
import type { Idea } from "~/types/Idea/Index/Idea";
import ProfileSidebar from "~/components/ProfileSidebar";

const Sidebar: React.FC<Idea> = (props) => {
  return (
    <div className={"sidebar"}>
      <ProfileSidebar {...props.author} />
    </div>
  );
};

export default Sidebar;
