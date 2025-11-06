"use client";
import { useState } from "react";
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
    <div className="h-screen flex flex-col overflow-hidden touch-pan-y">
      <ApplicationManager />
      {!isLogin ? (
        <LoginManager portal={true} onLogin={() => setIsLogin(true)} />
      ) : (
        <>
          <div className="flex-none">
            <StatusBar />
          </div>

          <div className="flex-1 flex flex-col lg:flex-row gap-1 p-1 overflow-hidden min-h-0">
            <div className="flex-1 min-w-0 min-h-0 flex flex-col gap-1 overflow-auto lg:overflow-hidden">
              {isAppOpen("terminal") && <TerminalUI />}
              {isAppOpen("browser") && <Browser />}
            </div>

            <div className="flex-1 min-w-0 min-h-0 flex flex-col gap-1 overflow-auto lg:overflow-hidden">
              {isAppOpen("file-manager") && <FileManager />}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
