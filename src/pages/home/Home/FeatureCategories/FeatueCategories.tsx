

import { MdHome, MdDirectionsCar, MdDirectionsBoat, MdWatch, MdDiamond } from "react-icons/md";
import realstate from "@/assets/Categories/realstate.png"
import cars from "@/assets/Categories/cars.png"
import Yacht from "@/assets/Categories/yacht.png"
import Watch from "@/assets/Categories/watch.png"
import jewellery from "@/assets/Categories/jewellery.png"
interface Category {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const categories: Category[] = [
  {
    icon: <MdHome size={40} />,
    title: "Real Estate",
    subtitle: "532,795 Listings",
  },
  {
    icon: <MdDirectionsCar size={40} />,
    title: "Car",
    subtitle: "10+ Brads",
  },
  {
    icon: <MdDirectionsBoat size={40} />,
    title: "Yacht",
    subtitle: "10+ Brads",
  },
  {
    icon: <MdWatch size={40} />,
    title: "Watch",
    subtitle: "10+ Brads",
  },
  {
    icon: <MdDiamond size={40} />,
    title: "Jewellery",
    subtitle: "3K+ Design",
  },
];

export default function FeaturedCategories() {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#b0894c] mb-10">Featured Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 border rounded-xl hover:shadow-md transition duration-300 text-[#b0894c] bg-white"
          >
            {cat.icon}
            <h3 className="mt-4 text-lg font-medium">{cat.title}</h3>
            <p className="text-sm text-gray-600">{cat.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
