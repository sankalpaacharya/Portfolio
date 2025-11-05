"use client";
import React from "react";
import {
  Terminal,
  TerminalBody,
  TerminalInput,
  TerminalPrompt,
  TerminalBodyContent,
  TerminalProvider,
  // useTerminal,
} from "@/components/chatcn/system/terminal";

function TerminalContent() {
  // const { setTerminalState } = useTerminal();

  return (
    <Terminal className="w-full h-full font-mono text-md shadow-xl flex flex-col">
      <TerminalBody className="bg-card/95 flex-1 flex flex-col">
        <TerminalBodyContent
          prompt={
            <TerminalPrompt className="font-mono flex items-center">
              <span className="text-secondary">sanku</span>
              <span className="text-muted-foreground">@</span>
              <span className="text-primary">ubuntu</span>
              <span className="text-muted-foreground">$</span>
            </TerminalPrompt>
          }
        />

        <div className="flex gap-2">
          <TerminalPrompt className="font-mono flex items-center">
            <span className="text-secondary">sanku</span>
            <span className="text-muted-foreground">@</span>
            <span className="text-primary">ubuntu</span>
            <span className="text-muted-foreground">$</span>
          </TerminalPrompt>

          <TerminalInput />
        </div>
      </TerminalBody>
    </Terminal>
  );
}

export const TerminalUI = () => {
  return (
    <div className="h-full w-full flex items-stretch">
      <TerminalProvider initialState="normal">
        <TerminalContent />
      </TerminalProvider>
    </div>
  );
};
