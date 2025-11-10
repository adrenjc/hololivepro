import Image from "next/image";

import { BannerCard, NavLink } from "@/data/siteData";

type GlobalNavProps = {
  navLinks: NavLink[];
  secondaryLinks: NavLink[];
  legalLinks: NavLink[];
  promoBanners: BannerCard[];
  isOpen: boolean;
  onNavigate: () => void;
};

const renderLink = (link: NavLink, onNavigate: () => void) => {
  const linkContent = (
    <>
      {link.label}
      {link.external && <span className="ex_icon icon_black" />}
    </>
  );

  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
      >
        {linkContent}
      </a>
    );
  }

  return (
    <a href={link.href} onClick={onNavigate}>
      {linkContent}
    </a>
  );
};

export const GlobalNav = ({
  navLinks,
  secondaryLinks,
  legalLinks,
  promoBanners,
  isOpen,
  onNavigate,
}: GlobalNavProps) => (
  <div
    id="global_nav"
    className={isOpen ? "active" : ""}
    aria-hidden={!isOpen}
  >
    <div className="nav_bg" role="presentation" onClick={onNavigate} />
    <div className="menu_box">
      <nav className="left">
        <ul className="txt_nav nav_01">
          {navLinks.map((link) => (
            <li key={`drawer-${link.label}`}>
              {renderLink(link, onNavigate)}
            </li>
          ))}
        </ul>
        <ul className="txt_nav nav_02">
          {secondaryLinks.map((link) => (
            <li key={`drawer-secondary-${link.label}`}>
              {renderLink(link, onNavigate)}
            </li>
          ))}
        </ul>
        <ul className="txt_nav nav_03">
          {legalLinks.map((link) => (
            <li key={`drawer-legal-${link.label}`}>
              {renderLink(link, onNavigate)}
            </li>
          ))}
        </ul>
      </nav>
      <div className="right">
        <ul>
          {promoBanners.map((banner) => (
            <li key={`drawer-banner-${banner.id}`}>
              <a
                href={banner.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onNavigate}
              >
                <Image
                  src={banner.image}
                  alt={banner.label}
                  width={banner.width}
                  height={banner.height}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
