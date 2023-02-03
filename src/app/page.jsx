"use client";
import { auth } from "@/lib/firebase";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import { useEffect } from "react";
import { login, logout, selectUser } from "@/feature/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";

export default function Home() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        // Logged In
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
          })
        );
      } else {
        // Logged Out (Not Logged In)
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);
  return <div>{!user ? <LoginScreen /> : <HomeScreen />}</div>;
}
