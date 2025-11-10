import Image from "next/image";
import { NewsItem } from "@/data/siteData";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

type NewsSectionProps = {
  items: NewsItem[];
};

export const NewsSection = ({ items }: NewsSectionProps) => {
  const fadeRef = useScrollReveal<HTMLElement>({
    animationClass: "isPlay_b_cont",
    threshold: 0.15,
  });
  const titleRef = useScrollReveal<HTMLHeadingElement>({
    animationClass: "jsplay",
  });

  return (
    <section id="top_news" className="fade_b_cont box" ref={fadeRef}>
      <div className="container">
        <h2 className="top_tit anime" ref={titleRef}>
          NEWS
          <span>最新资讯</span>
        </h2>
        <div className="four news news-grid">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            pagination={{ clickable: true }}
            touchStartPreventDefault={false}
            simulateTouch={true}
            allowTouchMove={true}
            breakpoints={{
              300: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1400: { slidesPerView: 4 },
            }}
          >
            {items.map((news) => (
              <SwiperSlide key={news.id}>
                <a
                  href={news.href}
                  className="news-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <figure>
                    <Image
                      src={news.image}
                      alt={news.title}
                      width={800}
                      height={450}
                    />
                  </figure>
                  <div className="txt_box">
                    <p className="name">{news.date}</p>
                    <p className="title">{news.title}</p>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="btn_outwrap right">
          <a
            href="https://hololivepro.com/news"
            className="btn_primary bl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="txt">查看全部新闻</p>
          </a>
        </div>
      </div>
    </section>
  );
};
