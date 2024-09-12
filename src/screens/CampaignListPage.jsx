import React from "react";
import PlanCard from "../components/landing-page/PlanCard";
import Header from "../components/landing-page/Header";
import Footer from "../components/landing-page/Footer";

const campaigns = [
  {
    id: 1,
    title: "Money Momentum...",
    category: "Pendidikan",
    description: "Total Premium helps you start lower investments...",
    progress: 72,
    target: 100000,
    collected: 50000,
    image: "src/assets/campaign1.jpg",
  },
  {
    id: 2,
    title: "Long-Term",
    category: "Sosial",
    description: "Creative vision. To get started, imagine your dream life...",
    progress: 44,
    target: 10000000,
    collected: 5550000,
    image: "src/assets/campaign2.jpg",
  },
  {
    id: 3,
    title: "Long-Term",
    category: "Sosial",
    description: "Creative vision. To get started, imagine your dream life...",
    progress: 44,
    target: 10000000,
    collected: 50000,
    image: "src/assets/campaign2.jpg",
  },
  {
    id: 4,
    title: "Long-Term",
    category: "Sosial",
    description: "Creative vision. To get started, imagine your dream life...",
    progress: 44,
    target: 10000000,
    collected: 50000,
    image: "src/assets/campaign2.jpg",
  },
  {
    id: 5,
    title: "Money Momentum...",
    category: "Pendidikan",
    description: "Total Premium helps you start lower investments...",
    progress: 72,
    target: 10000000,
    collected: 50000,
    image: "src/assets/campaign1.jpg",
  },
  {
    id: 6,
    title: "Long-Term",
    category: "Sosial",
    description: "Creative vision. To get started, imagine your dream life...",
    progress: 44,
    target: 10000000,
    collected: 50000,
    image: "src/assets/campaign2.jpg",
  },
  {
    id: 7,
    title: "Long-Term",
    category: "Sosial",
    description:
      "Creative vision. To get started, imagine your drCreative vision. To get started, imagine your drCreative vision. To get started, imagine your dream life...",
    progress: 44,
    target: 10000000,
    collected: 50000,
    image: "src/assets/campaign2.jpg",
  },
  {
    id: 8,
    title: "Long-Term",
    category: "Sosial",
    description: "Creative vision. To get started, imagine your dream life...",
    progress: 44,
    target: 10000000,
    collected: 50000,
    image: "src/assets/campaign2.jpg",
  },
  // Tambahkan campaign lain
];

const CampaignListPage = () => {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Daftar Campaign</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {campaigns.map((campaign, index) => (
            <div key={index}>
              <PlanCard
                category={campaign.category}
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
        {/* 
            <div className="flex justify-center mt-6">
                <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg">
                    Load More
                </button>
            </div> */}
      </div>
      <Footer />
    </>
  );
};

export default CampaignListPage;
