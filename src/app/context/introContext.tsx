// app/intro-context.tsx
"use client";

import { createContext, useContext, useState } from "react";

const IntroContext = createContext<{
  introFinished: boolean;
  setIntroFinished: (v: boolean) => void;
} | null>(null);

export function IntroProvider({ children }: { children: React.ReactNode }) {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <IntroContext.Provider value={{ introFinished, setIntroFinished }}>
      {children}
    </IntroContext.Provider>
  );
}

export function useIntro() {
  const ctx = useContext(IntroContext);
  if (!ctx) throw new Error("useIntro must be used inside IntroProvider");
  return ctx;
}
