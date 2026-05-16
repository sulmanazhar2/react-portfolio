import React from "react";
import "./style.css";
import { FaGithub, FaStackOverflow, FaLinkedin } from "react-icons/fa";
import { socialprofils } from "../../content_option";

const SocialLink = ({ href, label, children }) => (
  <li>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {children}
    </a>
  </li>
);

export const Socialicons = () => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.github && (
          <SocialLink href={socialprofils.github} label="GitHub">
            <FaGithub />
          </SocialLink>
        )}
        {socialprofils.linkedin && (
          <SocialLink href={socialprofils.linkedin} label="LinkedIn">
            <FaLinkedin />
          </SocialLink>
        )}
        {socialprofils.stackoverflow && (
          <SocialLink href={socialprofils.stackoverflow} label="Stack Overflow">
            <FaStackOverflow />
          </SocialLink>
        )}
      </ul>
      <p>Follow</p>
    </div>
  );
};
