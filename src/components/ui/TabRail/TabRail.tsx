import { useWindowDimensions } from '@/hooks'
import { cn } from '@/utils'
import {
  ReactNode,
  memo,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react'

type Props = {
  tabs: Tab[]
  getTab?: (tabActive: TabActive) => void
  className?: string
  height: number
}

type Tab = string | ReactNode
type TabActive = { index: number; width?: number; transformValue?: number }

const TabRail = (props: Props) => {
  const { tabs, className, height, getTab } = props
  const id = useId()
  const containerWidthRef = useRef(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [tabActive, setTabActive] = useState<TabActive>({ index: 0 })

  useEffect(() => {
    if (containerWidthRef.current === containerRef.current?.offsetWidth) return
    const idTransformed = (id + tabActive.index).replace(/:/g, '')
    const tab = document.querySelector(`#${idTransformed}`) as HTMLButtonElement
    handleChangeTab({
      index: tabActive.index,
      width: tab.offsetWidth,
      transformValue: tab.offsetLeft,
    })
    containerWidthRef.current = containerRef.current?.offsetWidth || 0
  })

  const handleChangeTab = useCallback(
    (tab: TabActive) => {
      setTabActive(tab)
      getTab?.(tab)
    },
    [getTab],
  )

  const railStyle = useMemo(
    () => ({
      height,
    }),
    [height],
  )

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative w-full h-9 text-[17px] bg-dark/5 dark:bg-light/5 rounded-2xl',
        className,
      )}
      style={railStyle}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="flex flex-col p-[2px] h-10 min-w-fit min-h-full">
          <div className="flex w-full relative flex-grow">
            <div
              className="absolute top-1/2 left-0 bg-light dark:bg-dark rounded-[14px] transition-all ease-in-out duration-300"
              style={{
                height: height - 5,
                width: tabActive?.width,
                transform: `translate(${
                  Number(tabActive?.transformValue) - 0.5
                }px, -50%)`,
              }}
            />
            {tabs.map((tab, index) => (
              <ButtonTab
                id={id}
                tab={tab}
                key={index}
                tabs={tabs}
                index={index}
                tabActive={tabActive}
                onChangeTab={handleChangeTab}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TabRail

type ButtonTabProps = {
  id: string
  tab: Tab
  tabs: Tab[]
  index: number
  tabActive: TabActive
  onChangeTab: (tab: TabActive) => void
}

const ButtonTab = memo((props: ButtonTabProps) => {
  const { id, tab, tabs, index, tabActive, onChangeTab } = props
  const buttonRef = useRef<HTMLButtonElement>(null)
  const { width } = useWindowDimensions()

  useEffect(() => {
    if (index !== tabActive.index) return
    onChangeTab({
      index: tabActive.index,
      width: buttonRef.current?.offsetWidth,
      transformValue: buttonRef.current?.offsetLeft,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width])

  const handleClick = useCallback(() => {
    onChangeTab({
      index,
      width: buttonRef.current?.offsetWidth,
      transformValue: buttonRef.current?.offsetLeft,
    })
  }, [index, onChangeTab])

  const buttonStyle = useMemo(
    () => ({
      width: `${100 / tabs.length}%`,
    }),
    [tabs],
  )

  return (
    <button
      id={(id + index).replace(/:/g, '')}
      ref={buttonRef}
      onClick={handleClick}
      className={cn(
        'w-auto flex items-center justify-center text-dark/60 dark:text-light/60 relative px-4',
        index === tabActive?.index && '!text-dark dark:!text-light',
      )}
      style={buttonStyle}
    >
      <span className="whitespace-nowrap align-middle text-base">{tab}</span>
    </button>
  )
})
