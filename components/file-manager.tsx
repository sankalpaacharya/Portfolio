"use client";
import { useFileManager, FileNode } from "@/hooks/useFileManager";
import { FolderItem, FileItem } from "@/components/chatcn/system/file-manager";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AboutMe } from "./renders/about-me";
import WerideReadme from "./renders/weride";
import BloomiReadMe from "./renders/bloomi";
import Link from "next/link";
import Chatcn from "./renders/chatcn";
import ZeroTwoReadMe from "./renders/zerotwo";
import { Experience } from "./renders/experience";
import Reflection from "./renders/reflection";
import Blogs from "./renders/blogs";

const data: FileNode[] = [
  {
    type: "folder",
    name: "projects",
    children: [
      {
        type: "folder",
        name: "chatcn",
        children: [
          {
            type: "file",
            name: "3d component.mp4",
            thumbnail: "/images/chatcnvideo.png",
            render: (
              <div>
                <video controls src={"video/chatcn.mp4"} />
              </div>
            ),
          },
          {
            type: "file",
            name: "preview.png",
            thumbnail: "/images/chatcn.png",
            render: (
              <div>
                <img src="/images/chatcn.png" />
              </div>
            ),
          },
          {
            type: "file",
            name: "README.md",
            render: <Chatcn />,
          },
          {
            type: "file",
            name: ".vscode",

            src: "https://github.dev/sankalpaacharya/chatcn",
          },
        ],
      },
      {
        type: "folder",
        name: "bloomi",
        children: [
          {
            type: "file",
            name: "video.mp4",
            thumbnail: "/images/bloomivideo.png",
            render: (
              <div>
                <video controls src={"video/bloomi.mp4"} />
              </div>
            ),
          },
          {
            type: "file",
            name: "preview.png",
            thumbnail: "/images/bloomiapp.png",
            render: (
              <div>
                <img src="/images/bloomiapp.png" />
              </div>
            ),
          },
          {
            type: "file",
            name: "README.md",
            render: <BloomiReadMe />,
          },
          {
            type: "file",
            name: ".vscode",

            src: "https://github.dev/sankalpaacharya/bloomi",
          },
        ],
      },
      {
        type: "folder",
        name: "weride",
        children: [
          {
            type: "file",
            name: "weride.mp4",
            thumbnail: "/images/weridevideo.png",
            render: (
              <div>
                <video controls src={"video/weride.mp4"} />
              </div>
            ),
          },

          {
            type: "file",
            name: "preview.png",
            thumbnail: "https://www.sankalpa.info.np/images/weride.png",
            render: (
              <div>
                <img src="/images/weride.png" />
              </div>
            ),
          },

          { type: "file", name: "README.md", render: <WerideReadme /> },
          {
            type: "file",
            name: ".vscode",

            src: "https://github.dev/sankalpaacharya/weride",
          },
        ],
      },
      {
        type: "folder",
        name: "zero two",
        children: [
          {
            type: "file",
            name: "zerotwo.mov",
            thumbnail: "/images/zerotwovideo.png",
            render: (
              <div>
                <video controls src={"video/gamevideo.mov"} />
              </div>
            ),
          },
          {
            type: "file",
            name: "preview.png",
            thumbnail: "/images/zerotwo.png",
            render: (
              <div>
                <img src="/images/zerotwo.png" />
              </div>
            ),
          },

          {
            type: "file",
            name: "README.md",
            render: <ZeroTwoReadMe />,
          },
          {
            type: "file",
            name: ".vscode",

            src: "https://github.dev/sankalpaacharya/zero-two",
          },
        ],
      },
      {
        type: "file",
        name: "Reflection.md",
        render: <Reflection />,
      },
    ],
  },
  {
    type: "file",
    name: "AboutMe.md",
    render: <AboutMe />,
  },
  {
    type: "file",
    name: "Experience.md",
    render: <Experience />,
  },
  {
    type: "file",
    name: "Blogs.md",
    render: <Blogs />,
  },
];

export default function FileManager() {
  const { path, currentFolder, openFolder, goBack, goTo } =
    useFileManager(data);

  return (
    <div className="h-full w-full flex flex-col p-3 sm:p-6 space-y-4 sm:space-y-6 bg-card/95 backdrop-blur-xs border rounded overflow-hidden">
      <div className="flex items-center text-xs sm:text-sm text-muted-foreground flex-shrink-0 overflow-x-auto whitespace-nowrap">
        {path.map((folder, index) => (
          <div key={folder} className="flex items-center flex-shrink-0">
            <button
              onClick={() => goTo(index)}
              className="text-muted-foreground focus:outline-none hover:underline"
            >
              {folder}
            </button>
            {index < path.length - 1 && (
              <span className="mx-2 text-muted-foreground">/</span>
            )}
          </div>
        ))}
      </div>

      <div className="flex-shrink-0">
        <button
          onClick={goBack}
          disabled={path.length <= 1}
          className="px-3 py-1 border border-border rounded text-xs sm:text-sm bg-muted/10 text-muted-foreground disabled:opacity-50"
        >
          ← Back
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 flex-1 overflow-y-auto overflow-x-hidden content-start justify-items-start webkit-overflow-scrolling-touch">
        {currentFolder.map((item) =>
          item.type === "folder" ? (
            <FolderItem
              key={item.name}
              name={item.name}
              onClick={() => openFolder(item.name)}
              tabIndex={0}
            />
          ) : item.src ? (
            <Link href={item.src} target="_blank" key={item.name}>
              <FileItem
                key={item.name}
                name={item.name}
                src={item.src}
                onClick={() => {}}
                thumbnail={item.thumbnail}
                tabIndex={0}
              />
            </Link>
          ) : (
            <Dialog key={item.name}>
              <DialogTrigger className="flex">
                <FileItem
                  name={item.name}
                  src={item.src}
                  onClick={() => null}
                  thumbnail={item.thumbnail}
                  tabIndex={0}
                />
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>{item.name}</DialogTitle>
                {item.render ? item.render : <p>No content to render</p>}
              </DialogContent>
            </Dialog>
          )
        )}
      </div>
    </div>
  );
}
