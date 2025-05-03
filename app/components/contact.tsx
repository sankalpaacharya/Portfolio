import React from "react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="mt-20 space-y-3">
      <h2 className="text-3xl font-semibold">Contact</h2>
      <p className="">
        You can send me over an e-mail on
        <Link
          href="mailto:sankalpaacharya01@gmail.com"
          className="text-blue-400 hover:underline"
        >
          sankalpaacharya01@gmail.com
        </Link>
      </p>
    </div>
  );
}
