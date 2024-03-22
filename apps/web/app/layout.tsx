import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://slant.so"),
  title: {
    default: "Slant · Design System",
    template: "%s · Slant",
  },
  description: "",
  openGraph: {
    title: "Slant Design System",
    description: "",
    url: "https://slant.so",
    siteName: "Slant",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `https://slant.so/og?title=Lona`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
