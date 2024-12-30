import logo from "../assets/D-2.png";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-10 flex flex-wrap items-center justify-between py-6 px-6 sm:px-10">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={logo} alt="logo" className="h-16 w-16 sm:h-20 sm:w-20" /> {/* Adjusted logo size */}
      </div>

      {/* Social Media Section */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-6">
        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=dishan-madhuranga-061537191"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:block bg-blue-600 text-white py-2 px-4 rounded-full text-sm hover:bg-blue-700 transition"
        >
          Follow on LinkedIn
        </a>

        {/* Social Media Icons */}
        <a
          href="https://www.linkedin.com/in/dishan-madhuranga-061537191"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="h-8 w-8 text-white hover:text-blue-500 transition sm:h-10 sm:w-10" />
        </a>
        <a
          href="https://github.com/dishan225"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="h-8 w-8 text-white hover:text-gray-500 transition sm:h-10 sm:w-10" />
        </a>
        <a
          href="https://www.instagram.com/dishan.madhuranga/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className="h-8 w-8 text-white hover:text-pink-500 transition sm:h-10 sm:w-10" />
        </a>
        <a
          href="https://twitter.com/@Dishanmadurang2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
        >
          <FaXTwitter className="h-8 w-8 text-white hover:text-gray-500 transition sm:h-10 sm:w-10" />
        </a>
        <a
          href="https://www.facebook.com/dishan.maduranga.79"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook className="h-8 w-8 text-white hover:text-blue-600 transition sm:h-10 sm:w-10" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
