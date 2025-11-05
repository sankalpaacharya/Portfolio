"use client";
import { useEffect, useState } from "react";
import StatusBar from "@/components/status-bar";
import { TerminalUI } from "@/components/terminal";
import FileManager from "@/components/file-manager";
import { LoginManager } from "@/components/chatcn/system/login-manager";
import { ApplicationManager } from "@/components/chatcn/system/app-manager";
import Browser from "@/components/chatcn/system/browser";
import { useStore } from "@/store/useStore";

export default function Page() {
  const [isLogin, setIsLogin] = useState(false);
  const { isAppOpen } = useStore();

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <ApplicationManager />
      {!isLogin ? (
        <LoginManager portal={true} onLogin={() => setIsLogin(true)} />
      ) : (
        <>
          <div className="flex-none">
            <StatusBar />
          </div>

          <div className="flex-1 flex gap-1 p-1 overflow-hidden">
            <div className="flex-1 min-w-0 flex flex-col gap-1">
              {isAppOpen("terminal") && <TerminalUI />}

              {isAppOpen("browser") && <Browser />}
            </div>

            <div className="flex-1 gap-1 min-w-0 flex flex-col overflow-hidden">
              {isAppOpen("file-manager") && <FileManager />}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
