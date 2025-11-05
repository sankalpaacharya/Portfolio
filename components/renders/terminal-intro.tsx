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
    <div className="flex gap-4">
      <img
        src={"/wallpapers/dark.png"}
        className="opacity-70 w-50 h-50 object-cover border"
      />

      <div>
        <p className="text-primary">sanku@ubuntu</p>
        <p>--------------</p>
        {systemInfo.map((info) => (
          <div key={info.label} className="flex space-x-2">
            <span className="text-secondary">{info.label}:</span>{" "}
            <p className="text-primary">{info.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
