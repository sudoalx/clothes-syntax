export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-gray-800 flex min-h-screen text-gray-50">
      {children}
    </main>
  );
}
