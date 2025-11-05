import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type AppType = 'terminal' | 'browser' | 'file-manager' | 'login-manager';

interface AppState {
  [key: string]: boolean;
}

interface StoreState {
  apps: AppState;
  wallpaper: string;
  openApp: (app: AppType) => void;
  closeApp: (app: AppType) => void;
  toggleApp: (app: AppType) => void;
  isAppOpen: (app: AppType) => boolean;
  setWallpaper: (wallpaper: string) => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      apps: {
        terminal: true,
        browser: false,
        'file-manager': true,
        'login-manager': true,
      },
      wallpaper: '/wallpapers/gamer.png',
      
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
    }),
    {
      name: 'portfolio-storage',
    }
  )
);
