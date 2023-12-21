import "../assets/css/body.css";

function Body({ children, className }) {
  return <body className={className}>{children}</body>;
}
export default Body;
