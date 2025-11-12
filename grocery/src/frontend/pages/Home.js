import FeatureBar from "../components/sections/FeatureBar";
import MarqueText from "../components/sections/MarqueText";
import BannerSection from "../components/sections/Banner";
import PaanBanner from "../components/sections/BannerScreen";
import CategoryGrid from "../components/sections/Category";
import ProductCarousel from "../components/sections/ProductCarousel";
export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold">Welcome to Grocery Store 🛒</h1>
      {/* <FeatureBar />
      <MarqueText />
      <BannerSection /> */}
      {/* <PaanBanner /> */}
      {/* <CategoryGrid /> */}
      <ProductCarousel
        title="Dairy, Bread & Eggs"
        seeAllLink="/category/dairy"
      />

      {/* You can re-use it for other categories! */}
      <ProductCarousel
        title="Fruits & Vegetables"
        seeAllLink="/category/fruits"
      />
    </>
  );
}
