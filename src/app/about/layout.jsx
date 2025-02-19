import Link from "next/link";
import React from "react";

function AboutLayout({ children }) {
  return (
    <div>
      <nav className="mt-6">
        <ul className="flex gap-6 text-xl font-medium text-fuchsia-700">
          <li>
            <Link href="/about/mission">Mission</Link>
          </li>
          <li>
            <Link href="/about/vision">Vision</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}

export default AboutLayout;
