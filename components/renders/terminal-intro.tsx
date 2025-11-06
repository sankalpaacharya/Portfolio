import React from "react";

export function TerminalIntro() {
  const systemInfo = [
    { label: "OS", value: "Ubuntu 24.04.3 LTS x86_64" },
    { label: "Host", value: "Nitro AN515-57 V1.17" },
    { label: "Uptime", value: "10 mins" },
    { label: "WM", value: "i3" },
    { label: "Terminal", value: "tmux" },
    { label: "CPU", value: "11th Gen Intel i5-11400H (12) @ 4.500GHz" },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
      <img
        src={"/wallpapers/dark.png"}
        className="opacity-70 w-32 h-32 sm:w-40 sm:h-40 lg:w-50 lg:h-50 object-cover border flex-shrink-0"
        alt="System wallpaper"
      />

      <div className="min-w-0 flex-1">
        <p className="text-primary text-sm sm:text-base">sanku@ubuntu</p>
        <p className="text-sm sm:text-base">--------------</p>
        {systemInfo.map((info) => (
          <div
            key={info.label}
            className="flex flex-wrap gap-x-2 text-xs sm:text-sm"
          >
            <span className="text-secondary flex-shrink-0">{info.label}:</span>
            <p className="text-primary break-all">{info.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
