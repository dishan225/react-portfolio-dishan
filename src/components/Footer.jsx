import React from "react";
import { CONTACT } from "../constants";

const Footer = () => {
    return (
      <footer className="text-center py-4 bg-neutral-900 text-neutral-400 text-sm">
        <p>© {new Date().getFullYear()} Dishan Madhuranga. All rights reserved.</p>
        <p>
  Designed and developed with precision by <a href="/" className="hover:text-purple-400">Dishan Maduranga</a>
</p>

      </footer>
    );
};
  
export default Footer;

