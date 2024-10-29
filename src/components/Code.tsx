import { useState } from "react";

const CodeBlock = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative group">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <pre
        className={`language-${language} bg-gray-900 p-4 rounded-md overflow-auto`}
      >
        <code dangerouslySetInnerHTML={{ __html: code }}></code>
      </pre>
    </div>
  );
};
export default CodeBlock;
