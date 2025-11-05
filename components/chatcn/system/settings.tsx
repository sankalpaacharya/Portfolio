import { cn } from "@/lib/utils";
import { useStore } from "@/store/useStore";

export function SettingsContent() {
  const { wallpaper, setWallpaper } = useStore();
  const wallpapers: Record<string, string> = {
    voyager: "/wallpapers/voyager.jpg",
    gamer: "/wallpapers/gamer.png",
    battle: "/wallpapers/battle.png",
  };

  return (
    <div className="p-4">
      <div className="flex gap-4 flex-wrap">
        {Object.keys(wallpapers).map((item) => (
          <div
            key={item}
            className={`cursor-pointer transition-all`}
            onClick={() => setWallpaper(wallpapers[item])}
          >
            <img
              src={wallpapers[item]}
              alt={`${item} wallpaper`}
              className={cn(
                "w-48 h-32 object-cover border rounded-lg",

                wallpaper === wallpapers[item]
                  ? "ring-4 ring-blue-500 ring-offset-2 ring-offset-background"
                  : "hover:ring-2 hover:ring-gray-400"
              )}
            />
            <p className="text-center mt-2 text-sm capitalize">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
