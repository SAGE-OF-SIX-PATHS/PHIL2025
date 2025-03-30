// Footer.js
import React from "react";
import { mdiFacebook, mdiTwitter, mdiInstagram, mdiLinkedin } from "@mdi/js";
import Icon from "@mdi/react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 border-b-[5px] border-text-orange">
      <div className="container mx-auto flex justify-center space-x-6">
        <a
          href="https://facebook.com"
          aria-label="Facebook"
          className="text-white hover:text-gray-400"
          title="Facebook"
        >
          <Icon path={mdiFacebook} size="36px" />
        </a>
        <a
          href="https://x.com/PhilipAkpamgbo"
          aria-label="Twitter"
          className="text-white hover:text-gray-400"
          title="Twitter"
        >
          <Icon path={mdiTwitter} size="36px" />
        </a>
        <a
          href="https://instagram.com"
          aria-label="Instagram"
          className="text-white hover:text-gray-400"
          title="Instagram"
        >
          <Icon path={mdiInstagram} size="36px" />
        </a>
        <a
          href="https://linkedin.com"
          aria-label="LinkedIn"
          className="text-white hover:text-gray-400"
          title="LinkedIn"
        >
          <Icon path={mdiLinkedin} size="36px" />
        </a>
      </div>
      <p className="text-center text-primary mt-6 font-semibold lg:text-[20px]">
        © D_ProficientPhilip 2025
      </p>
    </footer>
  );
};

export default Footer;
