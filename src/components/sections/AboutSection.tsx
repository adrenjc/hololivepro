import { CloneTicker } from "@/components/common/CloneTicker";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const AboutSection = () => {
  const revealRef = useScrollReveal<HTMLElement>({ animationClass: "jsplay" });

  return (
    <section id="top_about" className="anime" ref={revealRef}>
      <div className="container">
        <h2 className="top_tit">
          ABOUT
          <span>关于 hololive production</span>
        </h2>
        <p>
          hololive production 是以 Live2D 技术为核心、涵盖 YouTube、X、TikTok
          等多元平台的虚拟艺人经纪品牌。
        </p>
        <p>
          <span className="large_txt">
            我们以原创音乐、线上线下演唱会与品牌合作，连接粉丝与虚拟偶像的每一个瞬间。
          </span>
        </p>
        <div className="btn_outwrap center">
          <a
            href="https://hololivepro.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="btn_primary bl"
          >
            <p className="txt">进一步了解</p>
          </a>
        </div>
      </div>
      <CloneTicker
        text="hololive production"
        repeat={8}
        className="txt_bg"
      />
    </section>
  );
};
