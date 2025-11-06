import Link from "next/link";

const coolComponents = [
  {
    name: "Code Editor",
    link: "https://www.chatcn.me/docs/component/code-editor",
  },
  {
    name: "Audio Visualizer",
    link: "https://www.chatcn.me/docs/3d-components/audio-visualizer",
  },
  {
    name: "Chat Container",
    link: "https://www.chatcn.me/docs/component/chat-container",
  },
  {
    name: "Terminal",
    link: "https://www.chatcn.me/docs/system/terminal",
  },
  {
    name: "Weather",
    link: "https://www.chatcn.me/docs/component/weather",
  },
  {
    name: "Calendar",
    link: "https://www.chatcn.me/docs/component/calendar",
  },
];

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
        shadcn didn’t have the component I needed, so I built one for my app.
        after finishing the component, I thought why not make it shareable?
      </p>
      <p>
        since then, I’ve been adding more components that I use in my
        applications and feel might be useful for others too.
      </p>
      <p>
        this is the project I’m actively working on right now. my goal isn’t
        just to add UI components but to build things that are genuinely helpful
        in web development ❤️
      </p>

      <div className="pt-2">
        <p className="font-medium mb-2">components available</p>
        <div className="flex flex-wrap gap-2 text-sm">
          {coolComponents.map((c) => (
            <Link
              key={c.name}
              href={c.link}
              target="_blank"
              className="text-primary hover:underline hover:text-primary/80 transition-colors"
            >
              {c.name}
            </Link>
          ))}
        </div>

        <p className="text-muted-foreground text-sm mt-3">
          these are just a few highlights{" "}
          <Link
            href="https://www.chatcn.me/docs"
            target="_blank"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            explore all components in the docs
            <span aria-hidden>→</span>
          </Link>
        </p>
      </div>

      <div className="pt-4 space-y-1">
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
