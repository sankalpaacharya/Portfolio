"use client";

import { useStore } from "@/store/useStore";
import { Toaster } from "./ui/sonner";
import BrightnessScreen from "./settings/brightness-screen";
// import TimeSpent from "./time-spent";

export function BodyWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const wallpaper = useStore((state) => state.wallpaper);
  const brightness = useStore((state) => state.brightness);

  return (
    <body
      className={className}
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* <TimeSpent /> */}
      <Toaster position="top-right" />
      <BrightnessScreen brightness={brightness} />
      {children}
    </body>
  );
}
