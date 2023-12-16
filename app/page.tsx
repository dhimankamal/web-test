import CategorySection from '@/components/sections/CategorySection'
import CollectionsSection from '@/components/sections/CollectionsSection'
import DiscountDeliverySec from '@/components/sections/DiscountDeliverySec'
import HeroSection from '@/components/sections/HeroSection'

export default function Home () {
  return (
    <>
      <HeroSection />
	  <CategorySection />
	  <DiscountDeliverySec />
	  <CollectionsSection />
    </>
  )
}
