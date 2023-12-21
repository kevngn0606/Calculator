import "../assets/css/button.css";

function getSubClassName(btn) {
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
  return (
    <button className={`${className} ${getSubClassName(value)}`}>
      {value}
    </button>
  );
}
export default Button;
