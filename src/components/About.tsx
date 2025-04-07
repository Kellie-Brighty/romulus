import writeupImage from "../assets/romulus-writeup.jpg";

const About = () => {
  return (
    <section id="about" className="section snow-bg relative">
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center px-4">
          {/* Image with overlay */}
          <div className="relative rounded-xl overflow-hidden shadow-xl order-2 md:order-1">
            <img
              src={writeupImage}
              alt="Romulus Project Writeup"
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
          </div>

          {/* Text content */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Reviving the <span className="text-gradient">Extinct</span>
            </h2>
            <p className="text-lg mb-6 text-dark text-balance">
              After 13,000 years of extinction, the dire wolf has returned.
              Through groundbreaking advances in ancient DNA recovery and
              gene-editing technology, our team at Colossal Biosciences has
              successfully cloned the first dire wolves.
            </p>
            <p className="text-lg mb-6 text-dark text-balance">
              Using preserved DNA from specimens found in the La Brea tar pits
              and advances in CRISPR technology, we've recreated this
              magnificent Ice Age predator with 99.6% genetic accuracy.
            </p>

            {/* Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-primary text-xl font-bold mb-2">12+</div>
                <div className="text-dark font-medium">
                  Years of Genetic Research
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-primary text-xl font-bold mb-2">99.6%</div>
                <div className="text-dark font-medium">
                  Genetic Match to Ancient DNA
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-primary text-xl font-bold mb-2">3</div>
                <div className="text-dark font-medium">
                  Viable Clones Produced
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-primary text-xl font-bold mb-2">2024</div>
                <div className="text-dark font-medium">
                  Year of First Successful Birth
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 mx-4 max-w-3xl md:mx-auto">
          <p className="text-lg italic text-dark/90 mb-4 text-balance">
            "The successful cloning of the dire wolf represents more than a
            scientific achievement—it's a new chapter in our relationship with
            extinction. What was once permanent can now be reversed."
          </p>
          <div className="flex items-center">
            <div className="h-10 w-1 bg-primary mr-4"></div>
            <div>
              <div className="font-bold text-dark">Dr. Eleanor Saunders</div>
              <div className="text-dark/70 text-sm">
                Lead Geneticist, Colossal Biosciences
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
