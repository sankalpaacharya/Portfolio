"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Slider } from "@/components/ui/slider";
import { useState, useEffect } from "react";

type BrightnessSettingProps = {
  children: React.ReactNode;
  value: number;
  onValueChange: (value: number) => void;
};

export function BrightnessSetting({
  children,
  value,
  onValueChange,
}: BrightnessSettingProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>{children}</div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Adjust Brightness</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="p-4 flex flex-col gap-2"
          onSelect={(e) => e.preventDefault()}
        >
          <div className="flex items-center justify-between w-full">
            <span className="text-sm font-medium">Brightness</span>
            <span className="text-sm text-muted-foreground">{value}%</span>
          </div>
          <Slider
            value={[value]}
            max={100}
            min={10}
            step={5}
            onValueChange={(values) => onValueChange(values[0])}
            className="w-full"
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
