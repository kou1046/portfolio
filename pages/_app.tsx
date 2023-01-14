import "@/styles/globals.css";
import Link from "next/link";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav className="container fixed bottom-0 z-10 mx-auto h-12 border-[1px] bg-white sm:static">
        <ul className="flex-center flex h-full items-center text-center [&_a]:grow">
          <Link href="/">
            <li>HOME</li>
          </Link>
          <Link href="/about">
            <li>ABOUT</li>
          </Link>
          <Link href="/apps">
            <li>APPS</li>
          </Link>
          <Link href="/contact">
            <li>CONTACT</li>
          </Link>
        </ul>
      </nav>
      <Component {...pageProps} />
    </>
  );
}
