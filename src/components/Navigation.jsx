import whiteOrgami from "../assets/white-origami-bird.png";

import Links from "./Links";

const Navigation = () => {
  return (
    <nav className="Navigation">
      <ul>
        <li className="listItem">
          <img src={whiteOrgami} alt="white orgami" />
        </li>
        <Links/>
      </ul>
    </nav>
  );
};

export default Navigation;
