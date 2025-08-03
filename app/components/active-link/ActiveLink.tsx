'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

interface Props {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link 
      className={clsx(
        'mr-2 transition-all hover:underline hover:text-blue-400',
        {
          'text-blue-500 font-semibold': isActive,
        }
      )}
    href={path}>
      {text}
    </Link>
  );
};
