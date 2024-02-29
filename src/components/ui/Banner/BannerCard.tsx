import { Link } from 'react-router-dom'
import { Banner } from './Banner'
import { Button } from '@/components/shared'

type Props = {
  banner: Banner
}

const BannerCard = (props: Props) => {
  const { banner } = props
  return (
    <div className="banner-card">
      <div className="banner-inner">
        <div className="banner-background">
          <img
            src={banner.bannerBg}
            loading="lazy"
            style={{ opacity: 1, position: 'relative' }}
          />
        </div>
        <div className="banner-content">
          <div className="banner-image">
            <Link to="#" className="banner-link">
              <img
                src={banner.avatarImg}
                loading="lazy"
                style={{ opacity: 1, position: 'relative' }}
              />
            </Link>
          </div>
          <div className="banner-text">
            <h1>{banner.title}</h1>
            <p>
              <span className="overflow-hidden">
                <span className="truncate">{banner.description}</span>
              </span>
            </p>
            <div className="flex justify-center flex-wrap min-w-fit items-center -ml-[6px] gap-4 md:justify-start">
              <Link to="#" target="_blank">
                <Button className="!bg-light !text-dark lg-m:h-[54px] lg-m:py-3 lg-m:px-6 lg-m:text-base">
                  Explore {banner.btnTitle}
                </Button>
              </Link>
              <Link to="#" target="_blank">
                <Button className="!bg-light/5 !text-light lg-m:h-[54px] lg-m:py-3 lg-m:px-6 lg-m:text-base">
                  Powered by AlienzStudio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerCard
