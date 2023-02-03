"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "@/feature/userSlice";
import db, { auth } from "@/lib/firebase";
import Nav from "@/components/Nav";
// import PlansScreen from "./PlansScreen";
import { query, collection, where, onSnapshot } from "firebase/firestore";

function ProfileScreen() {
  const user = useSelector(selectUser);
  const [subscription, setSubscription] = useState(null);

  // useEffect(() => {
  //   const q = query(collection(db, "customers", user.uid, "subscriptions"));

  //   onSnapshot(q, (querySnapshot) => {
  //     querySnapshot.forEach(async (subscription) => {
  //       // console.log(subscription.data());

  //       setSubscription(subscription.data().role);
  //     });
  //   });
  // }, [user.uid]);

  return (
    <div className="h-screen text-white">
      <Nav />
      <div className="flex flex-col w-[50%] mx-auto pt-[8%] max-w-[800px]">
        <h1 className="text-4xl font-normal border-b-[#282c2d] mb-5">
          Edit Profile
        </h1>
        <div className="flex">
          <img
            className="h-[100px]"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="text-white ml-6 flex-1">
            <h2 className="bg-gray-500 p-4 text-sm pl-5">{`user.email`}</h2>
            <div className="mt-4">
              <div className="border-b-[#282c2d] pb-3 flex justify-between">
                <h3 className="text-2xl font-bold"> {`Plans`} </h3>
                {subscription ? (
                  <p className="font-semibold">{`(Current: ${subscription})`}</p>
                ) : (
                  <p className="font-semibold">{`Not subscribed`}</p>
                )}
              </div>

              {/* <PlansScreen /> */}
              <button
                onClick={() => auth.signOut()}
                className="px-5 py-3 text-base mt-[5%] w-full bg-[#e50914] text-white border-none cursor-pointer font-semibold"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
