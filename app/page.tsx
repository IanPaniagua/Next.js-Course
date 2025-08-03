import Link from 'next/link';

export default function Home() {
  return (
<main className="flex flex-col items-center p-24 text-blue-400">
  <span className="text-lg">
    HOME
  </span>
  <Link href="/about" className="mt-4 text-blue-500 hover:underline">
    Go to About Page
  </Link>
</main>
  );
}