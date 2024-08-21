import "./globals.css";

export const metadata = {
  title: "Clerk Admin",
  description: "Clerk admin boilerplate template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
