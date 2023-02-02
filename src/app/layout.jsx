import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-[#141414]">{children}</body>
    </html>
  );
}
