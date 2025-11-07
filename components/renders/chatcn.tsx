import Link from "next/link";

export default function Chatcn() {
  return (
    <div className="space-y-5">
      <p>
        chatcn is a collection of React components. When I was working on{" "}
        <Link
          target="_blank"
          href={"https://fixyourspend.vercel.app"}
          className="text-primary hover:underline"
        >
          bloomi.live
        </Link>
        , I had to build a calendar-like heatmap.
      </p>
      <p>
        Shadcn didn’t have the component I needed, so I built one for my app.
        After finishing the component, I thought — why not make it shareable?
      </p>
      <p>
        Since then, I’ve been adding more components that I use in my
        applications and feel might be useful for others too.
      </p>
      <p>
        This is the project I’m actively working on right now. My goal isn’t
        just to add UI components but to build things that are genuinely helpful
        in web development ❤️
      </p>
      <div>
        <p>
          site:{" "}
          <Link
            target="_blank"
            href={"https://chatcn.me"}
            className="text-primary hover:underline"
          >
            chatcn.me
          </Link>
        </p>

        <p>
          repo:{" "}
          <Link
            target="_blank"
            href={"https://github.com/sankalpaacharya/chatcn"}
            className="text-primary hover:underline"
          >
            github.com/sankalpaacharya/chatcn
          </Link>
        </p>
      </div>
    </div>
  );
}
