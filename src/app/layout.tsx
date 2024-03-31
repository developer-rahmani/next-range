import "@/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="min-h-screen bg-gray-900 flex items-center">{children}</body>
    </html>
  );
}
