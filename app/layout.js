import "./globals.css";
import Providers from "@/components/cars24/Providers";

export const metadata = {
  title: "Cars24 UAE Frontend Clone",
  description:
    "A Next.js, JavaScript, and Tailwind CSS clone of the Cars24 UAE frontend with split data files and mapped sections.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
