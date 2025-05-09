import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 py-6 flex items-center justify-between">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="flex m-8 items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/zohaib-ahmed-khan-220940289/">
          <FaLinkedin />
        </a>

        <a href="https://github.com/Zohaib4136/">
          <FaGithub />
        </a>

        <a href="https://x.com/Zohaibkhan4136">
          <FaSquareXTwitter />
        </a>

        <a href="https://www.instagram.com/zohaibkhanniazi4136">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
