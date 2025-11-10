import Image from "next/image";
import { BannerCard } from "@/data/siteData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

type BannerSectionProps = {
  banners: BannerCard[];
};

export const BannerSection = ({ banners }: BannerSectionProps) => (
  <div className="bnr_wrap">
    <div className="container">
      <ul className="square_bnr">
        {banners.map((card) => (
          <li key={card.id}>
            <a href={card.href} target="_blank" rel="noopener noreferrer">
              <Image
                src={card.image}
                alt={card.label}
                width={card.width}
                height={card.height}
              />
            </a>
          </li>
        ))}
      </ul>
      <div className="sp_bnr_wrap">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          breakpoints={{
            300: { slidesPerView: 1.2 },
            600: { slidesPerView: 1.8 },
          }}
        >
          {banners.map((card) => (
            <SwiperSlide key={`sp-${card.id}`}>
              <a href={card.href} target="_blank" rel="noopener noreferrer">
                <Image
                  src={card.image}
                  alt={card.label}
                  width={card.width}
                  height={card.height}
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </div>
);
