import "./globals.css";
import { ReduxProvider } from "@/redux/store/redux.provider";
import ThemeProvider from "../components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <ReduxProvider>
        <ThemeProvider> {children}</ThemeProvider>
      </ReduxProvider>
    </html>
  );
}
