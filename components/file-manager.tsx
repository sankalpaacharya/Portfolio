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
            name: "preview.png",
            thumbnail: "https://www.sankalpa.info.np/images/weride.png",
            render: (
              <div>
                <img src="/images/weride.png" />
              </div>
            ),
          },
          {
            type: "file",
            name: ".vscode",

            src: "https://github.dev/sankalpaacharya/weride",
          },
          { type: "file", name: "README.md", render: <WerideReadme /> },
        ],
      },
      {
        type: "folder",
        name: "zero two",
        children: [
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
            name: "zerotwo.mov",
            thumbnail: "/images/zerotwo.png",
            render: (
              <div>
                <video controls src={"video/zerotwo.mov"} />
              </div>
            ),
          },
          {
            type: "file",
            name: ".vscode",

            src: "https://github.dev/sankalpaacharya/zero-two",
          },
        ],
      },
    ],
  },
  {
    type: "file",
    name: "AboutMe.md",
    render: <AboutMe />,
  },
];

export default function FileManager() {
  const { path, currentFolder, openFolder, goBack, goTo } =
    useFileManager(data);

  return (
    <div className="h-full w-full flex flex-col p-6 space-y-6 bg-card/95 border rounded overflow-hidden">
      <div className="flex items-center text-sm text-muted-foreground flex-shrink-0">
        {path.map((folder, index) => (
          <div key={folder} className="flex items-center">
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
          className="px-3 py-1 border border-border rounded text-sm bg-muted/10 text-muted-foreground disabled:opacity-50"
        >
          ← Back
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 flex-1 overflow-auto content-start justify-items-start">
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
