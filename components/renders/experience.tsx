import Image from "next/image";

export function Experience() {
  return (
    <div className="space-y-6">
      <p className="text-lg font-medium">Work Experience</p>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <Image
            src="/images/nox.png"
            alt="Nox"
            width={48}
            height={48}
            className="rounded-lg"
          />
          <div className="flex-1 space-y-1">
            <h3 className="font-medium">Full Stack Engineer</h3>
            <p className="text-sm text-muted-foreground">Nox (OpenAI-backed)</p>
            <p className="text-xs text-muted-foreground">
              Mar. 2024 - Aug. 2024
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Image
            src="/images/unstuck.png"
            alt="Unstuck"
            width={48}
            height={48}
            className="rounded-lg"
          />
          <div className="flex-1 space-y-1">
            <h3 className="font-medium">Full Stack AI Developer</h3>
            <p className="text-sm text-muted-foreground">Unstuck</p>
            <p className="text-xs text-muted-foreground">
              Feb. 2024 - Mar. 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
