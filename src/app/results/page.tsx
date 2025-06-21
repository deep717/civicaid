'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function ResultsInner() {
  const params = useSearchParams();
  const zip = params.get('zip');
  const income = Number(params.get('income') || 0);
  const householdSize = Number(params.get('householdSize') || 0);

  const eligible = income < (1500 + 500 * (householdSize - 1));

  return (
    <div className="p-10 text-center max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Your Results</h1>
      <p className="text-lg mb-2">Based on your inputs:</p>
      <p className="text-2xl font-bold text-blue-600">
        You are: {eligible ? 'Eligible' : 'Not Eligible'}
      </p>

      {zip && (
        <p className="text-sm mt-4 text-gray-600">
          ZIP Code: {zip}
        </p>
      )}
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={<div>Loading results...</div>}>
      <ResultsInner />
    </Suspense>
  );
}