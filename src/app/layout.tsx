import type { Metadata } from 'next';
// Rely on Poppins from globals.css
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
// import { ThemeProvider } from "@/components/theme-provider"; // Optional: Keep for explicit theme toggling

export const metadata: Metadata = {
  title: 'Suraj Kumar | AI Engineer |Full Stack Developer ', // Updated title to match reference style
  description: 'Suraj Kumar - A Full Stack Developer passionate about building performant, user-friendly, and scalable applications.', // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Apply dark theme by default
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`antialiased bg-background text-foreground`}>
        {/* Optional: Wrap with ThemeProvider if implementing theme switching */}
        {/* <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange> */}
        {children}
        <Toaster />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
