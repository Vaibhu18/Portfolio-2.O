// Site-wide design style ("default" | "glass" | "neu"), stored on <html data-style> and in localStorage.
// It sits alongside the light/dark theme from next-themes, so every style works in both modes.
// "default" is the absence of data-style; each other id has a matching block in globals.css.

export const DESIGN_STYLES = [
  { id: "default", label: "Default", description: "Clean, solid surfaces" },
  { id: "glass", label: "Glassmorphism", description: "Frosted glass over colour" },
  { id: "neu", label: "Neumorphism", description: "Soft, extruded surfaces" },
];

const STORAGE_KEY = "design-style";
const CHANGE_EVENT = "design-style-change";
const CUSTOM_STYLES = DESIGN_STYLES.map((s) => s.id).filter((id) => id !== "default");

function apply(style) {
  if (CUSTOM_STYLES.includes(style)) document.documentElement.dataset.style = style;
  else delete document.documentElement.dataset.style;
}

export function getDesignStyle() {
  const style = document.documentElement.dataset.style;
  return CUSTOM_STYLES.includes(style) ? style : "default";
}

export function setDesignStyle(style) {
  apply(style);
  try {
    localStorage.setItem(STORAGE_KEY, style);
  } catch {
    // storage blocked (private mode) — the choice still applies for this visit
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function subscribeDesignStyle(callback) {
  // Keep other open tabs in sync
  const onStorage = (e) => {
    if (e.key !== STORAGE_KEY) return;
    apply(e.newValue);
    callback();
  };
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", onStorage);
  };
}

// Runs in <head> before first paint so a saved style never flashes the default design.
export const DESIGN_STYLE_SCRIPT = `try{var s=localStorage.getItem("${STORAGE_KEY}");if(${JSON.stringify(CUSTOM_STYLES)}.indexOf(s)>-1)document.documentElement.dataset.style=s}catch(e){}`;
