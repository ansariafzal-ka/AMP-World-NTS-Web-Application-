import Link from 'next/link';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20">
        <span className="text-xs font-bold uppercase tracking-wider text-[#610D17] bg-[#fbf2f3] px-3 py-1 rounded-full mb-3">
          404 Not Found
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-zinc-900 mb-3">
          Page Does Not Exist
        </h1>
        <p className="text-sm text-zinc-500 max-w-md mb-8">
          The page you are looking for does not exist or the slug has changed.
        </p>
        <Link
          href="/"
          className="rounded-xl bg-[#610D17] text-white px-6 py-3 text-sm font-bold shadow-md hover:bg-[#4D0911] transition-colors"
        >
          Return to Homepage
        </Link>
      </main>
      <Footer />
    </div>
  );
}
