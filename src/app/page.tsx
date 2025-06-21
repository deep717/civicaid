'use client';

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-white text-gray-900">
      <h1 className="text-4xl font-bold mb-4">Welcome to CivicAid</h1>
      <p className="text-lg text-center mb-6 max-w-xl">
        Instantly find out what government programs you qualify for — SNAP, Medicaid, housing support, and more. Fast, simple, private.
      </p>
      <Link href="/form">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 text-lg font-semibold">
          Check Your Eligibility
        </button>
      </Link>
    </main>
  );
}