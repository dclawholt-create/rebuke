import type { Metadata } from "next";
import { CartDrawer } from "@/components/cart-drawer";
import { CartProvider } from "@/components/cart-provider";
import { ogImageUrl } from "@/lib/brand";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rebuke Coffee",
  description:
    "Rebuke Coffee is operated by I AM Church and sold to other churches as a premium coffee option for hospitality ministries that also supports our church ministry.",
  openGraph: {
    title: "Rebuke Coffee",
    description:
      "Rebuke Coffee is operated by I AM Church and sold to other churches as a premium coffee option for hospitality ministries that also supports our church ministry.",
    type: "website",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Rebuke Coffee social preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rebuke Coffee",
    description:
      "Rebuke Coffee is operated by I AM Church and sold to other churches as a premium coffee option for hospitality ministries that also supports our church ministry.",
    images: [ogImageUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
