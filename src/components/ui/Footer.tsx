import { Link } from 'react-router-dom'
import { Button, Input } from '../shared'
import { IconArrowRight2 } from '@/assets/svg'

const Footer = () => {
  return (
    <div className="footer container w-full max-w-[1920px] mx-auto xs:px-6 md:px-7 lg-m:px-8">
      <div className="flex flex-col">
        <div className="mb-6 footer-top min-[1080px]:px-4 min-[1080px]:py-16 min-[1080px]:gap-x-[84px]">
          <div className="foot-subscribe">
            <form className="foot-form">
              <div className="flex flex-col">
                <span className="mb-6">Stay in the loop</span>
                <Input
                  placeholder="Your e-mail"
                  type="text"
                  right={
                    <Button type="ghost" className="!w-8 !h-8">
                      <IconArrowRight2 />
                    </Button>
                  }
                />
              </div>
            </form>
          </div>
          <div className="foot-marketplace">
            <div className="flex flex-col">
              <h3 className="mb-4">Marketplace</h3>
              <div className="flex flex-col">
                <Link to="#" className="foot-link">
                  <span>Explore</span>
                </Link>
                <Link to="#" className="foot-link" target="_blank">
                  <span>Blog</span>
                </Link>
                <Link to="#" className="foot-link" target="_blank">
                  <span>Jobs</span>
                </Link>
                <Link to="#" className="foot-link" target="_blank">
                  <span>Help center</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="foot-links">
            <div className="flex flex-col">
              <h3 className="mb-4">Links</h3>
              <div className="flex flex-col">
                <Link to="#" className="foot-link">
                  <span>Bug bounty</span>
                </Link>
                <Link to="#" className="foot-link" target="_blank">
                  <span>Become a partner</span>
                </Link>
                <Link to="#" className="foot-link" target="_blank">
                  <span>Branding</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="foot-socials">
            <div className="flex flex-col">
              <h3 className="mb-4">Join us</h3>
              <div className="flex flex-col">
                <Link to="#" className="foot-link">
                  <span>X</span>
                </Link>
                <Link to="#" className="foot-link" target="_blank">
                  <span>Instagram</span>
                </Link>
                <Link to="#" className="foot-link" target="_blank">
                  <span>Discord</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[1px] mb-6 w-full bg-dark/10 dark:bg-light/10" />
        <div className="flex flex-wrap items-center justify-center text-[13px] font-medium leading-5">
          <span className="text-dark/60 dark:text-light/60">
            © AlienzStudio, Inc.
          </span>
          <div className="my-1 mx-4 flex items-center justify-center flex-wrap">
            <Link
              to="#"
              className="my-1 mx-4 text-dark/60 dark:text-light/60 transition-all ease-in-out no-underline"
            >
              Community guidelines
            </Link>
            <Link
              to="#"
              target="_blank"
              className="my-1 mx-4 text-dark/60 dark:text-light/60 transition-all ease-in-out no-underline"
            >
              Terms
            </Link>
            <Link
              to="#"
              target="_blank"
              className="my-1 mx-4 text-dark/60 dark:text-light/60 transition-all ease-in-out no-underline"
            >
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
