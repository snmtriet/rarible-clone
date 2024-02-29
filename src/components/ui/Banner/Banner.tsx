import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { IconArrowLeft, IconArrowRight } from '@/assets/svg'
import { useState } from 'react'
import BannerCard from './BannerCard'

const data = [
  {
    avatarImg: '/banner/avatar-2.png',
    bannerBg: '/banner/banner-2.png',
    title: 'Citizens of Mantle',
    description:
      'Citizens of Mantle is a NFT collection by Mantle, one of the world’s largest DAO-led web3 ecosystems. Available on Mintle, the freshest marketplace on Mantle. #PoweredByAlienzStudio.',
    btnTitle: 'CoM',
  },
  {
    avatarImg: '/banner/avatar-1.gif',
    bannerBg: '/banner/banner-1.png',
    title: 'Mocaverse',
    description:
      'The Mocas are bold and infinitely creative beings who call the Mocaverse home. Check out the Mocaverse Marketplace #PoweredByAlienzStudio.',
    btnTitle: 'Mocaverse',
  },
]

export type Banner = (typeof data)[0]

const Banner = () => {
  const [banners] = useState(data)

  return (
    <div className="relative pb-12">
      <div className="relative">
        <Swiper
          className="swiper-banner rounded-xl"
          modules={[Pagination, Navigation]}
          speed={500}
          slidesPerView={1}
          spaceBetween={20}
          simulateTouch={false}
          pagination={{
            clickable: true,
            el: '.swiper-pagination.banner',
          }}
          navigation={{
            nextEl: '.swiper-button-next.banner-next',
            prevEl: '.swiper-button-prev.banner-prev',
          }}
          breakpoints={{
            767: {
              slidesPerGroupAuto: false,
              simulateTouch: false,
            },
            0: {
              slidesPerGroupAuto: true,
              simulateTouch: true,
            },
          }}
        >
          {banners.map((item, index) => (
            <SwiperSlide key={index}>
              <BannerCard banner={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="swiper-button-next banner-next">
          <IconArrowLeft />
        </button>
        <button className="swiper-button-prev banner-prev">
          <IconArrowRight />
        </button>
      </div>
      <div className="swiper-pagination banner flex justify-center items-center"></div>
    </div>
  )
}

export default Banner
