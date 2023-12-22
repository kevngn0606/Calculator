import { useContext } from "react";
import "../assets/css/button.css";
import { CalContext } from "../context/CalContext";

function getSubClassName(btn) {
  /** Style unique buttons */
  const className = {
    "=": "equals",
    "*": "opt",
    "+": "opt",
    "-": "opt",
    "/": "opt",
  };
  return className[btn];
}

function Button({ value, className }) {
  const { cal, setCal } = useContext(CalContext);

  const handleBtnClick = () => {
    const result = {
      ".": commaClick, // Handle
      C: resetClick,
      "+": signClick,
      "-": signClick,
      "*": signClick,
      "/": signClick,
      "=": equalsClick,
      "%": percentClick,
      "+-": inverseClick,
    };

    /** Handle Click on number buttons */
    if (result[value]) {
      return result[value]();
    } else {
      return handleNumBtnClick(value);
    }
  };

  const commaClick = () => {
    setCal({
      ...cal,
      num: !cal.num.toString().includes(".") ? cal.num + value : cal.num,
    });
  };

  const resetClick = () => {
    setCal({
      ...cal,
      sign: "",
      num: 0,
      res: 0,
    });
  };

  const handleNumBtnClick = (value) => {
    const numberString = value.toString();
    let numberValue;

    if (numberString === "0" && cal.num === 0) {
      numberValue = "0";
    } else {
      numberValue = Number(cal.num + numberString);
    }

    setCal({
      ...cal,
      num: numberValue,
    });
  };

  const signClick = () => {
    setCal({
      sign: value,
      num: 0,
      res: !cal.res && cal.num ? cal.num : cal.res,
    });
  };

  const equalsClick = () => {
    if (cal.res && cal.num) {
      const math = (a, b, sign) => {
        const result = {
          "+": (a, b) => a + b,
          "-": (a, b) => a - b,
          "*": (a, b) => a * b,
          "/": (a, b) => a / b,
        };
        return result[sign](a, b);
      };
      setCal({
        sign: value,
        res: math(cal.res, cal.num, cal.sign),
        num: 0,
      });
    }
  };

  const percentClick = () => {
    setCal({
      ...cal,
      num: cal.num / 100,
      res: cal.res / 100,
    });
  };

  const inverseClick = () => {
    setCal({
      ...cal,
      num: cal.num ? cal.num * -1 : cal.num,
      res: cal.res ? cal.res * -1 : cal.num,
    });
  };

  return (
    <button
      className={`${className} ${getSubClassName(value)}`}
      onClick={handleBtnClick}
    >
      {value}
    </button>
  );
}
export default Button;
