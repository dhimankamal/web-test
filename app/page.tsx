import BestSellerSection from '@/components/sections/BestSellerSection'
import CategorySection from '@/components/sections/CategorySection'
import CollectionsSection from '@/components/sections/CollectionsSection'
import CustomerReviews from '@/components/sections/CustomerReviews'
import DiscountDeliverySec from '@/components/sections/DiscountDeliverySec'
import HeroSection from '@/components/sections/HeroSection'
import ShopByCategory from '@/components/sections/ShopByCategory'
import ShopByGender from '@/components/sections/ShopByGender'
import SignUpSection from '@/components/sections/SignUpSection'
import StayUpdate from '@/components/sections/StayUpdate'
import TrendingSections from '@/components/sections/TrendingSections'
import VideoSection from '@/components/sections/VideoSection'

export default function Home () {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <DiscountDeliverySec />
      <CollectionsSection />
      <TrendingSections />
      <BestSellerSection />
      <ShopByCategory />
      <ShopByGender />
      <CustomerReviews />
      <StayUpdate />
      <VideoSection />
      <SignUpSection />
    </>
  )
}
