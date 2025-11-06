import Link from "next/link";
import { Kbd } from "../ui/kbd";
import { Twitter } from "lucide-react";

export function AboutMe() {
  return (
    <div className="space-y-5">
      <p>
        Hello 👋, I’m <span className="text-secondary">sanku</span>. I’ve been
        super excited about computers ever since I was a kid.
      </p>

      <p>I started programming back in 2020 when I was in high school.</p>

      <p>
        I used to do bug bounties and learn cybersecurity. Later, when I joined
        college in 2022, I started focusing more on web development.
      </p>

      <div>
        <div className="flex items-center justify-center gap-2">
          <p>Here are some of my past works related to web security:</p>
        </div>
        <ul className="list-disc ml-5">
          <li>
            <Link
              target="_blank"
              href="https://blog.sankalpa.info.np/posts/testing-cookies-worth-dollar-500"
              className="text-primary underline hover:text-primary/80 transition-all"
            >
              Discovered a Broken Access Control vulnerability on sso.agora.io
              that led to full account takeover ($500)
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://support.leetcode.com/hc/en-us/requests/208294"
              className="text-primary underline hover:text-primary/80 transition-all"
            >
              Found an issue on LeetCode where missing email verification led to
              account takeover (reward: 100 LeetCoins)
            </Link>
          </li>
        </ul>
      </div>

      <p>
        You can find my recent web development work in the <Kbd>~/projects</Kbd>{" "}
        directory.
      </p>

      <div className="flex items-center gap-2 text-xs">
        <span className="relative flex size-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex size-3 rounded-full bg-primary/70"></span>
        </span>
        <Link
          target="_blank"
          href="https://x.com/sankalpa_02"
          className="flex gap-1 items-center hover:underline"
        >
          Open to new opportunities <Twitter className="size-4" />
        </Link>
      </div>
    </div>
  );
}
