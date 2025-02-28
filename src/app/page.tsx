import Image from "next/image";

export default function Home() {
  return (
    <div className="container-main grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <Image
          className="dark:invert"
          src="/logo-big.svg"
          alt="Amine Azizi logo"
          width={180}
          height={38}
          priority
        />
      </main>
    </div>
  );
}
