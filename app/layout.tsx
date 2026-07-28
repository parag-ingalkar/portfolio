import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PROFILE } from "@/lib/profile-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// TODO: set this to the real deployed origin (GitHub Pages / Cloudflare Pages URL).
const siteUrl = "https://paragingalkar.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${PROFILE.name} - ${PROFILE.role}`,
    template: `%s - ${PROFILE.name}`,
  },
  description: `${PROFILE.role} with a strong backend focus, product ownership experience, and an AI-assisted workflow. Based in ${PROFILE.location}.`,
  applicationName: PROFILE.name,
  authors: [{ name: PROFILE.name }],
  creator: PROFILE.name,
  keywords: [
    PROFILE.name,
    "Full-Stack Engineer",
    "Software Engineer",
    "FastAPI",
    "React",
    "TypeScript",
    "PostgreSQL",
    "RabbitMQ",
    "Computational Engineering",
    "FAU Erlangen",
    "Erlangen",
    "Germany",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: PROFILE.name,
    title: `${PROFILE.name} - ${PROFILE.role}`,
    description: `${PROFILE.role} with a strong backend focus, product ownership experience, and an AI-assisted workflow. Based in ${PROFILE.location}.`,
    images: [
      {
        url: "/og-image.png",
        width: 1344,
        height: 768,
        alt: `${PROFILE.name} - ${PROFILE.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE.name} - ${PROFILE.role}`,
    description: `${PROFILE.role} with a strong backend focus, product ownership experience, and an AI-assisted workflow.`,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f7f6" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a19" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
