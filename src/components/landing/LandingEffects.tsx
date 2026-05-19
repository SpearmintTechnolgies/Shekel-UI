"use client";

import { useEffect } from "react";
import { initLandingEffects } from "@/lib/landing-effects";

export function LandingEffects() {
  useEffect(() => {
    const cleanup = initLandingEffects();
    return cleanup;
  }, []);

  return null;
}
