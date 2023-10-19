import Head from "next/head";
import Link from "next/link";

const Layout = ({ children, title = "My Personal Website" }) => {
  return <>
    <Head>
      <title>{title}</title>
    </Head>
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <Link href="/" className="px-2">
          Home
        </Link>
        <Link href="/about" className="px-2">
          About Me
        </Link>
        <Link href="/blog" className="px-2">
          Blog
        </Link>
      </div>
    </nav>
    <div className="container mx-auto p-4">
      <main>{children}</main>
    </div>
  </>;
};

export default Layout;
