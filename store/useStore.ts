import { create } from 'zustand';

export type AppType = 'terminal' | 'browser' | 'file-manager' | 'login-manager';

interface AppState {
  [key: string]: boolean;
}

interface StoreState {
  apps: AppState;
  openApp: (app: AppType) => void;
  closeApp: (app: AppType) => void;
  toggleApp: (app: AppType) => void;
  isAppOpen: (app: AppType) => boolean;
}

export const useStore = create<StoreState>((set, get) => ({
  apps: {
    terminal: true,
    browser: false,
    'file-manager': true,
    'login-manager': true,
  },
  
  openApp: (app) =>
    set((state) => ({
      apps: { ...state.apps, [app]: true },
    })),
  
  closeApp: (app) =>
    set((state) => ({
      apps: { ...state.apps, [app]: false },
    })),
  
  toggleApp: (app) =>
    set((state) => ({
      apps: { ...state.apps, [app]: !state.apps[app] },
    })),
  
  isAppOpen: (app) => get().apps[app] || false,
}));
