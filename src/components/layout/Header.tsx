import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BannerCard, NavLink } from "@/data/siteData";
import { GlobalNav } from "./GlobalNav";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";

type HeaderProps = {
  navLinks: NavLink[];
  secondaryLinks: NavLink[];
  legalLinks: NavLink[];
  promoBanners: BannerCard[];
};

export const Header = ({
  navLinks,
  secondaryLinks,
  legalLinks,
  promoBanners,
}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useLockBodyScroll(isOpen);

  const toggleNav = () => setIsOpen((prev) => !prev);
  const closeNav = () => setIsOpen(false);

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
            onClick={toggleNav}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                toggleNav();
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <div className="nav_trigger" />
          </div>
        </nav>
      </div>
      <GlobalNav
        navLinks={navLinks}
        secondaryLinks={secondaryLinks}
        legalLinks={legalLinks}
        promoBanners={promoBanners}
        isOpen={isOpen}
        onNavigate={closeNav}
      />
    </header>
  );
};
