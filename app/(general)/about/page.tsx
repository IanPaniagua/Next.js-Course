import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Page',
  description: 'This is the about page of our Next.js course.',
};

export default function ContactPage() {
  return (
    <div>
      <h1>About us</h1>
      <p>We are a young team of people developing a big app web with next.js</p>
      {/* Add contact form or details here */}
    </div>
  );
}