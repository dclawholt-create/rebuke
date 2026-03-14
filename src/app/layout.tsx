import type { Metadata } from "next";
import { CartDrawer } from "@/components/cart-drawer";
import { CartProvider } from "@/components/cart-provider";
import { ogImageUrl } from "@/lib/brand";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rebuke Coffee",
  description:
    "A sleek coffee brand storefront for I Am Church — premium coffee that helps fund ministry.",
  openGraph: {
    title: "Rebuke Coffee",
    description:
      "A sleek coffee brand storefront for I Am Church — premium coffee that helps fund ministry.",
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
      "A sleek coffee brand storefront for I Am Church — premium coffee that helps fund ministry.",
    images: [ogImageUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
