// import { useHistory } from "react-router-dom";

import Header from "../components/home-page/Header";

const CampaignDetailPage = () => {
  //   const history = useHistory();

  // Function to handle back navigation
  //   const handleBack = () => {
  //     history.push("/"); // Change this path to your homepage or previous page
  //   };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10">
        {/* Main Container for 3/5 screen width */}
        <div className="w-3/5 bg-white shadow-lg rounded-lg">
          {/* Image Section with Floating Back Button */}
          <div className="relative">
            <img
              // src={campaign.image}
              // alt={campaign.title}
              src="src\assets\joel-muniz-qvzjG2pF4bE-unsplash.jpg"
              alt="campaign title"
              className="w-full h-100 object-cover rounded-t-lg"
            />
            <button
              // onClick={handleBack}
              className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>

          {/* Content Section */}
          <div className="p-6">
            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {/* {campaign.title} */}
              Campaign Title
            </h1>

            {/* progress bar */}
            <div className="w-full mt-auto border border-gray-400 rounded-full">
              <div
                className="bg-customLightBlue text-xs font-medium text-gray-600 text-center p-0.5 leading-none rounded-full"
                style={{ width: `70%` }}
              >
                {" "}
                70%
              </div>
            </div>

            {/* collected fund progress */}
            <p className="text-md text-gray-400 mt-2 line-clamp-1">
              <span className="font-bold text-red-900">Rp 50.000</span> dari Rp
              10.000.000
            </p>

            {/* Description */}
            <p className="text-lg text-justify text-gray-600 my-8 leading-relaxed">
              {/* {campaign.description} */}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
              culpa ea molestiae veniam repudiandae aliquam sunt eligendi
              laborum explicabo voluptatum, saepe commodi reiciendis accusamus
              facere debitis quidem rerum eveniet nisi? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Fuga doloremque qui laudantium
              neque at. Culpa dolorem saepe, id voluptatum doloribus
              voluptatibus fugiat natus magnam iusto debitis deserunt architecto
              earum velit. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Doloremque architecto quia ex quaerat nihil tempora
              consequatur, nesciunt odio nostrum, hic in repudiandae? Impedit
              minima consequatur molestias dolorem eveniet quod officia. Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Non vel
              possimus ex reiciendis! Officiis, tempore. Inventore ratione earum
              odio tempora non vitae. Necessitatibus alias magnam, molestiae
              recusandae incidunt minus suscipit.
            </p>
          </div>
        </div>

        {/* Floating Donate Button */}
        <div className="fixed bottom-0 w-full flex justify-center">
          <div className="w-3/5">
            <button className="w-full bg-blue-600 text-white py-4 rounded-t-md shadow-lg text-lg font-semibold hover:bg-blue-700 focus:outline-none">
              Yuk <span className="font-vt323 text-xl">Patungan</span>{" "}
              <span className="material-symbols-outlined text-xs">
                favorite
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CampaignDetailPage;
