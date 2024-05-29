import { Card } from "@/components/ui/card";
import Link from "next/link";

export const InfoPrices = () => {
  return (
    <Card className="flex flex-col gap-8 items-center justify-center py-16 px-2 md:px-8 max-w-sm mx-auto bg-gray-100 rounded-none">
      <h1 className="text-4xl font-bold text-center">INFO & PRICES</h1>
      <p className="text-xl text-center px-16 leading-relaxed font-serif italic">
        Find answers to common questions, and contact me to request a pricebook.
      </p>
      <Link href="/contact" className="">
        CONTINUE
      </Link>
    </Card>
  );
};
