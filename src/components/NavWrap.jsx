"use client";

import { useEffect, useState } from "react";

function NavWrap({ children }) {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div
      className={`${
        show && "bg-[#141414]"
      } fixed top-0 p-5 w-full h-7 z-1 transition-all duration-500 ease-in`}
    >
      {children}
    </div>
  );
}

export default NavWrap;
