import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Layout = ({ children, title = "My Personal Website" }) => {
  const router = useRouter();

  const isActive = (route) => {
    if (route === "/blog") {
      return router.pathname === route || router.pathname.startsWith("/blog/");
    }
    return router.pathname === route;
  };

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="antialiased max-w-[45rem] mx-4 mt-8 mb-36 lg:mx-auto">
        <nav className="bg-white">
          <div className="flex justify-between items-center p-4">
            <div className="text-lg font-semibold text-gray-900">
              <Link href="/">
                <Image
                  src="/logo-dalle.png"
                  alt="My Website Logo"
                  width={50}
                  height={50}
                />
              </Link>
            </div>
            <div className="space-x-4 relative">
              <Link href="/">
                <span
                  className={`cursor-pointer text-gray-800 hover:text-gray-500 ${
                    isActive("/") ? "active-link" : ""
                  }`}
                >
                  home
                </span>
              </Link>
              <Link href="/about">
                <span
                  className={`cursor-pointer text-gray-800 hover:text-gray-500 ${
                    isActive("/about") ? "active-link" : ""
                  }`}
                >
                  about me
                </span>
              </Link>
              <Link href="/blog">
                <span
                  className={`cursor-pointer text-gray-800 hover:text-gray-500 ${
                    isActive("/blog") ? "active-link" : ""
                  }`}
                >
                  blog
                </span>
              </Link>
              <span className="absolute h-0.5 bg-blue-500 transition-all duration-300 ease-in-out underline"></span>
            </div>
          </div>
        </nav>
        <main className="p-3  mt-6">{children}</main>
      </div>
      <style jsx>{`
        .active-link {
          border-bottom: 2px solid #0a93a8;
          padding-bottom: 3.25px;
        }
        .underline {
          width: 0;
          bottom: 0;
          left: 0;
        }
        .active-link ~ .underline {
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default Layout;
