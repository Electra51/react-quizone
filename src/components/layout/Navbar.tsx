import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/assessments", label: "Assessments" },
  { href: "/topics", label: "Topics" },
  { href: "/statistics", label: "Statistics" },
  { href: "/blogs", label: "Blogs" },
];

export function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="container-custom flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-semibold text-slate-900">
          FrontendIQ
        </Link>
        <nav className="flex gap-4 text-sm font-medium text-slate-600">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-blue-600">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
