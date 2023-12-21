import "../assets/css/footer.css";

function Footer({ className }) {
  var date = new Date();
  var currentYear = date.getFullYear();

  return (
    <footer className={className}>
      <p className={`${className}-text`}>
        Copyright &copy; 2020-{currentYear}. All Rights Reserved.
      </p>
    </footer>
  );
}
export default Footer;
