import Link from "next/link";

export default function Blogs() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Link
          href="https://blog.sankalpa.info.np/posts/composition-is-the-best-way-to-write-react-components"
          target="_blank"
          className="block hover:underline text-primary"
        >
          <div className="space-y-1">
            <h3 className="font-medium">
              Compound is the Best Way to Write React Components
            </h3>
            <p className="text-xs text-muted-foreground">Sep 20 2025</p>
          </div>
        </Link>

        <Link
          href="https://blog.sankalpa.info.np/posts/my-developer-workflow"
          target="_blank"
          className="block hover:underline text-primary"
        >
          <div className="space-y-1">
            <h3 className="font-medium">My Developer Workflow ⚙️</h3>
            <p className="text-xs text-muted-foreground">Feb 5 2025</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
