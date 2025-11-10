import Image from "next/image"
import { HeroSlide } from "@/data/siteData"

type HeroSectionProps = {
  slides: HeroSlide[]
}

export const HeroSection = ({ slides }: HeroSectionProps) => {
  // 使用第一张幻灯片作为主展示
  const mainSlide = slides[0]

  if (!mainSlide) return null

  return (
    <section id='top_kv'>
      <div className='relative w-full'>
        <div className='pc_only'>
          <div className='hero_frame desktop'>
            <Image
              src={mainSlide.desktopImage}
              alt={mainSlide.title}
              fill
              priority
              sizes='(max-width: 1200px) 100vw, 100vw'
              className='object-cover'
            />
          </div>
        </div>
        <div className='sp_only'>
          <div className='hero_frame mobile'>
            <Image
              src={mainSlide.mobileImage}
              alt={mainSlide.title}
              fill
              sizes='100vw'
              className='object-cover'
            />
          </div>
        </div>
        {/* <div className="absolute inset-0 z-10 flex flex-col justify-end bg-gradient-to-t from-black/50 via-transparent to-transparent p-6 md:p-12 text-white">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.4em] text-white/70">
              hololive production
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              {mainSlide.title}
            </h2>
            <p className="max-w-2xl text-base md:text-lg mb-6">
              {mainSlide.description}
            </p>
            <a
              href={mainSlide.ctaHref}
              className="btn_primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {mainSlide.ctaLabel}
            </a>
          </div>
        </div> */}
      </div>
      <p className='catch'>
        <Image
          src='https://hololivepro.com/wp-content/themes/hololive_production/images/catch_ja_02.svg'
          alt='让虚拟偶像走进现实'
          width={1440}
          height={300}
          className='pc_only'
        />
        <Image
          src='https://hololivepro.com/wp-content/themes/hololive_production/images/catch_ja_sp_02.png'
          alt='让虚拟偶像走进现实'
          width={750}
          height={200}
          className='sp_only'
        />
      </p>
    </section>
  )
}
