"use client";

import { useStore } from "@/store/useStore";
import { Toaster } from "./ui/sonner";
import TimeSpent from "./time-spent";

export function BodyWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const wallpaper = useStore((state) => state.wallpaper);

  return (
    <body
      className={className}
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <TimeSpent />
      <Toaster position="top-right" />
      {children}
    </body>
  );
}
