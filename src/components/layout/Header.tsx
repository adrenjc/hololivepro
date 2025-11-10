import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LanguageOption, NavLink } from "@/data/siteData";
import { GlobalNav } from "./GlobalNav";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";

type HeaderProps = {
  navLinks: NavLink[];
  languages: LanguageOption[];
};

export const Header = ({ navLinks, languages }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useLockBodyScroll(isOpen);

  return (
    <header className="app-header">
      <div className="inner">
        <Link href="/" className="head_tit" aria-label="hololive production">
          <Image
            src="https://hololivepro.com/wp-content/themes/hololive_production/images/common_logo_holopro.svg"
            alt="hololive production"
            width={180}
            height={40}
            priority
          />
        </Link>
        <nav className="nav_box">
          <ul className="nav_list n_01">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                    <span className="ex_icon icon_black" />
                  </a>
                ) : (
                  <a href={link.href}>{link.label}</a>
                )}
              </li>
            ))}
          </ul>
          <div
            className={`nav_trigger_outer ${isOpen ? "active" : ""}`}
            onClick={() => setIsOpen((prev) => !prev)}
            role="button"
            aria-label="Toggle navigation"
          >
            <div className="nav_trigger" />
          </div>
        </nav>
      </div>
      <GlobalNav
        navLinks={navLinks}
        languages={languages}
        isOpen={isOpen}
        onNavigate={() => setIsOpen(false)}
      />
    </header>
  );
};
