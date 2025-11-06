import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Calendar } from "@/components/ui/calendar";

type CalendarProps = {
  children: React.ReactNode;
};

export default function CalendarCard({ children }: CalendarProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>{children}</div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-0 border-none">
        <Calendar mode="single" className="rounded-lg border" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
