"use client";
import React from "react";

type BrightnessScreenProps = {
  brightness: number;
};

export default function BrightnessScreen({
  brightness,
}: BrightnessScreenProps) {
  // Convert brightness (0-100) to opacity (1-0)
  // At 100% brightness, opacity should be 0 (no overlay)
  // At 0% brightness, opacity should be 1 (fully dark)
  const opacity = 1 - brightness / 100;

  return (
    <div
      className="h-screen w-screen fixed inset-0 bg-black pointer-events-none z-[9999] transition-opacity duration-200"
      style={{ opacity }}
    />
  );
}
