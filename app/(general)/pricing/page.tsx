import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Explore our pricing plans and choose the best one for you.',
};

export default function PricingPage() {
  return (
    <div>
      <h1>Pricing Plans</h1>
      <p>Choose the plan that fits your needs.</p>
      {/* Add pricing details here */}
    </div>
  );
} 