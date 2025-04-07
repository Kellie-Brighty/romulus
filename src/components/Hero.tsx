import { useEffect, useState } from "react";

// Import project images from assets
import wolfImage from "../assets/romulus.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const contractAddress = "0x75aba667b46b44a8b635d5729f4050935c997079"; // Actual contract address

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-accent to-white">
      {/* Background image with winter scene - increased opacity */}
      <div className="absolute inset-0 z-0 opacity-50">
        <img
          src="https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Winter landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-accent/30 via-accent/40 to-white/80"></div>
      </div>

      {/* Wolf silhouette - positioned to right side, hidden on very small screens */}
      <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-2/3 md:h-full z-10 overflow-hidden hidden sm:block">
        <img
          src={wolfImage}
          alt="Romulus wolf"
          className="absolute bottom-0 right-0 h-full object-cover object-right animate-float"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent/50 to-transparent"></div>
      </div>

      {/* Main content */}
      <div
        className={`container-custom relative z-20 transform transition-all duration-1000 pt-20 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        <div className="md:max-w-xl md:ml-0 md:text-left text-center px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 logo-text">
            <span className="text-gradient">ROMULUS</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-dark max-w-lg mx-auto md:mx-0 text-balance">
            The resurrection of an apex predator: Colossal scientists have
            successfully de-extinct the dire wolf after 13,000 years
          </p>

          {/* Contract Address Copier */}
          <div className="bg-white/80 rounded-lg p-3 mb-6 shadow-md backdrop-blur-sm max-w-lg mx-auto md:mx-0">
            <div className="text-sm text-dark/70 mb-1 font-medium">
              Contract Address:
            </div>
            <div className="flex items-center">
              <div className="bg-accent/50 rounded py-2 px-3 text-dark font-mono text-sm overflow-hidden overflow-ellipsis flex-1">
                {contractAddress}
              </div>
              <button
                onClick={copyToClipboard}
                className="ml-2 bg-primary hover:bg-primary/90 text-white p-2 rounded-md transition-colors"
                title="Copy to clipboard"
              >
                {copied ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Action buttons and social links */}
          <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center mb-8">
            <a href="#about" className="btn btn-primary">
              Discover the Project
            </a>
            <a href="#wolves" className="btn btn-outline">
              Meet the Pack
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4 justify-center md:justify-start">
            {/* Telegram Icon */}
            <a
              href="https://t.me/romulusoneth"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary/90 hover:bg-primary text-white p-3 rounded-full transition-all hover:scale-110"
              title="Join our Telegram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.066-1.225-.346-1.9-.685-1.056-.524-1.651-.818-2.685-1.33-1.188-.589-.42-1.339.258-2.117.177-.204 3.247-2.984 3.307-3.236.007-.024.014-.147-.056-.207-.07-.066-.183-.041-.261-.024-.115.024-1.958 1.25-5.528 3.683-.523.363-1.01.55-1.453.572-.83.04-1.21-.17-1.78-.466-.832-.43-1.455-.648-1.397-1.37.03-.374.29-.715.769-1.028 3.017-2.082 5.019-3.426 6.008-4.116 2.721-1.9 3.296-2.198 3.66-2.198z" />
              </svg>
            </a>

            {/* X (Twitter) Icon */}
            <a
              href="https://x.com/romulusonerc20"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary/90 hover:bg-primary text-white p-3 rounded-full transition-all hover:scale-110"
              title="Follow us on X (Twitter)"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* TIME Article Link */}
            <a
              href="https://time.com/7274542/colossal-dire-wolf/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary/90 hover:bg-primary text-white p-3 rounded-full transition-all hover:scale-110"
              title="Read TIME article about the project"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-primary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
