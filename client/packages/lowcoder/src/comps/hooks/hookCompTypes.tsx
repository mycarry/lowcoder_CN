import { withExposingRaw } from "comps/generators/withExposing";

const AllHookComp = [
  "modal",
  "drawer",
  "title",
  "windowSize",
  "currentTime",
  "lodashJsLib",
  "pinyinLib",
  "chcharLib",
  "dayJsLib",
  "momentJsLib",
  "utils",
  "message",
  "toast",
  "localStorage",
  "currentUser",
  "urlParams",
  "theme",
  "confetti",
] as const;

export type HookCompType = (typeof AllHookComp)[number];

const AllHookCompSet = new Set(AllHookComp);
export const isHookComp = (compType: string) => {
  return AllHookCompSet.has(compType as HookCompType);
};

const HookCompConfig: Record<
  string,
  {
    // An application only needs one, default true
    singleton?: boolean;
    // Display category, default is hook component
    category?: "hide" | "ui" | "hook";
  }
> = {
  modal: {
    category: "ui",
    singleton: false,
  },
  drawer: {
    category: "ui",
    singleton: false,
  },
  meeting: {
    category: "ui",
    singleton: false,
  },
  confetti: {
    category: "ui",
    singleton: false,
  },
  lodashJsLib: {
    category: "hide",
  },
  pinyinLib: {
    category: "hide",
  },
  dayJsLib: {
    category: "hide",
  },
  momentJsLib: {
    category: "hide",
  },
  utils: { category: "hide" },
  message: { category: "hide" },
  toast: { category: "hide" },
};

// Get hook component category
export const hookCompCategory = (compType: string | HookCompType) => {
  if (!isHookComp(compType)) {
    return "";
  }
  return HookCompConfig[compType as HookCompType]?.category || "hook";
};

// Whether the hook component is a singleton
export const singletonHookComp = (compType: string | HookCompType) => {
  if (!isHookComp(compType)) {
    return false;
  }
  return HookCompConfig[compType as HookCompType]?.singleton ?? true;
};

export type HookCompConstructor = ReturnType<typeof withExposingRaw>;
export type HookCompMapRawType = Record<HookCompType, HookCompConstructor>;
