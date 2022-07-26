import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Cookie from "js-cookie";
import Link from "next/link";

const Home: NextPage = () => {
  const [authorized, setAuthorized] = useState("");

  useEffect(() => {
    const value = Cookie.get("authorized");
    if (value) {
      setAuthorized(value);
    }
  }, []);

  const clearCookie = () => {
    Cookie.remove("authorized");
    setAuthorized("");
  };

  return (
    <div>
      <div>authorized: {authorized}</div>
      <div>
        <button onClick={clearCookie}>Clear</button>
      </div>
      <Link href="/login" passHref>
        <a>login route</a>
      </Link>
      <br />
      <Link href="/protected" passHref>
        <a>Go to protected route</a>
      </Link>
      <br />
      <Link href="/another-protected" passHref>
        <a>Go to another protected route</a>
      </Link>
    </div>
  );
};

export default Home;
