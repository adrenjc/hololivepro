import Image from "next/image";
import { auditionLinks } from "@/data/siteData";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const AuditionSection = () => {
  const titleRef = useScrollReveal<HTMLHeadingElement>({
    animationClass: "jsplay",
  });

  return (
    <section id="top_audition">
      <div className="container">
        <h2 className="top_tit anime" ref={titleRef}>
          AUDITION
          <span>试镜招募</span>
        </h2>
      </div>
      <div className="a_contents">
        <div className="container">
          <figure>
            <Image
              src="https://hololivepro.com/wp-content/themes/hololive_production/images/top_audition_logo2.svg"
              alt="hololive Audition"
              width={600}
              height={360}
            />
          </figure>
          <div className="right">
            <p>
              hololive production 长期诚挚招募具备歌唱、主持、插画、3D 表演等才能的虚拟艺人。无论你习惯使用哪种语言，只要热爱创作，就能与制作团队一起打造全新的舞台。
            </p>
            <div className="btn_outwrap left">
              {auditionLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn_primary wt link"
                >
                  <p className="txt">{link.label}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="bg_area">
          <span className="deco d_01" />
          <span className="deco d_02" />
          <span className="deco d_03" />
        </div>
      </div>
    </section>
  );
};
