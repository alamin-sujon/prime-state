import realstate from "@/assets/Categories/realstate.png"
import cars from "@/assets/Categories/car.png"
import Yacht from "@/assets/Categories/yacht.png"
import Watch from "@/assets/Categories/watch.png"
import jewellery from "@/assets/Categories/jewellery.png"
interface Category {
  icon: string; // URL or module path of the image
  title: string;
  subtitle: string;
}

const categories: Category[] = [
  {
    icon: realstate,
    title: "Real Estate",
    subtitle: "532,795 Listings",
  },
  {
    icon: cars,
    title: "Car",
    subtitle: "10+ Brands",
  },
  {
    icon: Yacht,
    title: "Yacht",
    subtitle: "10+ Brands",
  },
  {
    icon: Watch,
    title: "Watch",
    subtitle: "10+ Brands",
  },
  {
    icon: jewellery,
    title: "Jewellery",
    subtitle: "3K+ Design",
  },
];

export default function FeaturedCategories() {
  return (
   <section className="space-y-20 px-4 md:px-8 lg:px-16">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-normal text-[#CBA65F] sm:mb-4 md:mb-8">
        Featured Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-center">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="
              flex flex-col bg-white
              w-full max-w-[304px] aspect-[304/310]  /* Maintain aspect ratio */
              gap-2 border-b border-b-[#D5D5D5]
              items-center justify-center
              p-4 border rounded-xl
              hover:shadow-md transition duration-300
              text-[#b0894c]
              mx-auto
            "
          >
            <div className="w-12 h-12">
              <img src={cat.icon} alt={cat.title} className="w-full h-full object-contain" />
            </div>
            <h3 className="text-xl font-medium text-[#CBA65F]">{cat.title}</h3>
            <p className="text-base font-normal text-[#CBA65F]">{cat.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
