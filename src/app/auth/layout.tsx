export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="container sm:w-96 mx-auto p-5">{children}</main>;
}
