import Head from "next/head";

const Layout = ({ children, title = "My Personal Blog" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="container">
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
