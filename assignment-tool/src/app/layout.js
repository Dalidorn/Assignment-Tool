import "./globals.css";

export const metadata = {
  title: "Assignment Tool",
  description: "AI assignment tool for teachers and students"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
