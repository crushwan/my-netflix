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
      className={`fixed top-0 p-6 w-full h-7 z-1 transition-all duration-500 ease-in ${
        show && "bg-[#141414]"
      }`}
    >
      {children}
    </div>
  );
}

export default NavWrap;
