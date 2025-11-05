import Link from "next/link";
import { Kbd } from "../ui/kbd";
import { Twitter } from "lucide-react";

export function AboutMe() {
  return (
    <div className="space-y-5">
      <p>
        Hello 👋, This is me <span className="text-secondary">sanku</span>, I
        was always super excited about the computer since i was small.
      </p>
      <p>I started programming during the 2020 when i was in high school.</p>

      <p>
        I was doing bug bounty and learning cyber security and later when i
        joined college on 2022 I started more focusing on web development.
      </p>
      <div>
        <div className="flex items-center justify-center gap-2">
          <p>Here's some of my past work related to web security </p>
        </div>
        <ul className="list-disc ml-5">
          <li>
            <Link
              href={
                "https://blog.sankalpa.info.np/posts/testing-cookies-worth-dollar-500"
              }
              className="text-primary underline hover:text-primary/80 transition-all"
            >
              Discovered Broken Access Control on sso.agora.io leads to full
              account takeover($500)
            </Link>
          </li>
          <li>
            <Link
              href={"https://support.leetcode.com/hc/en-us/requests/208294"}
              className="text-primary underline hover:text-primary/80 transition-all"
            >
              Discovered No Email verification Leads to Account Takeover on
              Leetcode(100 LeetCoins)
            </Link>
          </li>
        </ul>
      </div>
      <p>
        You can find my recent web development related work on{" "}
        <Kbd>~/projects</Kbd> directory
      </p>
      <div className="flex items-center gap-2 text-xs">
        <span className="relative flex size-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>{" "}
          <span className="relative inline-flex size-3 rounded-full bg-primary/70"></span>
        </span>
        <Link
          href={"https://x.com/sankalpa_02"}
          className="flex gap-1 items-center hover:underline"
        >
          Available for the opportunities <Twitter className="size-4" />
        </Link>
      </div>
    </div>
  );
}
