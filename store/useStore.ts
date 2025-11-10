import { create } from 'zustand';

export type AppType = 'terminal' | 'browser' | 'file-manager' | 'login-manager' | 'settings';

interface AppState {
  [key: string]: boolean;
}

interface StoreState {
  apps: AppState;
  wallpaper: string;
  brightness: number;
  openApp: (app: AppType) => void;
  closeApp: (app: AppType) => void;
  toggleApp: (app: AppType) => void;
  isAppOpen: (app: AppType) => boolean;
  setWallpaper: (wallpaper: string) => void;
  setBrightness: (brightness: number) => void;
}

export const useStore = create<StoreState>()((set, get) => ({
  apps: {
    terminal: false,
    browser: false,
    'file-manager': false,
    'login-manager': true,
  },
  wallpaper: '/wallpapers/gamer.png',
  brightness: typeof window !== 'undefined' 
    ? parseInt(localStorage.getItem('brightness') || '100', 10)
    : 100,
  
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
  
  setWallpaper: (wallpaper) => set({ wallpaper }),
  
  setBrightness: (brightness) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('brightness', brightness.toString());
    }
    set({ brightness });
  },
}));
