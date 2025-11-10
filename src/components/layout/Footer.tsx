import Image from "next/image";
import Link from "next/link";
import {
  NavLink,
  SocialGroup,
} from "@/data/siteData";

type FooterProps = {
  navLinks: NavLink[];
  socialGroups: SocialGroup[];
};

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
                <li key={`foot-${item.label}`}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label}
                      <span className="ex_icon" />
                    </a>
                  ) : (
                    <a href={item.href}>{item.label}</a>
                  )}
                </li>
              ))}
            </ul>
            <ul className="nav_02">
              <li>
                <a
                  href="https://hololivepro.com/collaboration"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  合作洽谈 <span className="ex_icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://hololivepro.com/support_advertising"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  广告支持 <span className="ex_icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://schedule.hololive.tv/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HOLODULE <span className="ex_icon" />
                </a>
              </li>
            </ul>
            <ul className="nav_03">
              <li>
                <a
                  href="https://cover-corp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cover 株式会社 <span className="ex_icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://cover-corp.com/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  隐私政策 <span className="ex_icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://hololivepro.com/request-to-minors/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  未成年人须知
                </a>
              </li>
              <li>
                <a
                  href="https://hololivepro.com/terms/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  使用条款
                </a>
              </li>
              <li>
                <a
                  href="https://hololivepro.com/question/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  常见问题
                </a>
              </li>
              <li>
                <a
                  href="https://hololivepro.com/supporter/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  支持者计划
                </a>
              </li>
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
