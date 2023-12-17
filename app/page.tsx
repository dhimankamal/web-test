import {
  BestSellerSection,
  CategorySection,
  CollectionsSection,
  CustomerReviews,
  DiscountDeliverySec,
  HeroSection,
  ShopByCategory,
  ShopByGender,
  SignUpSection,
  StayUpdate,
  TrendingSections,
  VideoSection,
} from '@/components/sections';

export default function Home() {
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
  );
}
