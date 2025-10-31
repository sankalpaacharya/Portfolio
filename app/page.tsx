import StatusBar from "@/components/status-bar";
import { TerminalUI } from "@/components/terminal";

export default function Page() {
  return (
    <div className="">
      <StatusBar />
      <div>
        <TerminalUI />
      </div>
      <div className="m-10"></div>
    </div>
  );
}
