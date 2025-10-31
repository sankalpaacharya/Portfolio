"use client";
import {
  Bluetooth,
  Wifi,
  BatteryFull,
  SunMedium,
  Clock,
  Calendar,
} from "lucide-react";

export default function StatusBar() {
  const numbers = Array.from({ length: 9 }, (_, i) => i + 1);

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
    <div className="bg-card flex justify-between p-2 m-1 border rounded shadow-xl text-xs">
      <div className="flex items-center gap-2">
        {numbers.map((num) => (
          <div
            key={num}
            className={`px-3 py-1 rounded-md text-center transition-all duration-200 cursor-pointer ${
              num === 1
                ? "bg-[#cba6f7]/30 text-[#cba6f7] shadow-inner"
                : "hover:bg-muted"
            }`}
          >
            {num}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4 text-[#bac2de]">
        {actions.map(({ value, icon: Icon }, idx) => (
          <div
            key={idx}
            className="flex items-center gap-1 hover:text-[#f5e0dc] transition-colors duration-200"
          >
            <Icon className="size-4" />
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
