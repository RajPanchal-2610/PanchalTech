import type { Metadata } from "next";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Panchal Tech — Modern Software & Technology Solutions",
  description:
    "Panchal Tech is a premier technology partner delivering custom web development, mobile applications, cloud architecture, and modern digital software including Gymatrix.",
  keywords: [
    "Panchal Tech",
    "Software Development",
    "Web Development",
    "Gymatrix",
    "Gym Management Software",
    "Cloud Architecture",
    "Technology Company",
    "IT Solutions",
  ],
  authors: [{ name: "Panchal Tech" }],
  robots: "index, follow",
  openGraph: {
    title: "Panchal Tech — Modern Software & Technology Solutions",
    description:
      "Engineering robust digital solutions, custom software, and innovative enterprise platforms like Gymatrix.",
    url: "https://panchaltech.com",
    siteName: "Panchal Tech",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Panchal Tech — Modern Software & Technology Solutions",
    description:
      "Engineering robust digital solutions, custom software, and innovative enterprise platforms like Gymatrix.",
  },
  icons: {
    icon: [
      { url: "/official-pt-logo.png", type: "image/png" },
    ],
    shortcut: "/official-pt-logo.png",
    apple: "/official-pt-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
