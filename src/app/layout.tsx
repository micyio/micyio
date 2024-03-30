import { ThemeProvider } from "@/context/theme-provider";
import { ThemeSwitcher } from "@/context/theme-toggle.component";
import { FooterSection, Header } from "@/features";
import type { Metadata } from "next";
import { Lato, Raleway } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Micyio || Your Digital Solution Partner",
};

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato-sans",
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} ${lato.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeSwitcher />
          <Header />
          <main>{children}</main>
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}
