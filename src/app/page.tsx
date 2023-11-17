import ProductViewSection from "@/containers/product-page/product-view";
import ProductInfoSection from "@/containers/product-page/product-info";

export default function Home() {
  return (
    <main>
      <div className="md:w-4/6 mx-auto md:pt-9 lg:w-10">
        <div className="flex flex-col justify-between gap-6 sm:gap-12 md:flex-row md:items-center">
          <ProductViewSection/>
          <ProductInfoSection/>
        </div>
      </div>
    </main>
  );
}
