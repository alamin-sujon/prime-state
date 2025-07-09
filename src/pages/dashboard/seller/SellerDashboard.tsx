import mannWithFlag from "@/assets/Seller-imgs/Shape.png";
import eye from "@/assets/Seller-imgs/eye.png";
import clander from "@/assets/Seller-imgs/clander.png";
import AllAds from "../../../components/SellerDashboardComponents/AllAds";

const SellerDashboard = () => {
  return (
    <div>
      <div>
        <div className="mb-6 sm:mb-8 lg:mb-10">
          <h1 className="text-xl sm:text-2xl lg:text-3xl  text-[#1A1A1A] mb-2 font-semibold">
            Hello, Annette Black!
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Have a look on your ads performance today!
          </p>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        

          <div className="bg-white rounded-2xl border-1 border-[#DBDBDB] overflow-hidden">
            <div
              className="p-4 sm:p-6 bg-green-100"
              style={{
                background: "linear-gradient(to right, #E5FFE3, #FFFFFF)",
              }}
            >
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="bg-[#219618] rounded-full p-2 sm:p-3 flex-shrink-0">
                  <img src={mannWithFlag} alt="" />
                </div>
                <div className="min-w-0 flex-1 gap-2">
                  <div className="text-xl sm:text-2xl lg:text-3xl  text-[#1A1A1A] truncate">
                    125
                  </div>
                  <div className="text-gray-600 text-md ">Total Listed</div>
                </div>
              </div>
            </div>
          </div>

        
          <div className="bg-white rounded-2xl border-1 border-[#DBDBDB] overflow-hidden">
            <div
              className="p-4 sm:p-6 bg-green-100"
              style={{
                background: "linear-gradient(to right, #C3E5FF, #FFFFFF)",
              }}
            >
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="bg-[#CBA65F] rounded-full p-2 sm:p-3 flex-shrink-0">
                  <img src={eye} alt="" className="w-full h-full" />
                </div>
                <div className="min-w-0 flex-1 gap-2">
                  <div className="text-xl sm:text-2xl lg:text-3xl  text-[#1A1A1A] truncate">
                    125
                  </div>
                  <div className="text-gray-600 text-md ">Total Listed</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border-1 border-[#DBDBDB] overflow-hidden">
            <div
              className="p-4 sm:p-6 bg-green-100"
              style={{
                background: "linear-gradient(to right, #FFD4D5, #FFFFFF)",
              }}
            >
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="bg-[#D55C5E] rounded-full p-2 sm:p-3 flex-shrink-0">
                  <img src={clander} alt="" />
                </div>
                <div className="min-w-0 flex-1 gap-2">
                  <div className="text-xl sm:text-2xl lg:text-3xl  text-[#1A1A1A] truncate">
                    125
                  </div>
                  <div className="text-gray-600 text-md ">Total Listed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">Recent Ads</h1>
        <AllAds row={5}/>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
