import React from "react";

const QUERY = "(prefers-reduced-motion: no-preference)";

export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    setPrefersReducedMotion(!window.matchMedia(QUERY).matches);

    const mediaQueryList = window.matchMedia(QUERY);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const listener = (event: any) => {
      setPrefersReducedMotion(!event.matches);
    };

    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener("change", listener);
    } else {
      mediaQueryList.addListener(listener);
    }

    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener("change", listener);
      } else {
        mediaQueryList.removeListener(listener);
      }
    };
  }, [setPrefersReducedMotion]);

  return prefersReducedMotion;
}
