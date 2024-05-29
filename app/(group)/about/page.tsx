/* eslint-disable react/no-unescaped-entities */
import { InstagramSection } from "@/components/instagram-section";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="w-full container">
      <section className="flex flex-col items-center justify-center gap-10">
        <h1 className="uppercase text-4xl font-bold tracking-big">
          Hello! I'm Hari Prasath
        </h1>
        <Image alt="line" src="/line.png" height="180" width="150" />
        <h3 className="uppercase tracking-big font-semibold text-xl">
          Wedding photographer
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center place-items-center">
          <Image alt="hari" src="/about/2.jpg" height="600" width="300" />
          <Image alt="hari" src="/about/1.jpg" height="200" width="300" />
          <Image alt="hari" src="/about/3.jpg" height="600" width="300" />
        </div>
        <Image alt="line" src="/line.png" height="180" width="150" />
      </section>
      <section className="text-center my-10 max-w-2xl flex flex-col gap-8 items-center justify-center mx-auto">
        <h3 className="uppercase tracking-big font-semibold text-xl">
          WRITING ABOUT YOURSELF IS ALWAYS A BIT FUNNY.
        </h3>
        <div className="font-serif italic  flex flex-col gap-4">
          <p>
            But, until we have a chance to sit down and actually get to know
            each other, here's a few things that you might like to know:
          </p>

          <p>
            I'm a digital & film photographer and have been shooting
            professionally full-time for about three years. I've photographed a
            lot of weddings, traveled to seriously beautiful places, and (my
            favorite) met some amazing people.
          </p>

          <p>
            Through all my work, my hope is that you'll see timeless, rich
            organic color, beautiful light, creative variety, and attention to
            detail. Most of all, I want to show life. Weddings, like life, are
            bold and overflowing, calm and intimate, and always connected. I
            want my work to embody the things that matter most, and last the
            longest.
          </p>
          <p>
            I make heartfelt, authentic, joyful images for people wild about
            each other, and about life. When you looked through the stories I've
            photographed, if you felt a connection, chances are you're one of
            those people. I'd love to tell a part of your story.
          </p>
        </div>
        <Image alt="line" src="/line.png" height="180" width="150" />
      </section>
      <InstagramSection />
    </main>
  );
}
