import "./globals.css";

export const metadata = {
  title: "Neoma Web Studio",
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
