import { Banner, LatestDrops, Trending } from '@/components/ui'

const Home = () => {
  return (
    <div className="mt-4">
      <Banner />
      <LatestDrops />
      <Trending />
    </div>
  )
}

export default Home
