import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Navbar, Footer } from "../components";
const Error = () => {
  return (
    <>
      {/* <Navbar/> */}
      <div className="errorpage p-5 d-flex justify-content-center align-items-center">
        <div>
          <Image
            src="/404.webp"
            className="img-fluid"
            alt="404"
            width={500}
            height={500}
            priority={true}
          />
          <h1 className="text-center">Page Not Found</h1>
          <p className="text-center">
            <Link href="/" className="text-decoration-none tags fs-1 home-link">
              &larr; Go Back to Home
            </Link>
          </p>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default Error;
