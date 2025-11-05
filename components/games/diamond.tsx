"use client";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Gem, Bomb, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type CellType = "diamond" | "bomb";

interface Cell {
  type: CellType;
  revealed: boolean;
}

const createGrid = (): Cell[][] => {
  const bombPositions = new Set<number>();
  while (bombPositions.size < 3) {
    bombPositions.add(Math.floor(Math.random() * 9));
  }

  const grid: Cell[][] = [];
  for (let i = 0; i < 3; i++) {
    const row: Cell[] = [];
    for (let j = 0; j < 3; j++) {
      const position = i * 3 + j;
      row.push({
        type: bombPositions.has(position) ? "bomb" : "diamond",
        revealed: false,
      });
    }
    grid.push(row);
  }
  return grid;
};

interface GameCellProps {
  cell: Cell;
  onClick: () => void;
  disabled: boolean;
}

function GameCell({ cell, onClick, disabled }: GameCellProps) {
  return (
    <ReactCardFlip flipDirection="horizontal" isFlipped={cell.revealed}>
      <Card
        onClick={disabled ? undefined : onClick}
        className={`w-24 h-24 flex items-center justify-center p-0 ${
          disabled ? "cursor-not-allowed" : "cursor-pointer hover:bg-accent"
        }`}
      >
        <span className="text-3xl text-muted-foreground/30">?</span>
      </Card>

      <Card
        className={`w-24 h-24 flex items-center justify-center p-0 ${
          cell.type === "bomb"
            ? "bg-destructive/10 border-destructive"
            : "bg-primary/10 border-primary"
        }`}
      >
        {cell.type === "bomb" ? (
          <Bomb className="w-10 h-10 text-destructive" />
        ) : (
          <Gem className="w-10 h-10 text-primary" />
        )}
      </Card>
    </ReactCardFlip>
  );
}

export function DiamondGame() {
  const [grid, setGrid] = useState<Cell[][]>(createGrid);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const handleCellClick = (rowIndex: number, colIndex: number) => {
    if (gameOver || grid[rowIndex][colIndex].revealed) return;

    const newGrid = grid.map((row) => row.map((cell) => ({ ...cell })));
    newGrid[rowIndex][colIndex].revealed = true;

    if (newGrid[rowIndex][colIndex].type === "bomb") {
      newGrid.forEach((row) => row.forEach((cell) => (cell.revealed = true)));
      setGameOver(true);
    } else {
      setScore(score + 1);
    }

    setGrid(newGrid);
  };

  const resetGame = () => {
    setGrid(createGrid());
    setGameOver(false);
    setScore(0);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Diamond Hunt</h1>
        <p className="text-muted-foreground text-sm">
          Find diamonds, avoid bombs!
        </p>
      </div>

      <div className="text-xl font-semibold">
        Score: <span className="text-primary">{score}</span>
      </div>

      {gameOver && (
        <div className="text-lg font-bold text-destructive">Game Over!</div>
      )}

      <div className="grid grid-cols-3 gap-3">
        {grid.map((row, i) =>
          row.map((cell, j) => (
            <GameCell
              key={`${i}-${j}`}
              cell={cell}
              onClick={() => handleCellClick(i, j)}
              disabled={gameOver}
            />
          ))
        )}
      </div>

      <Button onClick={resetGame} size="lg" className="gap-2">
        <RotateCcw className="w-4 h-4" />
        New Game
      </Button>
    </div>
  );
}
