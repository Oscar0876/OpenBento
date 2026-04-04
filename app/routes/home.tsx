import * as React from "react";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Download, Copy, Check, Edit3 } from "lucide-react";
import { Button } from "../components/ui/button";
import { BentoGrid } from "../components/ui/bento-grid";
import { dashboardConfigs, type Widget } from "../data/dashboard-config";
import { cn } from "../utils";

const dashboardKeys = [
  "home",
  "saas", 
  "dev",
  "crypto",
  "personal",
  "social",
  "productivity"
] as const;

type DashboardKey = typeof dashboardKeys[number];

export default function Home() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [copied, setCopied] = React.useState(false);
  const [editMode, setEditMode] = React.useState(false);
  const [userCode, setUserCode] = React.useState("");
  const [isValid, setIsValid] = React.useState<boolean | null>(null);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [dynamicWidgets, setDynamicWidgets] = React.useState<Widget[]>([]);
  const currentKey: DashboardKey = dashboardKeys[currentIndex];
  const originalWidgets: Widget[] = dashboardConfigs[currentKey]();
  const widgets: Widget[] = editMode && isValid === true ? dynamicWidgets : originalWidgets;
  const currentName = `${currentKey.charAt(0).toUpperCase() + currentKey.slice(1)} Dashboard`;

  const goPrev = () => setCurrentIndex((prev) => (prev === 0 ? dashboardKeys.length - 1 : prev - 1));
  const goNext = () => setCurrentIndex((prev) => (prev === dashboardKeys.length - 1 ? 0 : prev + 1));

  const toggleEditMode = () => {
    if (editMode) {
      // Exit
      setEditMode(false);
      setUserCode("");
      setIsValid(null);
      setErrorMsg("");
      setDynamicWidgets([]);
    } else {
      // Enter
      setEditMode(true);
      setUserCode(generateCode(currentKey));
      setIsValid(null);
    }
  };

  React.useEffect(() => {
    if (!editMode || !userCode) return;

    const timeoutId = setTimeout(() => {
      try {
        // Create function from userCode string: assumes code is full "export function ... { return [...] }"
        // Extract body or direct exec
        const funcStr = userCode.replace(/export function .*?\(\): Widget\[\]\s*{/, '').replace(/}$/, '').trim();
        const widgetFunc = new Function(`return (${funcStr})`);
        const newWidgets = widgetFunc() as Widget[];
        setDynamicWidgets(newWidgets);
        setIsValid(true);
        setErrorMsg("");
      } catch (err) {
        console.error('Validation error:', err);
        setIsValid(false);
        setErrorMsg(err instanceof Error ? err.message : 'Invalid code');
        setDynamicWidgets([]);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [userCode, editMode]);

  const generateCode = (key: DashboardKey) => {
    const dashName = key.charAt(0).toUpperCase() + key.slice(1);
    return `import { ${dashName}Dashboard } from "../components/widgets/${key}-dashboard.tsx";

export function ${dashName}DashboardWidgets(): Widget[] {
  return ${dashName}Dashboard();
}`;
  };

  const copyCode = async (codeToCopy: string) => {
    try {
      await navigator.clipboard.writeText(codeToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed', err);
    }
  };

  const copyOriginal = () => copyCode(generateCode(currentKey));

  const copyModified = () => {
    if (isValid === true && userCode) {
      copyCode(userCode);
    } else {
      copyOriginal();
    }
  };

  const downloadCode = () => {
    const dashName = currentKey.charAt(0).toUpperCase() + currentKey.slice(1);
    const code = `import { ${dashName}Dashboard } from "../components/widgets/${currentKey}-dashboard.tsx";

export function ${dashName}DashboardWidgets(): Widget[] {
  return ${dashName}Dashboard();
}
    `;
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentKey}-dashboard-widgets.tsx`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-900 via-black/20 to-zinc-900">
      <div className="container px-6 py-20 mx-auto">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-zinc-100 to-zinc-200/50 bg-clip-text text-transparent drop-shadow-2xl mb-6">
              Open<span className="text-transparent bg-gradient-to-r from-emerald-400 via-blue-400 to-indigo-400 bg-clip-text">Bento</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-8">
              Modern bento dashboard with 7 animated widgets
            </p>
            {/* Dashboard Name */}
            <div className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-800/50 border border-zinc-700 rounded-2xl backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-zinc-200">{currentName}</h2>
            </div>
          </div>

          {/* Arrow Navigation */}
          <div className="flex justify-between items-center mb-12">
            <button
              onClick={goPrev}
              className="p-4 rounded-3xl bg-zinc-800/50 hover:bg-zinc-700/50 border border-zinc-700 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              aria-label="Previous dashboard"
            >
              <ChevronLeft className="h-6 w-6 text-zinc-400" />
            </button>

            <div className="flex gap-3 text-sm text-zinc-500">
              {dashboardKeys.map((key, i) => (
                <button
                  key={key}
                  onClick={() => setCurrentIndex(i)}
                  className={cn(
                    "px-4 py-2 rounded-xl transition-all duration-300",
                    currentIndex === i 
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-medium" 
                      : "bg-zinc-800/30 hover:bg-zinc-700/30 text-zinc-400"
                  )}
                >
                  {key.slice(0,4)}
                </button>
              ))}
            </div>

            <button
              onClick={goNext}
              className="p-4 rounded-3xl bg-zinc-800/50 hover:bg-zinc-700/50 border border-zinc-700 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              aria-label="Next dashboard"
            >
              <ChevronRight className="h-6 w-6 text-zinc-400" />
            </button>
            
            <div className="flex gap-3">
              <Button 
                variant="green" 
                size="icon" 
                onClick={toggleEditMode}
                title={editMode ? "Exit Edit Mode" : "Modify Code"}
                aria-label={editMode ? "Exit edit mode" : "Modify dashboard code"}
              >
                <Edit3 className="h-5 w-5" />
              </Button>
              <Button 
                variant="green" 
                size="icon" 
                onClick={downloadCode}
                title={`Download ${currentKey} dashboard code`}
                aria-label="Download dashboard code"
              >
                <Download className="h-5 w-5" />
              </Button>
              <Button 
                onClick={copyModified}
                title={isValid === true ? "Copy modified code" : "Copy original code (modified invalid)"}
                aria-label="Copy dashboard code"
                className="gap-2"
                disabled={editMode && isValid === false && !userCode}
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                <span className="hidden sm:inline">
                  {editMode && isValid === true ? "Copy Modified" : "Copy" + (editMode && isValid === false ? " Original" : "")}
                </span>
              </Button>
            </div>
          </div>

          {/* Edit Mode UI */}
          {editMode && (
            <div className="mb-12 p-6 bg-zinc-900/50 border border-zinc-700 rounded-3xl backdrop-blur-sm animate-in slide-in-from-top-4 duration-500">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-zinc-300 mb-3">
                    Edit Dashboard Code (live preview below)
                  </label>
                  <textarea
                    value={userCode}
                    onChange={(e) => setUserCode(e.target.value)}
                    className={cn(
                      "w-full h-64 p-4 rounded-2xl bg-zinc-800/70 border-2 border-zinc-600 font-mono text-sm resize-vertical focus:border-emerald-400 focus:outline-none transition-all duration-300",
                      isValid === false && "border-yellow-500 bg-yellow-900/20 text-yellow-100"
                    )}
                    placeholder="Paste or edit your Widget[] code here..."
                  />
                  {isValid === false && (
                    <p className="mt-2 p-3 bg-yellow-900/50 border border-yellow-800 rounded-xl text-yellow-200 text-sm">
                      ⚠️ Invalid code: {errorMsg}. Showing original dashboard. Fix to enable copy modified.
                    </p>
                  )}
                  {isValid === true && (
                    <p className="mt-2 p-3 bg-emerald-900/50 border border-emerald-800 rounded-xl text-emerald-200 text-sm">
                      ✅ Valid! Live preview updated below. Copy your modified code.
                    </p>
                  )}
                </div>
                <div className="flex-1 min-h-[400px]">
                  <label className="block text-sm font-medium text-zinc-300 mb-3">
                    Live Preview
                  </label>
                  <div className="h-[500px] overflow-auto border border-zinc-700 rounded-2xl p-4 bg-zinc-950/50">
                    <BentoGrid widgets={widgets} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Widgets Grid */}
          {!editMode && (
            <BentoGrid widgets={widgets} />
          )}
        </div>
      </div>
    </main>
  );
}
