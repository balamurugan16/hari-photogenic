import { Spinner } from "@/components/spinner";

export default function loading() {
  return (
    <main className="w-full h-full grid place-items-center">
      <Spinner />
    </main>
  );
}
