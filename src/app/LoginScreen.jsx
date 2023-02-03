"use client";
import { useState } from "react";
import SignupScreen from "./SignupScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div
      className="relative h-full"
      style={{
        backgroundSize: "100%",
        background:
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/757ab38f-5d08-40bc-b3eb-eaba63ed8203/93c34f94-56c8-40a7-8b2e-b4aac6427977/GB-en-20210125-popsignuptwoweeks-perspective_alpha_website_medium.jpg')",
      }}
    >
      <div className="">
        <img
          className="fixed left-0 w-36 object-contain pl-5"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button
          className="fixed right-5 top-5 py-2 px-4 text-base text-white bg-[#e50914] font-semibold border-none cursor-pointer rounded-sm"
          onClick={() => setSignIn(true)}
        >
          Sign In
        </button>
        <div className="w-full h-screen z-1 bg-black/40 bg-gradient-to-t from-[#000000de]/0 via-[#000000]/60 to-[#000000de] " />
      </div>

      <div className="absolute top-[28%] mx-auto left-0 right-0 text-center z-1 text-white p-5">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1 className="text-5xl mb-5">
              Unlimited movies, TV shows, and more.
            </h1>
            <h2 className="text-3xl mb-7 font-normal">
              Watch anywhere. Cancel anytime.
            </h2>
            <h3 className="text-xl font-normal">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className="m-5">
              <form className="flex flex-row items-center justify-center">
                <div className="flex flex-grow -m-4 p-[10px] h-[54px] w-[30%] max-w-[470px] bg-white">
                  <input
                    className="flex-1 text-black text-base outline-0 border-none bg-transparent"
                    type="email"
                    placeholder="Email Address"
                  />
                </div>
                <button
                  onClick={() => setSignIn(true)}
                  className="py-4 px-5 text-base text-white bg-[#e50914] border-none font-semibold cursor-pointer"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
