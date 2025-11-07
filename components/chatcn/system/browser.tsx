"use client";

import React, { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, RotateCw, Home, Globe } from "lucide-react";

type Props = {
  defaultUrl?: string;
  className?: string;
};

export default function Browser({
  defaultUrl = "https://www.google.com/webhp?igu=1",
  className,
}: Props) {
  const [url, setUrl] = useState(defaultUrl);
  const [inputValue, setInputValue] = useState(defaultUrl);
  const [isLoading, setIsLoading] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const loadingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleNavigate = () => {
    let formattedUrl = inputValue.trim();

    if (
      !formattedUrl.startsWith("http://") &&
      !formattedUrl.startsWith("https://")
    ) {
      formattedUrl = "https://" + formattedUrl;
    }

    setUrl(formattedUrl);
    setIsLoading(true);

    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current);
    }
    loadingTimeoutRef.current = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleNavigate();
    }
  };

  const handleRefresh = () => {
    if (iframeRef.current) {
      setIsLoading(true);
      iframeRef.current.src = url;

      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
      loadingTimeoutRef.current = setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  };

  const handleHome = () => {
    setUrl(defaultUrl);
    setInputValue(defaultUrl);
    setIsLoading(true);

    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current);
    }
    loadingTimeoutRef.current = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  const handleIframeLoad = () => {
    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current);
    }
    setIsLoading(false);
  };

  React.useEffect(() => {
    return () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
    };
  }, []);

  return (
    <Card
      className={`flex flex-col h-full overflow-hidden ${className} bg-card/95`}
    >
      <div className="flex items-center gap-2 p-3 border-b">
        <div className="flex items-center gap-1">
          <button
            onClick={() => window.history.back()}
            className="p-2 rounded-md hover:bg-muted transition-colors disabled:opacity-50"
            aria-label="Go back"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => window.history.forward()}
            className="p-2 rounded-md hover:bg-muted transition-colors disabled:opacity-50"
            aria-label="Go forward"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={handleRefresh}
            className="p-2 rounded-md hover:bg-muted transition-colors"
            aria-label="Refresh"
          >
            <RotateCw
              className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`}
            />
          </button>
          <button
            onClick={handleHome}
            className="p-2 rounded-md hover:bg-muted transition-colors"
            aria-label="Home"
          >
            <Home className="w-4 h-4" />
          </button>
        </div>

        {/* Address Bar */}
        <div className="flex-1 flex items-center gap-2 px-3 py-1.5 rounded-md bg-background border">
          <Globe className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          <Input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter URL..."
            className="border-0 shadow-none focus-visible:ring-0 h-auto p-0 bg-transparent"
          />
          <button
            onClick={handleNavigate}
            className="text-xs font-medium text-primary hover:text-primary/80 transition-colors flex-shrink-0"
          >
            Go
          </button>
        </div>
      </div>

      {/* Browser Content */}
      <div className="flex-1 relative bg-background">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/50 z-10">
            <div className="flex flex-col items-center gap-2">
              <RotateCw className="w-8 h-8 animate-spin text-primary" />
              <p className="text-sm text-muted-foreground">Loading...</p>
            </div>
          </div>
        )}
        <iframe
          ref={iframeRef}
          src={url}
          className="w-full h-full border-0"
          title="Browser"
          onLoad={handleIframeLoad}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        />
      </div>
    </Card>
  );
}
