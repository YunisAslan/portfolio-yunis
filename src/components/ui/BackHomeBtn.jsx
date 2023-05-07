import React from "react";

import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const BackHomeBtn = () => {
  const navigate = useNavigate();

  return (
    <>
      <Button
        onClick={() => navigate("/")}
        className="relative bottom-3 h-14 w-14 text-[30px] mm:left-10 md:left-[70px] lg:left-40"
        variant="circle"
      >
        <BiArrowBack />
      </Button>
    </>
  );
};

export default BackHomeBtn;
