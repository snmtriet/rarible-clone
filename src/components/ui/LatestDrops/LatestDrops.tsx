import { IconArrowLeft, IconArrowRight, IconArrowRight2 } from '@/assets/svg'
import { Button } from '@/components/shared'
import { useResponsiveVirtualizedGrid } from '@/hooks'
import { Link } from 'react-router-dom'
import { AutoSizer, Grid, GridCellProps } from 'react-virtualized'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Card } from '..'

const LatestDrops = () => {
  const list = new Array(2).fill(undefined)
  const columnCount = useResponsiveVirtualizedGrid({
    breakpoints: [
      { render: 6, value: 1920 },
      { render: 5, value: 1440 },
      { render: 4, value: 1124 },
      { render: 3, value: 876 },
      { render: 2, value: 540 },
      { render: 1, value: 200 },
    ],
  })

  function cellRenderer({ key, style }: GridCellProps) {
    return (
      <div key={key} style={style} className="p-2">
        <Card imgKey={key} />
      </div>
    )
  }

  return (
    <div className="mt-6">
      <div className="ld-container">
        <div className="ld-title">
          <h2>Latest Drops</h2>
        </div>
        <div className="flex flex-col gap-4">
          <div className="hidden md:flex">
            <AutoSizer disableHeight>
              {({ width }) => (
                <Grid
                  cellRenderer={cellRenderer}
                  columnCount={columnCount}
                  columnWidth={width / columnCount}
                  height={1200}
                  rowCount={list.length}
                  rowHeight={width / columnCount + 115}
                  width={width}
                  autoHeight
                />
              )}
            </AutoSizer>
          </div>
          <div className="relative md:hidden">
            <Swiper
              className="swiper-latest-drops rounded-xl"
              modules={[Navigation]}
              speed={500}
              slidesPerView={4}
              spaceBetween={12}
              navigation={{
                nextEl: '.swiper-button-next.latest-drops-next',
                prevEl: '.swiper-button-prev.latest-drops-prev',
              }}
              breakpoints={{
                767: {
                  simulateTouch: false,
                  slidesPerGroupAuto: false,
                },
                725: {
                  slidesPerView: 4,
                },
                575: {
                  slidesPerView: 3,
                },
                460: {
                  slidesPerView: 2,
                },
                0: {
                  simulateTouch: true,
                  slidesPerView: 1,
                  slidesPerGroupAuto: true,
                },
              }}
            >
              {[
                '0-0',
                '0-1',
                '0-2',
                '0-3',
                '0-4',
                '0-5',
                '1-0',
                '1-1',
                '1-2',
                '1-3',
                '1-4',
                '1-5',
              ].map((item, index) => (
                <SwiperSlide key={index} className="py-2">
                  <Card imgKey={item} />
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="swiper-button-next latest-drops-next">
              <IconArrowLeft />
            </button>
            <button className="swiper-button-prev latest-drops-prev">
              <IconArrowRight />
            </button>
          </div>
          <Link to="#" className="flex my-2 md:px-2">
            <Button className="w-full !text-dark !bg-dark/5 hover:!bg-dark/10 dark:hover:!bg-light/10 dark:!text-light dark:!bg-light/5 !py-6 !text-base ease-linear">
              <span className="inline-flex items-center h-full">
                <span className="mr-[6px]">View all drops</span>
                <IconArrowRight2 />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LatestDrops
