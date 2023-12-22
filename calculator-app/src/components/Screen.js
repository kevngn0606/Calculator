import "../assets/css/screen.css";

import { useContext } from "react";
import { CalContext } from "../context/CalContext";

function Screen({ className }) {
  const { cal } = useContext(CalContext);

  return (
    <input
      className={className}
      name="number"
      type="number"
      value={cal.num ? cal.num : cal.res}
    />
  );
}

export default Screen;
