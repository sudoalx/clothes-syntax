export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="bg-red-500 flex min-h-screen">{children}</main>;
}
