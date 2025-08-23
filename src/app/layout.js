import "./globals.css";

export const metadata = {
  title: "Neoma Web Studio",
  description: "Portfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
