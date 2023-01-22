import React from "react";

export const canUseDOM = () =>
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement;

export const useSafeLayoutEffect = canUseDOM()
  ? React.useLayoutEffect
  : React.useEffect;

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = React.useState(false);
  const mql = window.matchMedia(query);

   const handler = (evt: MediaQueryListEvent) => {
    console.log("media", evt.media, query);
    // Sin el espacio entre los dos puntos y los pixeles este if no funcionaría
    if (evt.media === query) {
      setMatches(mql.matches);
      return true
    }else if(evt.media > query){
      setMatches(mql.matches);
      return true
    }
  };

  useSafeLayoutEffect(() => {
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return matches;
};

