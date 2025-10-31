"use client";
import React from "react";
import {
  Terminal,
  TerminalBody,
  TerminalHeader,
  TerminalInput,
  TerminalPrompt,
  TerminalBodyContent,
  TerminalProvider,
  useTerminal,
} from "@/components/chatcn/system/terminal";

function TerminalContent() {
  const { setTerminalState } = useTerminal();

  return (
    <Terminal className="w-full max-w-2xl font-mono text-sm shadow-xl">
      <TerminalBody className="bg-card h-[300px]">
        <TerminalBodyContent
          prompt={
            <TerminalPrompt>
              <span className="text-secondary">sanku</span>
              <span>@</span>
              <span>archlinux</span>
              <span></span>
            </TerminalPrompt>
          }
        />
        <div className="flex gap-2">
          <TerminalPrompt>
            <span className="text-secondary">sanku</span>
            <span>@</span>
            <span>archlinux</span>
          </TerminalPrompt>
          <TerminalInput />
        </div>
      </TerminalBody>
    </Terminal>
  );
}

export const TerminalUI = () => {
  return (
    <div className="flex justify-center">
      <TerminalProvider initialState="normal">
        <TerminalContent />
      </TerminalProvider>
    </div>
  );
};
