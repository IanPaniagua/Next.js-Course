import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ContactPage',
  description: 'This is the contact page of our Next.js course.',
};

export default function ContactPage() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out!</p>
      {/* Add contact form or details here */}
    </div>
  );
}