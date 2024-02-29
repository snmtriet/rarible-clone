import { Link } from 'react-router-dom'
import { Button } from '../shared'
import { IconVerify } from '@/assets/svg'

const Card = ({ imgKey }: { imgKey: string }) => {
  return (
    <Link to="#" className="card-nft">
      <div className="card-image">
        <div className="image-wrapper">
          <img
            src={`/img/card-${imgKey}.png`}
            title="The Impossible Creatures"
            className="sc-aXZVg sc-kAkpmW sc-gFVvzn ivKxKd lidIvh sc-jwZKMi gnbgxe sc-gJCZQp etycqA sc-jwZKMi gnbgxe sc-gJCZQp etycqA"
            loading="lazy"
            style={{ opacity: 1, position: 'relative' }}
          />

          <div className="action-hidden">
            <div className="button-wrapper">
              <Button>Mint now</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="card-text">
        <div className="by">
          <span className="sc-gEvEer sc-imWYAI jHEndm">by Varvara Alay</span>
          <IconVerify />
        </div>
        <span className="name">The Impossible Creatures</span>
      </div>
      <div className="px-1 pb-1 flex md:hidden">
        <span className="whitespace-nowrap text-dark/60 dark:text-light/60 text-[11px] leading-[15px] font-medium after:content-['·'] after:inline-block after:w-[14px] after:text-center">
          Completed
        </span>
        <span className="whitespace-nowrap text-dark/60 dark:text-light/60 text-[11px] leading-[15px] font-medium">
          0.002 ETH
        </span>
      </div>
      <div className="card-price">
        <div className="status">
          <span className="title">Minting</span>
          <span className="text">
            <div className="flex">
              <div className="sc-ibQAlb jDhRgv" />
              <span title="2/22/2024, 9:00:00 PM">Now</span>
            </div>
          </span>
        </div>
        <div className="value">
          <span className="title">Price</span>
          <span className="text">0.002 ETH</span>
        </div>
      </div>
    </Link>
  )
}

export default Card
