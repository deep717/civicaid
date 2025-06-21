'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function EligibilityForm() {
  const router = useRouter();
  const [zip, setZip] = useState('');
  const [income, setIncome] = useState('');
  const [householdSize, setHouseholdSize] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/results?zip=${zip}&income=${income}&householdSize=${householdSize}`);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 mt-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Eligibility Check</h2>
      <input
        type="text"
        placeholder="ZIP Code"
        value={zip}
        onChange={(e) => setZip(e.target.value)}
        className="w-full mb-4 p-3 border rounded"
        required
      />
      <input
        type="number"
        placeholder="Monthly Household Income"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        className="w-full mb-4 p-3 border rounded"
        required
      />
      <input
        type="number"
        placeholder="Household Size"
        value={householdSize}
        onChange={(e) => setHouseholdSize(e.target.value)}
        className="w-full mb-6 p-3 border rounded"
        required
      />
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 font-semibold"
      >
        See My Results
      </button>
    </form>
  );
}