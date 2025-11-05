"use client";
import {
  Bluetooth,
  Wifi,
  BatteryFull,
  SunMedium,
  Clock,
  Calendar,
  Settings as SettingsIcon,
} from "lucide-react";
import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "./ui/dialog";
import { SettingsContent } from "./chatcn/system/settings";

export default function StatusBar() {
  const [active, setActive] = useState(1);

  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = now.toLocaleDateString([], {
    month: "short",
    day: "numeric",
  });

  const actions = [
    { value: "30%", icon: SunMedium },
    { value: "100%", icon: BatteryFull },
    { value: "Wi-Fi", icon: Wifi },
    { value: "BT", icon: Bluetooth },
    { value: time, icon: Clock },
    { value: date, icon: Calendar },
  ];

  return (
    <div className="bg-card flex justify-between p-2 mx-1 border rounded shadow-xl text-xs">
      <div
        className="flex items-center gap-2 relative"
        style={
          {
            "--workspace-index": active - 1,
          } as React.CSSProperties
        }
      >
        <div
          className="absolute inset-y-0 w-9 bg-primary/20 rounded-md transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(calc(var(--workspace-index) * 2.75rem))`,
          }}
        />

        {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => setActive(num)}
            className={`relative z-10 w-9 py-1 cursor-pointer rounded-md transition-colors duration-200 ${
              num === active
                ? "text-primary font-medium"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {num}
          </button>
        ))}
      </div>
      <div className="flex items-center">
        <div className="p-1 hover:bg-muted rounded flex items-center">
          <Dialog>
            <DialogTrigger>
              <div className="p-1 hover:bg-muted rounded">
                <SettingsIcon className="size-4" />
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Settings</DialogTitle>
              <SettingsContent />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="flex items-center gap-4 text-muted-foreground">
        {actions.map(({ value, icon: Icon }, idx) => (
          <div
            key={idx}
            className="flex items-center gap-1 hover:text-foreground transition-colors duration-200"
          >
            <Icon className="size-4" />
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
