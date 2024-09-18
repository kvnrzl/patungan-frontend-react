import PlanCard from "../components/home-page/PlanCard";
import Header from "../components/home-page/Header";
import Footer from "../components/home-page/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getCampaigns } from "../redux/actions/campaignAction";

const CampaignListPage = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const campaign = useSelector((state) => state.campaigns.campaign);
  const campaigns = useSelector((state) => state.campaigns.campaigns);
  const isLoading = useSelector((state) => state.campaigns.loading);

  useEffect(() => {
    dispatch(getCampaigns());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Daftar Patungan</h2>
        {isLoading && (
          <p className="flex flex-row justify-center">Loading...</p>
        )}
        {campaigns === undefined && (
          <p className="flex flex-row justify-center">There is no campaign</p>
        )}
        {campaigns !== undefined && (
          // <p>There are {campaigns.length} campaigns</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {campaigns.map((campaign, index) => (
              <div key={index}>
                <PlanCard
                  id={campaign.ID}
                  category={campaign.category.name}
                  title={campaign.title}
                  image={`https://picsum.photos/200?random=${index}`}
                  description={campaign.description}
                  progress={
                    campaign.target === 0
                      ? 0
                      : Math.round((campaign.collected / campaign.target) * 100)
                  }
                  target={campaign.target}
                  collected={campaign.collected}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      {campaigns !== undefined && <Footer />}
    </>
  );
};

export default CampaignListPage;
