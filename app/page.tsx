import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>HEY</h1>
      <UserButton />
    </main>
  );
}
