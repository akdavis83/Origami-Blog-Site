import blueOrigami from "../assets/blue-origami-bird-flipped.png";
import Links from "./Links";

const Footer = () => {
  return (
    <footer className="Footer">
      <ul>
        <Links />
        <img src={blueOrigami} alt="white orgami" />
      </ul>
      <p>Software University &copy; 2023</p>
    </footer>
  );
};

export default Footer;
