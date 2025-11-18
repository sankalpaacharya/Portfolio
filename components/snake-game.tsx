"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 1, y: 0 };
const GAME_SPEED = 150;

type Position = {
  x: number;
  y: number;
};

type Direction = {
  x: number;
  y: number;
};

export default function SnakeGame() {
  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE);
  const [food, setFood] = useState<Position>({ x: 15, y: 15 });
  const [direction, setDirection] = useState<Direction>(INITIAL_DIRECTION);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const gameLoopRef = useRef<NodeJS.Timeout | null>(null);
  const directionRef = useRef(direction);

  // Update direction ref when direction changes
  useEffect(() => {
    directionRef.current = direction;
  }, [direction]);

  const generateFood = useCallback((): Position => {
    let newFood: Position;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
    } while (
      snake.some(
        (segment) => segment.x === newFood.x && segment.y === newFood.y
      )
    );
    return newFood;
  }, [snake]);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setFood({ x: 15, y: 15 });
    setDirection(INITIAL_DIRECTION);
    directionRef.current = INITIAL_DIRECTION;
    setGameOver(false);
    setScore(0);
    setIsPlaying(false);
    setIsPaused(false);
    if (gameLoopRef.current) {
      clearInterval(gameLoopRef.current);
    }
  };

  const startGame = () => {
    resetGame();
    setIsPlaying(true);
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  const moveSnake = useCallback(() => {
    if (gameOver || isPaused) return;

    setSnake((prevSnake) => {
      const head = prevSnake[0];
      const newHead = {
        x: head.x + directionRef.current.x,
        y: head.y + directionRef.current.y,
      };

      // Check wall collision
      if (
        newHead.x < 0 ||
        newHead.x >= GRID_SIZE ||
        newHead.y < 0 ||
        newHead.y >= GRID_SIZE
      ) {
        setGameOver(true);
        setIsPlaying(false);
        return prevSnake;
      }

      // Check self collision
      if (
        prevSnake.some(
          (segment) => segment.x === newHead.x && segment.y === newHead.y
        )
      ) {
        setGameOver(true);
        setIsPlaying(false);
        return prevSnake;
      }

      const newSnake = [newHead, ...prevSnake];

      // Check food collision
      if (newHead.x === food.x && newHead.y === food.y) {
        setScore((prev) => prev + 10);
        setFood(generateFood());
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [gameOver, isPaused, food, generateFood]);

  // Game loop
  useEffect(() => {
    if (isPlaying && !gameOver && !isPaused) {
      gameLoopRef.current = setInterval(moveSnake, GAME_SPEED);
    }

    return () => {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    };
  }, [isPlaying, gameOver, isPaused, moveSnake]);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isPlaying || gameOver) return;

      const key = e.key;
      const currentDir = directionRef.current;

      // Prevent reverse direction
      if (key === "ArrowUp" && currentDir.y === 0) {
        setDirection({ x: 0, y: -1 });
      } else if (key === "ArrowDown" && currentDir.y === 0) {
        setDirection({ x: 0, y: 1 });
      } else if (key === "ArrowLeft" && currentDir.x === 0) {
        setDirection({ x: -1, y: 0 });
      } else if (key === "ArrowRight" && currentDir.x === 0) {
        setDirection({ x: 1, y: 0 });
      } else if (key === " ") {
        e.preventDefault();
        togglePause();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isPlaying, gameOver]);

  const isCellSnake = (x: number, y: number) => {
    return snake.some((segment) => segment.x === x && segment.y === y);
  };

  const isCellFood = (x: number, y: number) => {
    return food.x === x && food.y === y;
  };

  const isCellHead = (x: number, y: number) => {
    return snake[0]?.x === x && snake[0]?.y === y;
  };

  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Snake Game</span>
          <span className="text-2xl font-bold">Score: {score}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        {/* Game Board */}
        <div
          className="border-2 border-primary rounded-lg overflow-hidden shadow-lg"
          style={{
            width: GRID_SIZE * CELL_SIZE,
            height: GRID_SIZE * CELL_SIZE,
          }}
        >
          <div
            className="grid bg-secondary/20"
            style={{
              gridTemplateColumns: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`,
              gridTemplateRows: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`,
            }}
          >
            {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
              const x = index % GRID_SIZE;
              const y = Math.floor(index / GRID_SIZE);
              const isSnake = isCellSnake(x, y);
              const isFood = isCellFood(x, y);
              const isHead = isCellHead(x, y);

              return (
                <div
                  key={index}
                  className={`border border-secondary/10 transition-colors ${
                    isHead
                      ? "bg-green-600"
                      : isSnake
                      ? "bg-green-500"
                      : isFood
                      ? "bg-red-500 rounded-full"
                      : ""
                  }`}
                  style={{
                    width: CELL_SIZE,
                    height: CELL_SIZE,
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Game Controls */}
        <div className="flex flex-col items-center gap-4 w-full">
          {!isPlaying && !gameOver && (
            <Button onClick={startGame} size="lg" className="w-full max-w-xs">
              Start Game
            </Button>
          )}

          {isPlaying && !gameOver && (
            <Button onClick={togglePause} size="lg" className="w-full max-w-xs">
              {isPaused ? "Resume" : "Pause"}
            </Button>
          )}

          {gameOver && (
            <div className="flex flex-col items-center gap-2">
              <p className="text-xl font-bold text-destructive">Game Over!</p>
              <p className="text-muted-foreground">Final Score: {score}</p>
              <Button onClick={startGame} size="lg" className="w-full max-w-xs">
                Play Again
              </Button>
            </div>
          )}

          {/* Instructions */}
          <div className="text-sm text-muted-foreground text-center space-y-1">
            <p>Use arrow keys to control the snake</p>
            <p>Press Space to pause/resume</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
