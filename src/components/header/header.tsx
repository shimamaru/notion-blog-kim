import Link from 'next/link';

import NavLink from '@/components/header/nav-link';
import ThemeToggle from '@/components/theme-toggle';

const NAV_ITEMS = [
  { path: 'blog', name: 'Blog' },
  // { path: 'about', name: 'About' },
  // { path: 'contact', name: 'Contact' },
  // { path: 'projects', name: 'Projects' },
];

export default function Header() {
  return (
    <nav className="flex flex-col justify-between py-12 md:flex-row">
      <Link href="/" className="self-start md:self-auto">
        <h1 className="text-3xl font-bold">Shimamaru</h1>
      </Link>
      <div className="flex self-center my-6 space-x-8 md:my-0 md:self-auto">
        <ul className="flex space-x-8">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.path}
              className="py-2 text-lg font-medium transition-all duration-300 text-secondary hover:text-primary whitespace-nowrap"
            >
              <NavLink path={item.path}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
        <div className="absolute right-[10vw] top-12 md:static">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
