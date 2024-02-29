import { Footer, Header } from '@/components/ui'
import Views from '@/views/Views'

const MainLayout = () => {
  return (
    <>
      <div className="w-full sticky top-0 z-50">
        <Header />
      </div>
      <div className="container flex flex-col">
        <main className="min-h-screen">
          <Views />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default MainLayout
