import LayoutProvider from "@/providers/layout-provider";
import ThemeProvider from "@/providers/theme-provider";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import 'remixicon/fonts/remixicon.css';
import "./globals.css";


export const metadata: Metadata = {
  title: "SIM HEC",
  description: "Onestop for all your sims needs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider afterSignOutUrl='/sign-in'>
      <AntdRegistry>
        <html lang="en" className="antialiased" >
          <body>
            <ThemeProvider>
              <LayoutProvider>{children}</LayoutProvider>
            </ThemeProvider>
          </body>
        </html>
      </AntdRegistry>
    </ClerkProvider>
  );
}
