"use client";

import { ContactForm } from "@/components/contact-form";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="bg-zinc-300 w-full flex flex-col items-center gap-8 text-center p-10 md:px-96">
        <h1 className="uppercase tracking-wider md:tracking-huge text-2xl md:text-4xl font-bold">
          Contact me
        </h1>
        <p className="tracking-big md:tracking-huge font-medium text-md md:text-lg uppercase">
          Send me a note
        </p>
        <Image src="/heart.svg" alt="heart" width="50" height="50" />
        <p className="italic text-sm font-serif leading-8 w-2/3">
          I appreciate you taking the time to look through my photographs. If
          you loved what you saw, and felt a connection, get in touch! I would
          love to talk with you about creating photos together.
        </p>
        <div className="flex flex-col font-semibold tracking-[0.3em] gap-2">
          <p>+91 9940968020</p>
          <Link href="mailto://hariphotogenic@gmail.com">
            hariphotogenic@gmail.com
          </Link>
        </div>
        <p className="italic text-sm font-serif leading-8 w-2/3">
          If you have not heard back from me within 48 hours via the contact
          form below, please check your spam folder, or email me directly. On
          weekends this may be a bit longer as I am usually away from the office
          photographing weddings for lovely people like you.
        </p>
        <p className="italic text-sm font-serif">Thank you!</p>
      </section>
      <ContactForm />
    </main>
  );
}
