import { createContext, useState } from "react";



export const WindowContext = createContext({
  data: null,
  setData: () => null
});


export function WindowProvider({ children }) {
  const [resize, setResize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    loaded: false
  });

  return (
    <WindowContext.Provider value={{ resize, setResize }}>
      {children}
    </WindowContext.Provider>
  );
}