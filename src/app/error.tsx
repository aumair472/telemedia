'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Header />
      <main className="flex min-h-[70vh] flex-col items-center justify-center bg-[var(--bg-base)] px-6 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Something went wrong!</h2>
        <p className="mt-4 text-lg text-[var(--text-muted)]">
          We apologize for the inconvenience. Please try again or contact support.
        </p>
        <div className="mt-10 flex gap-4">
          <button
            onClick={() => reset()}
            className="rounded-full bg-[var(--accent)] px-8 py-4 text-sm font-bold text-[var(--bg-base)] transition hover:bg-[#00ff99]"
          >
            Try again
          </button>
          <Link
            href="/"
            className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10"
          >
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
