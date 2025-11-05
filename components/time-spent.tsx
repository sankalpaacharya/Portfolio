"use client";

import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

export default function TimeSpent() {
  const [timeSpent, setTimeSpent] = useState(0);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    const interval = setInterval(() => {
      setTimeSpent((prev) => {
        const newTime = prev + 1;
        toast.info(
          `You've spent ${newTime} minute${newTime !== 1 ? "s" : ""} here 🕐`,
          {
            duration: 4000,
          }
        );
        return newTime;
      });
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return null;
}
