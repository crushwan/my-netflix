"use client";
import "./globals.css";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { store } from "@/feature/store";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-[#141414]">
        <Provider store={store}>
          <Toaster
            toastOptions={{
              style: {
                backgroundColor: "#424242",
                color: "white",
              },
            }}
          />
          {children}
        </Provider>
      </body>
    </html>
  );
}
