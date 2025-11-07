"use client";
import { useState } from "react";
import StatusBar from "@/components/status-bar";
import { TerminalUI } from "@/components/terminal";
import FileManager from "@/components/file-manager";
import { LoginManager } from "@/components/chatcn/system/login-manager";
import { ApplicationManager } from "@/components/chatcn/system/app-manager";
import Browser from "@/components/chatcn/system/browser";
import { useStore } from "@/store/useStore";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

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

          <div className="flex-1 overflow-hidden p-1">
            <ResizablePanelGroup
              direction="horizontal"
              className="h-full w-full"
            >
              {/* Left side - Terminal and Browser */}
              {(isAppOpen("terminal") || isAppOpen("browser")) && (
                <>
                  <ResizablePanel defaultSize={50} minSize={30}>
                    <ResizablePanelGroup direction="vertical">
                      {isAppOpen("terminal") && (
                        <>
                          <ResizablePanel defaultSize={50} minSize={20}>
                            <div className="h-full w-full p-0.5">
                              <TerminalUI />
                            </div>
                          </ResizablePanel>
                          {isAppOpen("browser") && (
                            <ResizableHandle withHandle />
                          )}
                        </>
                      )}

                      {isAppOpen("browser") && (
                        <ResizablePanel
                          defaultSize={isAppOpen("terminal") ? 50 : 100}
                          minSize={20}
                        >
                          <div className="h-full w-full p-0.5">
                            <Browser />
                          </div>
                        </ResizablePanel>
                      )}
                    </ResizablePanelGroup>
                  </ResizablePanel>

                  {isAppOpen("file-manager") && <ResizableHandle withHandle />}
                </>
              )}

              {/* Right side - File Manager */}
              {isAppOpen("file-manager") && (
                <ResizablePanel
                  defaultSize={
                    isAppOpen("terminal") || isAppOpen("browser") ? 50 : 100
                  }
                  minSize={30}
                >
                  <div className="h-full w-full p-0.5">
                    <FileManager />
                  </div>
                </ResizablePanel>
              )}
            </ResizablePanelGroup>
          </div>
        </>
      )}
    </div>
  );
}
