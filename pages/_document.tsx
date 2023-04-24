import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/page2">Page 2</Link>
          <Link href="/page3">Page 3</Link>
        </nav>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
