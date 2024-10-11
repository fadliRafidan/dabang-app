import Header from '@/components/layout/header';
import Sidebar from '@/components/layout/sidebar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dabang',
  description: 'Best analytics produk.'
};

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Header />
        <Sidebar />
        <main className="flex-1 overflow-hidden pt-20 px-8 bg-[#F9FAFC]">
          {children}
        </main>
      </div>
    </>
  );
}
