import { getCurrentYear } from "@/lib/date";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex flex-col md:flex-row-reverse sm:justify-center md:justify-between items-center gap-4 p-4 bg-gradient-to-b from-zinc-100 to-zinc-300 px-12 md:px-24">
      <section className="text-center flex flex-col gap-2">
        <div className="tracking-big text-[0.5rem] flex gap-2">
          <p>+91 9940968020</p>
          <span>|</span>
          <p>hariphotogenic@gmail.com</p>
        </div>
        <div className="flex items-center justify-evenly">
          <Link href="https://www.instagram.com/hari_photogenic">
            <Image
              alt="instagram logo"
              src="/icons/instagram.svg"
              width="24"
              height="24"
            />
          </Link>
          <Link href="https://facebook.com">
            <Image
              alt="facebook logo"
              src="/icons/facebook.svg"
              width="24"
              height="24"
            />
          </Link>
          <Link href="https://twitter.com">
            <Image
              alt="twitter logo"
              src="/icons/twitter.svg"
              width="24"
              height="24"
            />
          </Link>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center gap-4">
        <Image
          alt="hari photogenic logo"
          src="/logo.svg"
          width={200}
          height={160}
        />
        <p className="text-[0.5rem] uppercase">
          &copy; {getCurrentYear()} HARI PHOTOGENIC. ALL RIGHTS RESERVED
        </p>
      </section>
    </footer>
  );
}
