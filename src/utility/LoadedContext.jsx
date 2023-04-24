import { createContext, useState } from "react";



export const LoadedContext = createContext({
  data: null,
  setData: () => null
});


export function LoadedProvider({ children }) {
  const [loaded, setLoaded] = useState({
    loaded: false
  });

  return (
    <LoadedContext.Provider value={{ loaded, setLoaded }}>
      {children}
    </LoadedContext.Provider>
  );
}