import StatusBar from "@/components/status-bar";
import { TerminalUI } from "@/components/terminal";
import FileManager from "@/components/file-manager";

export default function Page() {
  return (
    <div className="">
      <StatusBar />
      <div>
        <TerminalUI />
      </div>
      <div className="m-10">
        <FileManager />
      </div>
    </div>
  );
}
