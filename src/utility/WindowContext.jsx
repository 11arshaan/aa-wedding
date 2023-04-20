import { createContext, useState } from "react";



export const WindowContext = createContext({
  data: null,
  setData: () => null
});


export function WindowProvider({ children }) {
  const [resize, setResize] = useState(null);

  return (
    <WindowContext.Provider value={{ resize, setResize }}>
      {children}
    </WindowContext.Provider>
  );
}