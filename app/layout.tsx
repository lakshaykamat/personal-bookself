"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { DarkMode } from "@/components/ui/DarkMode";
import Icons from "@/lib/Icons";
import { Library } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LocalHandler from "@/lib/LocalHandler";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="mx-7 xl:max-w-5xl xl:mx-auto">
            <div className="flex flex-wrap items-center justify-between">
              <h1 className="font-serif text-4xl my-7 font-bold text-center ">
                Personal Bookself
              </h1>
              <div className="flex my-3 gap-3">
                <DarkMode />
                <Link href={"/saved"}>
                  <Button title="Saved Books" variant={"outline"}>
                    <Library className="h-[1.2rem] w-[1.2rem]" />
                  </Button>
                </Link>
              </div>
            </div>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
