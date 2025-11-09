import type { DockviewApi } from "dockview";

export function openTerminal(api: DockviewApi) {
  const existingPanel = api.getPanel("terminal");
  if (existingPanel) {
    existingPanel.api.setActive();
    return;
  }

  api.addPanel({
    id: "terminal",
    component: "terminal",
    title: "Terminal",
  });
}

export function openBrowser(api: DockviewApi) {
  const existingPanel = api.getPanel("browser");
  if (existingPanel) {
    existingPanel.api.setActive();
    return;
  }

  const terminalPanel = api.getPanel("terminal");
  
  api.addPanel({
    id: "browser",
    component: "browser",
    title: "Browser",
    position: terminalPanel
      ? { direction: "below", referencePanel: "terminal" }
      : undefined,
  });
}

export function openFileManager(api: DockviewApi) {
  const existingPanel = api.getPanel("file-manager");
  if (existingPanel) {
    existingPanel.api.setActive();
    return;
  }

  api.addPanel({
    id: "file-manager",
    component: "file-manager",
    title: "File Manager",
    position: api.panels.length > 0 
      ? { direction: "right" } 
      : undefined,
  });
}

export function closeTerminal(api: DockviewApi) {
  const panel = api.getPanel("terminal");
  if (panel) {
    api.removePanel(panel);
  }
}

export function closeBrowser(api: DockviewApi) {
  const panel = api.getPanel("browser");
  if (panel) {
    api.removePanel(panel);
  }
}

export function closeFileManager(api: DockviewApi) {
  const panel = api.getPanel("file-manager");
  if (panel) {
    api.removePanel(panel);
  }
}

export type AppType = "terminal" | "browser" | "file-manager";

export function openApp(api: DockviewApi, appName: AppType) {
  switch (appName) {
    case "terminal":
      openTerminal(api);
      break;
    case "browser":
      openBrowser(api);
      break;
    case "file-manager":
      openFileManager(api);
      break;
  }
}

export function closeApp(api: DockviewApi, appName: AppType) {
  switch (appName) {
    case "terminal":
      closeTerminal(api);
      break;
    case "browser":
      closeBrowser(api);
      break;
    case "file-manager":
      closeFileManager(api);
      break;
  }
}
