import { Link, useNavigate } from "react-router-dom";
import PlanCard from "./PlanCard";
import { useEffect } from "react";
import { getCampaigns } from "../../redux/actions/campaignAction";
import { useDispatch, useSelector } from "react-redux";

const FeaturedPlans = () => {
  const dispatch = useDispatch();
  const campaigns = useSelector((state) => state.campaigns.campaigns);
  const isLoading = useSelector((state) => state.campaigns.loading);

  useEffect(() => {
    dispatch(getCampaigns());
  }, [dispatch]);

  // const plans = [
  //   {
  //     id: 1,
  //     title: "Money Momentum...",
  //     category: "Pendidikan",
  //     description: "Total Premium helps you start lower investments...",
  //     progress: 72,
  //     target: 10000000,
  //     collected: 50000,
  //     image: "src/assets/campaign1.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "Long-Term",
  //     category: "Sosial",
  //     description:
  //       "Creative vision. To get started, imagine your dream life...",
  //     progress: 44,
  //     target: 10000000,
  //     collected: 50000,
  //     image: "src/assets/campaign2.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "Long-Term",
  //     category: "Sosial",
  //     description:
  //       "Creative vision. To get started, imagine your dream life...",
  //     progress: 44,
  //     target: 10000000,
  //     collected: 50000,
  //     image: "src/assets/campaign2.jpg",
  //   },
  //   {
  //     id: 4,
  //     title: "Long-Term",
  //     category: "Sosial",
  //     description:
  //       "Creative vision. To get started, imagine your dream life...",
  //     progress: 44,
  //     target: 10000000,
  //     collected: 50000,
  //     image: "src/assets/campaign2.jpg",
  //   },
  // ];

  return (
    <section className="py-16">
      <h2 className="text-center text-3xl font-bold mb-5">
        Yuk{" "}
        <span className="font-vt323 text-4xl font-extrabold border border-gray-500 p-2">
          Patungan
        </span>{" "}
        & Saling Berbagi
      </h2>
      {isLoading && <p className="flex flex-row justify-center">Loading...</p>}
      {campaigns === undefined && (
        <p className="flex flex-row justify-center">There is no campaign</p>
      )}
      {campaigns !== undefined && (
        <div className="px-10">
          <Link to="/campaign" className="flex justify-end mb-3 mr-5">
            <button className="px-5 py-2 border bg-gray-200 text-black text-sm rounded-full">
              {`Lihat lainnya >`}
            </button>
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-5">
            {campaigns
              .sort(() => Math.random() - 0.5)
              .slice(0, 4)
              .map((campaign) => (
                <PlanCard
                  key={campaign.ID}
                  id={campaign.ID}
                  category={campaign.category.name}
                  title={campaign.title}
                  image={`https://picsum.photos/200?random=${campaign.ID}`}
                  description={campaign.description}
                  progress={
                    campaign.target === 0
                      ? 0
                      : Math.round((campaign.collected / campaign.target) * 100)
                  }
                  target={campaign.target}
                  collected={campaign.collected}
                />
              ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedPlans;
