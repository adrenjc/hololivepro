import { LanguageOption, NavLink } from "@/data/siteData";

type GlobalNavProps = {
  navLinks: NavLink[];
  languages: LanguageOption[];
  isOpen: boolean;
  onNavigate: () => void;
};

export const GlobalNav = ({
  navLinks,
  languages,
  isOpen,
  onNavigate,
}: GlobalNavProps) => (
  <div id="global_nav" className={isOpen ? "active" : ""}>
    <div className="menu_box">
      <div className="lang_btn">
        <ul>
          {languages.map((lang) => (
            <li key={lang.code}>
              <a
                href={lang.href}
                className={lang.active ? "current" : undefined}
                onClick={onNavigate}
              >
                {lang.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <ul className="txt_nav nav_01">
        {navLinks.map((link) => (
          <li key={`drawer-${link.label}`}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onNavigate}
              >
                {link.label}
                <span className="ex_icon icon_black" />
              </a>
            ) : (
              <a href={link.href} onClick={onNavigate}>
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>
      <ul className="txt_nav nav_02">
        <li>
          <a
            href="https://hololivepro.com/collaboration"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onNavigate}
          >
            合作洽谈
            <span className="ex_icon icon_black" />
          </a>
        </li>
        <li>
          <a
            href="https://hololivepro.com/support_advertising"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onNavigate}
          >
            广告支持
            <span className="ex_icon icon_black" />
          </a>
        </li>
        <li>
          <a
            href="https://schedule.hololive.tv/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onNavigate}
          >
            HOLODULE
            <span className="ex_icon icon_black" />
          </a>
        </li>
      </ul>
    </div>
  </div>
);
