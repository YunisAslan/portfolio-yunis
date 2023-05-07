import React from "react";

const SkillBox = ({ icon }) => {
  return (
    <>
      <div className="skill-card flex justify-center rounded-md border border-lightBorder p-5 dark:border-darkBorder">
        <div className="skill-logo flex h-24 w-20 justify-center">{icon}</div>
      </div>
    </>
  );
};

export default SkillBox;
