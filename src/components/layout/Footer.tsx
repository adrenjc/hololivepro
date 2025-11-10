import Image from "next/image";
import Link from "next/link";

import {
  NavLink,
  SocialGroup,
  navLegalLinks,
  navSecondaryLinks,
} from "@/data/siteData";

type FooterProps = {
  navLinks: NavLink[];
  socialGroups: SocialGroup[];
};

const renderNavLink = (link: NavLink) =>
  link.external ? (
    <a href={link.href} target="_blank" rel="noopener noreferrer">
      {link.label}
      <span className="ex_icon" />
    </a>
  ) : (
    <a href={link.href}>{link.label}</a>
  );

export const Footer = ({ navLinks, socialGroups }: FooterProps) => (
  <footer>
    <div className="container">
      <div className="foot_box">
        <div className="left">
          <Link href="/" className="foot_logo" aria-label="hololive production">
            <Image
              src="https://hololivepro.com/wp-content/themes/hololive_production/images/common_logo_holopro_wt.svg"
              alt="hololive production"
              width={200}
              height={60}
            />
          </Link>
          <nav className="foot_nav">
            <ul className="nav_01">
              {navLinks.slice(0, 4).map((item) => (
                <li key={`foot-${item.label}`}>{renderNavLink(item)}</li>
              ))}
            </ul>
            <ul className="nav_02">
              {navSecondaryLinks.map((item) => (
                <li key={`foot-secondary-${item.label}`}>
                  {renderNavLink(item)}
                </li>
              ))}
            </ul>
            <ul className="nav_03">
              {navLegalLinks.map((item) => (
                <li key={`foot-legal-${item.label}`}>
                  {renderNavLink(item)}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="right">
          {socialGroups.map((group) => (
            <div className="content" key={group.title}>
              <p className="stit">{group.title}</p>
              <ul>
                {group.links.map((link) => (
                  <li key={`${group.title}-${link.label}`}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                      <span className="ex_icon" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="foot_copy">
        <small>© COVER</small>
      </div>
    </div>
  </footer>
);
