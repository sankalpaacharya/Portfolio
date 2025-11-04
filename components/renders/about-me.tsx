import Link from "next/link";
import { Kbd } from "../ui/kbd";

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
              className="text-primary underline"
            >
              Discovered Broken Access Control on sso.agora.io leads to full
              account takeover($500)
            </Link>
          </li>
          <li>
            <Link
              href={"https://support.leetcode.com/hc/en-us/requests/208294"}
              className="text-primary underline"
            >
              Discovered No Email verification Leads to Account Takeover on
              Leetcode(100 LeetCoins)
            </Link>
          </li>
        </ul>
      </div>

      <p>
        You can find my recent web projects on <Kbd>~/projects</Kbd> directory
      </p>
    </div>
  );
}
