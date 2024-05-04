import Image from "next/image";
import Link from "next/link";
import { NavBar } from "./nav-bar";

export function Header() {
  return (
    <header className="w-full bg-white  h-20 fixed top-0 px-2 md:px-24 flex items-center justify-between">
      <Link href="/">
        <div className="w-[25vw] h-full">
          <Image
            priority
            width="160"
            height="90"
            src="/logo.svg"
            alt="hari photogenic"
          />
        </div>
      </Link>
      <NavBar />
    </header>
  );
}
