import { Sidebar, TopMenu } from "@/components";

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <TopMenu />
      <Sidebar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-10">
        {children}
      </div>
    </main>
  );
}
