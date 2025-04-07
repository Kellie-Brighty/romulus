import { useState } from "react";

// Import project images
import remusImage from "../assets/extinct-remus.png";
import romulusImage from "../assets/romulus.jpg";

// Temporary placeholder image for Khaleesi until a real asset is provided
const placeholderKhaleesi =
  "https://images.unsplash.com/photo-1588167056547-c733701ecaa1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

// Wolf data
const wolves = [
  {
    id: "romulus",
    name: "Romulus",
    image: romulusImage,
    description:
      "The alpha male and first successfully cloned dire wolf. Romulus exhibits exceptional physical abilities and pack leadership traits. His DNA most closely matches specimens found in the La Brea tar pits.",
    stats: [
      { label: "Age", value: "6 months" },
      { label: "Length", value: "4 ft" },
      { label: "Weight", value: "82 lbs" },
      { label: "Est. Adult Size", value: "6 ft / 150 lbs" },
    ],
  },
  {
    id: "remus",
    name: "Remus",
    image: remusImage,
    description:
      "Brother to Romulus and second in the pack hierarchy. Remus has shown remarkable adaptability and problem-solving abilities. His genetic sequence was modified to enhance cognitive functions.",
    stats: [
      { label: "Age", value: "6 months" },
      { label: "Length", value: "3.8 ft" },
      { label: "Weight", value: "79 lbs" },
      { label: "Est. Adult Size", value: "5.8 ft / 145 lbs" },
    ],
  },
  {
    id: "khaleesi",
    name: "Khaleesi",
    image: placeholderKhaleesi,
    description:
      "The only female in the initial cloning program. Khaleesi possesses unique genetic traits recovered from specimens found in the Yukon. She exhibits exceptional sensory perception and tracking abilities.",
    stats: [
      { label: "Age", value: "6 months" },
      { label: "Length", value: "3.7 ft" },
      { label: "Weight", value: "77 lbs" },
      { label: "Est. Adult Size", value: "5.5 ft / 140 lbs" },
    ],
  },
];

const WolfProfiles = () => {
  const [activeWolf, setActiveWolf] = useState(wolves[0]);

  return (
    <section id="wolves" className="section bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-snow-pattern opacity-20"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet the <span className="text-gradient">Pack</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg mb-6 text-dark text-balance">
            The first dire wolves to walk the Earth in 13,000 years. These
            magnificent creatures represent the pinnacle of de-extinction
            science.
          </p>
        </div>

        {/* Wolf selection buttons - scrollable on mobile */}
        <div className="flex justify-center mb-12 px-4 overflow-x-auto pb-2">
          <div className="inline-flex bg-accent/80 rounded-full p-1 backdrop-blur-sm shadow-md">
            {wolves.map((wolf) => (
              <button
                key={wolf.id}
                onClick={() => setActiveWolf(wolf)}
                className={`px-4 sm:px-6 py-2 rounded-full transition-all whitespace-nowrap min-w-20 ${
                  activeWolf.id === wolf.id
                    ? "bg-primary text-white font-semibold shadow-lg"
                    : "text-dark hover:text-primary font-medium"
                }`}
              >
                {wolf.name}
              </button>
            ))}
          </div>
        </div>

        {/* Wolf profile display */}
        <div className="grid md:grid-cols-2 gap-8 items-center px-4">
          {/* Wolf image */}
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl">
              <img
                src={activeWolf.image}
                alt={activeWolf.name}
                className={`w-full h-full transition-transform hover:scale-105 duration-500 ${
                  activeWolf.id === "romulus"
                    ? "object-contain object-center"
                    : "object-cover"
                }`}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>
          </div>

          {/* Wolf details */}
          <div className="px-2">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">
              {activeWolf.name}
            </h3>
            <p className="mb-8 text-lg text-dark text-balance">
              {activeWolf.description}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {activeWolf.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-accent/40 p-4 rounded-lg shadow-md backdrop-blur-sm"
                >
                  <div className="text-xs uppercase text-dark/60 font-medium tracking-wider">
                    {stat.label}
                  </div>
                  <div className="text-xl font-bold text-primary">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-accent/40 rounded-lg shadow-md">
              <div className="flex items-center text-primary mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-semibold">Scientific Note</span>
              </div>
              <p className="text-sm text-dark/80 text-balance">
                Unlike domesticated dogs, these dire wolves exhibit wild
                behaviors characteristic of their extinct ancestors. They
                maintain distance from humans and display pack dynamics observed
                in wild wolf populations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WolfProfiles;
