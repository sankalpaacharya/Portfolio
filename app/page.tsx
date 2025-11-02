import StatusBar from "@/components/status-bar";
import { TerminalUI } from "@/components/terminal";
import FileManager from "@/components/file-manager";

export default function Page() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Status Bar - Fixed at top like i3 */}
      <div className="flex-none">
        <StatusBar />
      </div>

      {/* Main workspace - i3 tiling style */}
      <div className="flex-1 flex gap-1 p-1 overflow-hidden">
        {/* Terminal Window - Left tile */}
        <div className="flex-1 min-w-0 flex flex-col">
          <TerminalUI />
        </div>

        {/* File Manager Window - Right tile */}
        <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
          <FileManager />
        </div>
      </div>
    </div>
  );
}
