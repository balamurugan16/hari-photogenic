import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full fixed inset-0 p-4">
      <Link href="/">
        <Image
          priority
          width={160}
          height={90}
          src="/logo.svg"
          alt="hari photogenic"
        />
      </Link>
    </header>
  );
}
