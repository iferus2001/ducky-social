import Image from "next/image";
import Link from "next/link";
import { Menu } from "./Menu";
export function Header() {
  return (
    <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between bg-black">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/duck-logo.png"
          alt="Ducky logo"
          width={40}
          height={40}
          priority
        />
      </Link>
      <Menu />
    </header>
  );
}
