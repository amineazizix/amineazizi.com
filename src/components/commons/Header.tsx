import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image src="/logo-big.svg" alt="logo" width={100} height={100} />
        </Link>
      </div>
      <nav className="flex items-center gap-2">
         <ul className="flex items-center gap-2">
            <li>
               <Link href="/">Home</Link>
            </li>
            <li>
               <Link href="/">About</Link>
            </li>
            <li>
               <Link href="/">Contact</Link>
            </li>
         </ul>
      </nav>
      <div className="flex items-center gap-2">
         <Link href="/">
            <Image src="/logo-small.svg" alt="logo" width={100} height={100} />
         </Link>
      </div>
    </header>
  );
}
