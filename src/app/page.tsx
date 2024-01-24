import AboutSection from '@/shared/components/about-section/about-section'
import Header from '@/shared/components/header/page'
import PreSaleStatusContainer from '@/shared/components/pre-sale-status-bar/pre-sale-staus-bar'

export default function Home() {
  return (
    <main>
      <Header />
      <PreSaleStatusContainer />
      <AboutSection />
    </main>
  )
}
