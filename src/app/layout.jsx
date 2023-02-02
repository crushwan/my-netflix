"use client";
import { Provider } from "react-redux";
import "./globals.css";
import { store } from "@/feature/store";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <Provider store={store}>
        <body className="bg-[#141414]">{children}</body>
      </Provider>
    </html>
  );
}
