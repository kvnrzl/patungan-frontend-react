import PlanCard from "./PlanCard";

const FeaturedPlans = () => {
  const plans = [
    {
      type: "PENDIDIKAN",
      title: "Money Momentum Acakaduduud",
      description:
        "Total Premium helps you start lower investments with great savings. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rate: "72%",
      duration: "5yr CAGR",
    },
    {
      type: "SOSIAL",
      title: "Long-Term",
      description: "Creative vision. To get started, imagine your dream life.",
      rate: "44%",
      duration: "25yr CAGR",
    },
    {
      type: "BENCANA",
      title: "Focussed",
      description:
        "Be focused. Life planning, however, can serve as roadmaps or goals.",
      rate: "12%",
      duration: "1yr CAGR",
    },
    {
      type: "PLANS",
      title: "Fixed Income",
      description: "Get multiple benefits and returns & guaranteed returns.",
      rate: "0%",
      duration: "5yr CAGR",
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-center text-3xl font-bold mb-5">
        Yuk{" "}
        <span className="font-vt323 text-4xl font-extrabold border border-gray-500 p-2">
          Patungan
        </span>{" "}
        & Saling Berbagi
      </h2>
      <div className="flex justify-end mb-3 mr-5">
        <button className="px-5 py-2 border bg-gray-200 text-black text-sm rounded-full">
          {`Lihat lainnya >`}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-5">
        {plans.map((plan, index) => (
          <PlanCard
            key={index}
            type={plan.type}
            title={plan.title}
            description={plan.description}
            rate={plan.rate}
            duration={plan.duration}
            src={`https://picsum.photos/200?random=${index}`}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedPlans;
