import { FaArrowLeft } from "react-icons/fa";
import userImg from "../../../assets/Seller-imgs/userDemo.jpg";
import { useState } from "react";
import EditProfile from "../../../components/SellerDashboardComponents/EditProfile";
import ChangePassword from "../../../components/SellerDashboardComponents/ChangePassword";
const MyProfile = () => {
  const [activeTab, setActiveTab] = useState('profile')
    const personalData = {
    fullName: "Annetter Black",
    email: "annetter.black@gmail.com",
    phone: "(+1) 123456 789",
    address: "3517 W. Gray St. Utica, Pennsylvania 57867",
    company: "Biffco Enterprises Ltd.",
  }
  return (
    <div>
      <div className="text-xl flex items-center gap-2 py-5">
        <FaArrowLeft />
        <h1 className="font-semibold">My Profile</h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-start gap-5">
        <div className="lg:w-1/3 bg-white h-screen rounded-xl">
          <div>
            <div>
              <div className="w-full max-w-2xl mx-auto bg-white">
                {/* Golden background section */}
                <div className="relative">
                  <div className="bg-[#CBA65F] h-32 rounded-t-3xl"></div>

                  {/* Profile image positioned to overlap */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16">
                    <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-lg">
                      <img
                        src={userImg}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Profile information */}
                <div className="pt-20 pb-8 px-8 text-center">
                  <h1 className="text-4xl font-bold text-yellow-600 mb-2">
                    Annetter Black
                  </h1>

                  <p className="text-gray-600 text-lg mb-6">
                    Account Type: Seller
                  </p>

                  {/* Separator line */}
                  <div className="w-full h-px bg-gray-300"></div>
                </div>
                <div className="w-full max-w-2xl mx-auto bg-white p-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                    Personal Info
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-24 flex-shrink-0">
                        <span className="text-gray-700 font-medium">
                          Full Name
                        </span>
                      </div>
                      <div className="flex-shrink-0 mx-4">
                        <span className="text-gray-700">:</span>
                      </div>
                      <div className="flex-1">
                        <span className="text-gray-900">
                          {personalData.fullName}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-24 flex-shrink-0">
                        <span className="text-gray-700 font-medium">Email</span>
                      </div>
                      <div className="flex-shrink-0 mx-4">
                        <span className="text-gray-700">:</span>
                      </div>
                      <div className="flex-1">
                        <span className="text-gray-900">
                          {personalData.email}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-24 flex-shrink-0">
                        <span className="text-gray-700 font-medium">Phone</span>
                      </div>
                      <div className="flex-shrink-0 mx-4">
                        <span className="text-gray-700">:</span>
                      </div>
                      <div className="flex-1">
                        <span className="text-gray-900">
                          {personalData.phone}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-24 flex-shrink-0">
                        <span className="text-gray-700 font-medium">
                          Address
                        </span>
                      </div>
                      <div className="flex-shrink-0 mx-4">
                        <span className="text-gray-700">:</span>
                      </div>
                      <div className="flex-1">
                        <span className="text-gray-900">
                          {personalData.address}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-24 flex-shrink-0">
                        <span className="text-gray-700 font-medium">
                          Company
                        </span>
                      </div>
                      <div className="flex-shrink-0 mx-4">
                        <span className="text-gray-700">:</span>
                      </div>
                      <div className="flex-1">
                        <span className="text-gray-900">
                          {personalData.company}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-2/3 bg-white h-screen rounded-xl">
          <div className="p-3">
            <div className="flex items-center">
              <button onClick={()=> setActiveTab('profile')} className={` w-full cursor-pointer px-3 md:px-5 py-3 md:text-xl font-semibold border-t-2  rounded ${activeTab === 'profile'? 'border-[#CBA65F] bg-gray-200  ' : ''}`}>Edit Profile</button>
              <button onClick={()=> setActiveTab('password')} className={` w-full cursor-pointer px-3 md:px-5 py-3 md:text-xl font-semibold border-t-2 rounded ${activeTab === 'password'? 'border-[#CBA65F] bg-gray-200  ' : ''}`}>Change Password</button>
            </div>
           <div className="py-2">
             {
              activeTab === 'profile' ? <EditProfile/> : <ChangePassword/>
            }
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
