import AllAds from "../../../components/SellerDashboardComponents/AllAds";

const TotalListed = () => {
  return (
    <div className="py-2">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">All Ads</h1>
      <AllAds row={10} />
    </div>
  );
};

export default TotalListed;
