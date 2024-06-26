import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-6xl font-bold">Cristiano Ronaldo</h1>
        <p className="text-2xl mb-16">
          Age: <span className="font-semibold">38</span>
        </p>
      </div>
    </main>
  );
}
