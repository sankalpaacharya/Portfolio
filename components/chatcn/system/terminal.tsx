import { cn } from "@/lib/utils";
import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
  useRef,
} from "react";
import { createPortal } from "react-dom";
import { Kbd } from "@/components/ui/kbd";
import { SquareChevronRight, Command, Info } from "lucide-react";
import { TerminalIntro } from "@/components/renders/terminal-intro";
import { useStore } from "@/store/useStore";
import Link from "next/link";

type TerminalState = "normal" | "minimize" | "maximize";

type TerminalEntry = {
  command: string;
  output: React.ReactNode | string;
};

type TerminalContextType = {
  terminalState: TerminalState;
  setTerminalState: React.Dispatch<React.SetStateAction<TerminalState>>;
  terminalHistory: TerminalEntry[];
  setTerminalHistory: React.Dispatch<React.SetStateAction<TerminalEntry[]>>;
};

const TerminalContext = createContext<TerminalContextType>({
  terminalState: "normal",
  setTerminalState: () => {},
  terminalHistory: [],
  setTerminalHistory: () => {},
});

type TerminalProviderProps = {
  children: ReactNode;
  initialState?: TerminalState;
};

export function TerminalProvider({
  children,
  initialState = "normal",
}: TerminalProviderProps) {
  const [terminalState, setTerminalState] =
    useState<TerminalState>(initialState);
  const [terminalHistory, setTerminalHistory] = useState<TerminalEntry[]>([
    {
      command: "",
      output: <TerminalIntro />,
    },
    {
      command: "help",
      output: (
        <div className="space-y-2">
          <div>
            <p className="flex gap-1 items-center">
              Available commands <SquareChevronRight className="size-4" />
            </p>
            <ul className="list-disc ml-6">
              <li>whoami</li>
              <li>help</li>
              <li>clear</li>
            </ul>
          </div>
          <div>
            <p className="flex items-center gap-1">
              Shortcuts <Command className="size-4" />
            </p>
            <ul className="list-disc ml-6">
              <li>
                <Kbd>Ctrl</Kbd>+<Kbd>k</Kbd>:
                <span className="ml-1">applications manager</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      command: "",
      output: (
        <div className="border w-fit p-2 rounded mt-2 flex items-center gap-1">
          <Info className="size-4" />
          Components here used are from
          <Link
            href="https://chatcn.me"
            target="_blank"
            className="text-primary underline"
          >
            chatcn.me
          </Link>
          ✨
        </div>
      ),
    },
  ]);

  return (
    <TerminalContext.Provider
      value={{
        terminalState,
        setTerminalState,
        terminalHistory,
        setTerminalHistory,
      }}
    >
      {children}
    </TerminalContext.Provider>
  );
}

export function useTerminal() {
  const context = useContext(TerminalContext);
  if (!context) {
    throw new Error("useTerminal must be used within a TerminalProvider");
  }
  return context;
}

type TerminalProps = {
  children: ReactNode;
  className?: string;
};

function getTerminalPositionClasses(state: TerminalState): string {
  switch (state) {
    case "maximize":
      return "fixed inset-0 w-screen h-screen z-[9999] rounded-none text-md";
    case "minimize":
      return "fixed bottom-3 left-1/2 -translate-x-1/2 h-auto z-[9999] cursor-pointer";
    case "normal":
    default:
      return "relative h-auto";
  }
}

function getTerminalOutput(command: string): string | React.ReactNode {
  const cmd = command.trim();
  switch (cmd) {
    case "whoami":
      return (
        <div>
          Hi Im Sanku 21 year old dev I love{" "}
          <span className="text-blue-500">Development</span> and{" "}
          <span className="text-blue-500">Security</span>.
        </div>
      );
    case "help":
      return (
        <div className="space-y-2">
          <div>
            <p className="flex gap-1 items-center">
              Available commands <SquareChevronRight className="size-4" />
            </p>
            <ul className="list-disc ml-6">
              <li>whoami</li>
              <li>help</li>
              <li>clear</li>
            </ul>
          </div>
          <div>
            <p className="flex items-center gap-1">
              Shortcuts <Command className="size-4" />
            </p>
            <ul className="list-disc ml-6">
              <li>
                <Kbd>Ctrl</Kbd>+<Kbd>k</Kbd>:
                <span className="ml-1">applications manager</span>
              </li>
            </ul>
          </div>
        </div>
      );
    case "clear":
      return "CLEAR";
    case "exit":
      return "Closing...";
    default:
      return "Command not found!";
  }
}

export function Terminal({ children, className }: TerminalProps) {
  const { terminalState, setTerminalState } = useContext(TerminalContext);

  const handleClick = () => {
    if (terminalState === "minimize") {
      setTerminalState("normal");
    }
  };

  const content = (
    <div
      onClick={handleClick}
      className={cn(
        "flex flex-col border rounded overflow-auto",
        terminalState === "maximize" ? "" : className,
        getTerminalPositionClasses(terminalState)
      )}
    >
      {children}
    </div>
  );

  if (terminalState === "maximize" || terminalState === "minimize") {
    return createPortal(content, document.body);
  }
  return content;
}

type TerminalHeaderProps = {
  children: ReactNode;
  className?: string;
};

export function TerminalHeader({ children, className }: TerminalHeaderProps) {
  return (
    <header className={cn("p-3 bg-muted rounded rounded-b-none", className)}>
      {children}
    </header>
  );
}

export function TerminalInput() {
  const { setTerminalHistory } = useContext(TerminalContext);
  const [inputValue, setInputValue] = useState<string>("");
  const { closeApp } = useStore();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const command = inputValue.trim();
      const output = getTerminalOutput(command);

      if (output === "CLEAR") {
        setTerminalHistory([]);
        setInputValue("");
        return;
      }
      if (command === "exit") {
        closeApp("terminal");
        return;
      }

      setTerminalHistory((prev) => [
        ...prev,
        { command, output: command ? output : "" },
      ]);
      setInputValue("");
    }
  };

  return (
    <input
      onKeyDown={handleKeyDown}
      onChange={(e) => setInputValue(e.target.value)}
      value={inputValue}
      className="flex-1 bg-transparent text-md outline-none border-none caret-amber-300"
      type="text"
      autoFocus
    />
  );
}

type TerminalPromptProps = {
  children: React.ReactNode;
  className?: string;
};
export function TerminalPrompt({ children, className }: TerminalPromptProps) {
  return <div className={cn(className)}>{children}</div>;
}

type TerminalBodyProps = {
  children: ReactNode;
  className?: string;
};

export function TerminalBody({ children, className }: TerminalBodyProps) {
  const { terminalState } = useContext(TerminalContext);

  if (terminalState === "minimize") {
    return null;
  }

  return (
    <div
      className={cn(
        "bg-muted rounded-none rounded-b p-3 overflow-y-auto",
        terminalState === "maximize" ? "flex-1" : className
      )}
    >
      {children}
    </div>
  );
}

type TerminalBodyContentProps = {
  className?: string;
  prompt?: ReactNode;
};

export function TerminalBodyContent({
  className,
  prompt,
}: TerminalBodyContentProps) {
  const { terminalHistory } = useContext(TerminalContext);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalHistory]);

  return (
    <div className={cn("space-y-3", className)}>
      {terminalHistory.map((entry, index) => (
        <div key={index}>
          <div className="flex gap-2">
            {prompt}
            <span>{entry.command}</span>
          </div>
          {entry.output && entry.output !== "CLEAR" && (
            <div className="text-md">{entry.output}</div>
          )}
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
