"use client";
import React, { useRef } from "react";
import { auth } from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import toast from "react-hot-toast";

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    const notification = toast.loading("Initialize Registration");

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        // console.log(authUser);
        toast.success("Register Success, Click Sign In", {
          id: notification,
        });
      })
      .catch((err) => {
        toast.error("Invalid Email.", {
          id: notification,
        });
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    const notification = toast.loading("Loading Authentication");

    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        // Signed in
        // console.log(authUser);
        toast.success("Login Success", {
          id: notification,
        });
      })
      .catch((error) => {
        toast.error("Please Sign Up.", {
          id: notification,
        });
      });
  };

  return (
    <div className="max-w-[400px] p-16 mx-auto bg-black/80">
      <form className="grid" action="">
        <h1 className="text-left mb-6 text-3xl font-bold">Sign In</h1>
        <input
          className="outline-0 h-10 mb-3 rounded-md border-none py-1 px-4 text-black"
          ref={emailRef}
          type="email"
          placeholder="Email"
        />
        <input
          className="outline-0 h-10 mb-3 rounded-md border-none py-1 px-4 text-black"
          ref={passwordRef}
          type="password"
          placeholder="Password"
        />
        <button
          className="py-4 px-5 text-base text-white rounded-md bg-[#e50914] font-semibold border-none cursor-pointer mt-5"
          type="submit"
          onClick={signIn}
        >
          Sign In
        </button>

        <h4 className="text-left mt-7">
          <span className="text-gray-500 font-medium">New to Netflix? </span>
          <span
            className="cursor-pointer underline font-medium"
            onClick={register}
          >
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
