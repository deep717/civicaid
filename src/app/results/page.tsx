'use client';

import { useSearchParams } from 'next/navigation';

export default function Results() {
  const params = useSearchParams();
  
  const zip = params.get('zip');
  const income = Number(params.get('income') || 0);
  const householdSize = Number(params.get('householdSize') || 0);

  const eligibility = income < (1500 + 500 * (householdSize - 1)) ? 'Eligible' : 'not Eligible';

  return (
    <div className="p-10 text-center max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Your Results</h1>
      <p className="text-lg mb-2">
        Based on your answers:
      </p>
      <p className="text-sm mt-4 text-gray-600">
		ZIP Code: {zip}
        You are: {eligibility} for basic SNAP in California
      </p>
      <p className="text-sm text-gray-600 mt-4">This is a simplified estimate. For full results, we’ll soon add more programs.</p>
    </div>
  );
}
