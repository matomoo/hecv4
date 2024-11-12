import LayoutProvider from "@/providers/layout-provider";
import ThemeProvider from "@/providers/theme-provider";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import 'remixicon/fonts/remixicon.css';
import "./globals.css";
import ReactQueryProviders from "@/providers/query-client-provider";


export const metadata: Metadata = {
  title: "SIM HEC V2",
  description: "Await here",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased" >
      <body>
        <ClerkProvider afterSignOutUrl='/sign-in'>
          <AntdRegistry>
            <ReactQueryProviders >
              <ThemeProvider>
                <LayoutProvider>
                  {children}
                </LayoutProvider>
              </ThemeProvider>
            </ReactQueryProviders>
          </AntdRegistry>
        </ClerkProvider>
      </body>
    </html>
  );
}
