import {
  IconArrowLeft,
  IconArrowRight,
  IconArrowRight2,
  IconOpenSea,
} from '@/assets/svg'
import { cn } from '@/utils'
import { Link } from 'react-router-dom'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Button } from '../shared'

type Props = {
  id: string
}

const listNftImages = [
  'https://lh3.googleusercontent.com/YLhMByDy3V2ZnwyeG5JGavHyuoVsNisBNfywzAvRc9paENjeRopeD3hY0nCwYSzcbn2aIEVwOIo6s2PKncjhHrx0KBlUOprH4hQ=s400',
  'https://lh3.googleusercontent.com/lK0jyHfIV5Yc6apiqGVxwzH1MC5y_ndsqmtMUdpBRQaFZQm619oN0jHHN7-tfa_PQcgKCW9AH6GrNf8p1AuwzbGObZ8FAZsmDvc=s400',
  'https://lh3.googleusercontent.com/MtQA2GwhI2bAiq3-nvD8yNOffl7L4P7bjIFCsKVN-Q8Y45Cbt-u5IROI3ZKIUGN9N39F3o6jbT2CD5MjmFD5GmFxZC-tgHueIEWh=s400',
  'https://lh3.googleusercontent.com/g-JfAr81-Oaxpt_NDR2M_9xK8PSudKN5gbilLN3AHZ_6lOdiOFFkXAH2N17HswFoI-CTHFIyDoneq0uz9ypIKiDow0B0ePIbtyg=s400',
  'https://lh3.googleusercontent.com/rO0KEGmuGXl2tF0TgHO-gl6B_JxWk7BmGp2tA07fqY0m2d6DASJ8bsjwPVXzLcLWXrj6rUqvjtCtS7E0SOivdLD5NEaaIO01vR9d=s400',
  'https://lh3.googleusercontent.com/dmaaqJhU1ENEFfLaoFknpyBKJoJYQIKva2rBcNpSMrQtEhmu9FBx8VPmhycJuvgnftPi_cxG9OkyPl-ILtJQ3GgjEbreyxaihA=s400',
  'https://lh3.googleusercontent.com/wGg4q8uHqPfULz4PsRPaAGwgTocNWvN6nixBhW6l0H-h5AsPnPgyfJALsBzwUwp-9YdLNv-LvF0wsP4Hgn2bOfiAlvvhnV8_Wg=s400',
  'https://lh3.googleusercontent.com/KKDFQPjparkWMS35DYBUe12xbVtRE3nBjfqP4F-ChGnPY7r84uMuyp9Xj7WZtN7lFzN1Wb0FAGls2N5F1_djaEU1Rk_I9zg799k=s400',
  'https://lh3.googleusercontent.com/wnnYE41ExeKJqOjO_NgZnQ26n8CEpSzB2rN9uHZqfiih95rHFucV5-c7STaWx2rNdZY-BdEiIVuBFjTw8mrMjl3Ykk7tU7QSb88=s400',
  'https://lh3.googleusercontent.com/DfFNCBgVJ7ZVVT_ODWa5Ha726m1IMxTN6DMWwLVEzBsaD3i10DiRDBgS49CX1JFBx8aH-KSyHTocvcdiHtvsVQEAO5YvdlCbM0M=s400',
  'https://lh3.googleusercontent.com/mFfnXQaTYDnTi_keXL_5ekiUeV_7TI1JLDxkdy3AtKcO_pCy6OlytiKKEpL7dAaNKfGpnwciTcDVCcaB6Z_TZhm74cQ4SRxkHuw=s400',
  'https://lh3.googleusercontent.com/qAMxq3oabXUMKT-Bz8ej9pOKIZlrPUfgqhMGBHJIKGFq8xTsI68IlCEn8sxReSfYiUupaZ3pIll9fW59qRf2ETA5GddnfJTmlzs=s400',
  'https://lh3.googleusercontent.com/aSJeuivi3TmuMfSnQKhZK8bTrgcjjT8wJgJLlLTXBWn7fmYQ8_xy-Ahymfivh1GeOztlHFnqAsIE7NbTZBZd8tpufNqdcaCUFK0=s400',
  'https://lh3.googleusercontent.com/qQMPCrpB-uSVAnlpp2mpt2J87nlwUo34pUOvX2elhf6urvujtM4enB5UurmK_M4upxZ16zQ_Sb_tPAtX1AD3qOEtV3RQ07IBTpE=s400',
  'https://lh3.googleusercontent.com/zv2fgmjxYF6a1D7jzJgPaiUGKUhn5w8lXddtWlfqZJ4TmwhF55RTR_SuDR8gD5djsaN3KoYwKcHeODBPUs1uUpsfofJASsu5CV0=s400',
  'https://lh3.googleusercontent.com/KGJZbf6ijWSwGhs-at3N4igHE_0Vo9AheG0VCdF3faAwi5_E5Q7vUnIOdl4wW-SnbhSJOSBfc39tQVzi9P-PxBMis3M7q8vB6A=s400',
  'https://lh3.googleusercontent.com/EGagAmEft8l6NnWW8cPwWIdbfJe31fXoOoXtYdtw1SRlJ5ZUrVkx9o5vvuFsQTMsFAlGQJwrFZtQUs6XOKF507-m_ISE1KXVPA=s400',
  'https://lh3.googleusercontent.com/g1PiA37QDYxLC8SJHLpBRZbdffDL99Y0Gkv2Q66QCyaBIEwyHNj2XjeOdP263LdPfmgE2r89JL9pt-3jF-dsRerRucLKyOOLFZ4=s400',
]

const CollectionCard = (props: Props) => {
  const { id } = props
  return (
    <div className="flex flex-col h-full max-w-full p-4 rounded-2xl border border-dark/[0.08] dark:border-light/[0.08]">
      <div className="flex flex-col [&>*:not(:last-child)]:mb-4">
        {/* top */}
        <div className="flex items-center">
          <div className="mr-4 flex flex-col flex-1">
            <span className="text-base font-medium leading-6">
              <Link to="#">
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl">
                      <img
                        className="w-full h-full object-cover rounded-xl z-0"
                        src="https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pcGZzLnJhcmlibGV1c2VyZGF0YS5jb20vaXBmcy9RbWFvYWZ5akJ5OTdOS0VQWnpBRDNGSzhSY3dDSkhiMjYzZERKYmhDYVhQV3Bv"
                        alt="MutantApeYachtClub"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 overflow-hidden">
                    <span className="truncate max-w-full">
                      MutantApeYachtClub
                    </span>
                  </div>
                </div>
              </Link>
            </span>
          </div>
          <div className="mr-4 flex flex-col">
            <Link to="#">
              <Button type="secondary" className="!w-10 !h-10">
                <IconArrowRight2 />
              </Button>
            </Link>
          </div>
        </div>
        {/* middle */}
        <div className="grid auto-cols-[1fr] gap-3 grid-flow-col">
          <div className="flex flex-col">
            <span className="mb-1 text-dark/60 dark:text-light/60 text-sm leading-5 font-medium">
              Day
            </span>
            <div className="flex flex-col">
              <span className="mb-1 whitespace-nowrap text-2xl leading-7 font-medium">
                <span>817.7</span>
                <pre className="inline"> </pre>
                <span className="text-dark/60 dark:text-light/60 text-sm leading-5 font-medium">
                  ETH
                </span>
              </span>
              <span
                className={cn(
                  'text-sm leading-5 font-medium',
                  '+'.includes('+') && 'text-[#28b833]',
                  '+'.includes('-') && 'text-[#e94949]',
                )}
              >
                +1,017.2%
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="mb-1 text-dark/60 dark:text-light/60 text-sm leading-5 font-medium">
              Floor
            </span>
            <div className="flex flex-col">
              <span className="mb-1 whitespace-nowrap text-2xl leading-7 font-medium">
                <span>3.294</span>
                <pre className="inline"> </pre>
                <span className="text-dark/60 dark:text-light/60 text-sm leading-5 font-medium">
                  ETH
                </span>
              </span>
              <span
                className={cn(
                  'text-sm leading-5 font-medium',
                  '+'.includes('+') && 'text-[#28b833]',
                  '+'.includes('-') && 'text-[#e94949]',
                )}
              >
                +37.5%
              </span>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="flex flex-col w-full">
          <div className="relative w-full h-full max-h-28 swiper-trending overflow-hidden">
            <Swiper
              className="h-full"
              modules={[Navigation]}
              speed={500}
              slidesPerView="auto"
              simulateTouch={false}
              slidesPerGroup={1}
              watchSlidesProgress={true}
              spaceBetween={16}
              navigation={{
                nextEl: `.swiper-button-next.trending-next.key-${id}`,
                prevEl: `.swiper-button-prev.trending-prev.key-${id}`,
              }}
              breakpoints={{
                767: {
                  simulateTouch: false,
                  slidesPerGroupAuto: false,
                },
                0: {
                  slidesPerGroupAuto: true,
                  simulateTouch: true,
                },
              }}
            >
              {listNftImages.map((url, index) => (
                <SwiperSlide className="!w-28 !h-28" key={index}>
                  <div className="flex flex-col w-full h-full relative select-none rounded-xl bg-dark/[0.04] dark:bg-light/[0.04] cursor-pointer transition-all duration-150 ease-in-out">
                    <div className="overflow-hidden rounded-xl w-full h-full flex items-center justify-center">
                      <img
                        src={url}
                        alt="MutantApeYachtClub"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute flex justify-center items-center max-w-[calc(100%-9px)] w-auto left-1 bottom-1 h-5 z-10 bg-dark/60 text-light px-[6px] rounded-full">
                      <span className="flex items-center truncate font-medium text-left text-xs leading-4 whitespace-nowrap text-light">
                        <IconOpenSea className="w-4 h-4 mr-[2px]" />
                        <span className="whitespace-nowrap text-light">
                          <span className="text-light">4.479</span>
                          <pre className="inline"> </pre>
                          <span className="text-light">ETH</span>
                        </span>
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="opacity-0 swiper-nav-trending">
              <button
                className={`swiper-button-next trending-next dark:!bg-btn-dark !text-light key-${id}`}
              >
                <IconArrowLeft className="!text-dark dark:!text-light" />
              </button>
            </div>
            <div className="opacity-0 swiper-nav-trending">
              <button
                className={`swiper-button-prev trending-prev dark:!bg-btn-dark !text-light key-${id}`}
              >
                <IconArrowRight className="!text-dark dark:!text-light" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollectionCard
