import { useTheme } from "next-themes";
import React, { useEffect, ReactNode, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{' '}
        |{' '}
          <Link href="/about">
            <a>About</a>
          </Link>{' '}
        |{' '}
          <Link href="/users">
            <a>Users List</a>
          </Link>{' '}
        | <a href="/api/users">Users API</a> {' '}
        |{' '}
          <a className="cursor-pointer" onClick={() => isMounted &&
            setTheme(theme === "light" ? "dark" : "light")}>
            {
              isMounted && theme === "light" ?
                "dark" :
                "light"
            }
          </a>
        </nav>
      </header>
      {children}
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>
  );
};

export default Layout;
