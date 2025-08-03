import {HomeIcon} from '@primer/octicons-react'
import Link from 'next/link';

export default function Home() {
  return (
<main className="flex flex-col items-center p-24 text-blue-400">
  <HomeIcon size={24} />
  <span className="text-lg">
    Hola Mundo
  </span>
  <Link href="/about" className="mt-4 text-blue-500 hover:underline">
    Go to About Page
  </Link>
</main>
  );
}