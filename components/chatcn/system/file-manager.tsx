"use client";
import React from "react";
import {
  Folder as FolderIcon,
  File as FileIcon,
  Image as ImageIcon,
  Play,
  FileText,
  FileCode,
  LoaderCircle,
} from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

type ItemCommonProps = {
  name: string;
  onClick?: () => void;
  className?: string;
  thumbnail?: string;
  src?: string;
  tabIndex?: number;
};

export function FolderItem({
  name,
  onClick,
  className = "",
  tabIndex = 0,
}: ItemCommonProps) {
  return (
    <div
      onDoubleClick={onClick}
      className={`flex flex-col h-32 w-28 sm:h-44 sm:w-40 hover:bg-muted items-center justify-center p-2 sm:p-3 rounded-lg bg-transparent cursor-pointer ${className}`}
      tabIndex={tabIndex}
    >
      <div className="w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center rounded-md">
        <FolderIcon className="w-14 h-14 sm:w-20 sm:h-20 text-primary" />
      </div>
      <span className="text-xs sm:text-sm text-muted-foreground truncate mt-1 sm:mt-2 max-w-full text-center">
        {name}
      </span>
    </div>
  );
}

export function FileItem({
  name,
  onClick,
  className = "",
  tabIndex = 0,
  thumbnail,
}: ItemCommonProps) {
  const [imageLoading, setImageLoading] = React.useState(true);
  const fileExtension = (name.split(".").pop() || "").toLowerCase();
  const meta = getFileMeta(fileExtension);
  const imageSrc = thumbnail;

  return (
    <div
      onDoubleClick={onClick}
      className={`flex flex-col h-32 w-28 sm:h-44 sm:w-40 hover:bg-muted items-center justify-center p-2 sm:p-3 rounded-lg bg-transparent cursor-pointer ${className}`}
      tabIndex={tabIndex}
    >
      <div className="w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center rounded-md relative overflow-hidden">
        {imageSrc ? (
          <>
            {imageLoading && (
              <div className="absolute inset-0">
                <FileSkeleton />
              </div>
            )}
            <img
              src={imageSrc}
              alt={name}
              loading="lazy"
              className={`object-cover w-full h-full rounded-md ${
                imageLoading ? "opacity-0" : "opacity-100"
              } transition-opacity duration-300`}
              onLoad={() => setImageLoading(false)}
              onError={() => setImageLoading(false)}
            />
            {meta.type === "video" && !imageLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-md">
                <div className="bg-black/50 rounded-full p-2">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-white" />
                </div>
              </div>
            )}
          </>
        ) : (
          <meta.icon className="w-14 h-14 sm:w-20 sm:h-20 text-muted-foreground" />
        )}
      </div>
      <span className="text-xs sm:text-sm text-muted-foreground truncate mt-1 sm:mt-2 max-w-full text-center">
        {name}
      </span>
    </div>
  );
}

export function FileSkeleton() {
  return (
    <div className="relative w-28 h-28">
      <Skeleton className="w-full h-full bg-muted" />
      <LoaderCircle className="animate-spin absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary" />
    </div>
  );
}

function getFileMeta(extension: string) {
  const imageExt = ["png", "jpg", "jpeg", "gif", "svg", "webp"];
  const videoExt = ["mp4", "mov", "avi", "mkv", "webm"];
  const textExt = ["txt", "md", "markdown"];
  const codeExt = [
    "js",
    "ts",
    "jsx",
    "tsx",
    "py",
    "java",
    "c",
    "cpp",
    "cs",
    "json",
    "html",
    "css",
    "vscode",
  ];
  if (imageExt.includes(extension)) return { type: "image", icon: ImageIcon };
  if (videoExt.includes(extension)) return { type: "video", icon: Play };
  if (textExt.includes(extension)) return { type: "text", icon: FileText };
  if (codeExt.includes(extension)) return { type: "code", icon: FileCode };
  return { type: "unknown", icon: FileIcon };
}
