import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage";
export default function Home() {
  return (
    <main className="">
        <Navbar />
      <div className="w-4/6 mx-auto pt-9">
        <ProductPage/>
      </div>
    </main>
  );
}
