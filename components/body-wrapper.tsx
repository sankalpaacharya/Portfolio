"use client";

import { useStore } from "@/store/useStore";

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
      {children}
    </body>
  );
}
