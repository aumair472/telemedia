import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[70vh] flex-col items-center justify-center bg-[var(--bg-base)] px-6 text-center">
        <h1 className="text-9xl font-black text-white opacity-20">404</h1>
        <div className="absolute">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Page Not Found</h2>
          <p className="mt-4 text-lg text-[var(--text-muted)]">
            Sorry, the page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="mt-10">
            <Link
              href="/"
              className="rounded-full bg-[var(--accent)] px-8 py-4 text-sm font-bold text-[var(--bg-base)] transition hover:bg-[#00ff99] hover:shadow-[var(--accent-glow)]"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
