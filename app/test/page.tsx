import React from "react";
import SnakeGame from "@/components/snake-game";
import { DiamondGame } from "@/components/games/diamond";

export default function page() {
  return (
    <div>
      <DiamondGame />
    </div>
  );
}
