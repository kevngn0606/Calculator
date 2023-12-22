import { createContext, useState } from "react";

export const CalContext = createContext();

export default function CalContextProvider({ children }) {
  const [cal, setCal] = useState({
    /** Initial Value */
    sign: "",
    num: 0,
    res: 0,
  });

  const calVal = {
    cal, // Updated
    setCal, // Will be updated
  };
  return <CalContext.Provider value={calVal}>{children}</CalContext.Provider>;
}
