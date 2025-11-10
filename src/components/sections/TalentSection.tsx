import Image from "next/image";
import { useState } from "react";
import { TalentGroup } from "@/data/siteData";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CloneTicker } from "@/components/common/CloneTicker";

type TalentSectionProps = {
  groups: TalentGroup[];
};

export const TalentSection = ({ groups }: TalentSectionProps) => {
  const [activeId, setActiveId] = useState(groups[0]?.id ?? "");
  const isMobile = useIsMobile();
  const titleRef = useScrollReveal<HTMLHeadingElement>({
    animationClass: "jsplay",
  });

  const chunked = [];
  for (let i = 0; i < groups.length; i += 3) {
    chunked.push(groups.slice(i, i + 3));
  }

  const handleClick = (id: string) => {
    if (isMobile) return;
    setActiveId((prev) => (prev === id ? "" : id));
  };

  return (
    <section id="top_talent">
      <div className="container">
        <h2 className="top_tit anime" ref={titleRef}>
          TALENT
          <span>成员阵容</span>
        </h2>
      </div>
      <CloneTicker
        text="hololive production TALENT"
        repeat={12}
        className="txt_bg"
      />
      {chunked.map((chunk, idx) => (
        <ul className="talent_list" key={`talent-chunk-${idx}`}>
          {chunk.map((group) => {
            const isActive = isMobile || activeId === group.id;
            return (
              <li
                key={group.id}
                className={`${group.align ?? "left"} ${
                  isActive ? "active" : ""
                }`}
                onClick={() => handleClick(group.id)}
              >
                <figure>
                  <Image
                    src={group.image}
                    alt={group.name}
                    width={640}
                    height={400}
                  />
                </figure>
                <p className="g_name">
                  <Image
                    src={group.logo}
                    alt={group.name}
                    width={220}
                    height={80}
                  />
                </p>
                <p className="tl_txt">Open</p>
                <div className="open_box">
                  <p className="g_name_02">
                    <Image
                      src={group.logo}
                      alt={group.name}
                      width={220}
                      height={80}
                    />
                  </p>
                  <p>{group.description}</p>
                  <p className="tl_txt">查看成员</p>
                </div>
                <CloneTicker
                  text="hololive production TALENT"
                  repeat={6}
                  className="talent_bg_open"
                />
                <a
                  href={group.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="a_open"
                />
                <span className="deco d_01" />
                <span className="deco d_02" />
                <span className="deco d_03" />
                <span className="deco d_04" />
              </li>
            );
          })}
        </ul>
      ))}
    </section>
  );
};
