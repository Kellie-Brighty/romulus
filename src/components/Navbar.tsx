import { useState, useEffect } from "react";

interface NavbarProps {
  scrollPosition: number;
}

const Navbar = ({}: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Use separate effect to handle scroll with debouncing
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Use requestAnimationFrame for better performance
    let rafId: number;
    const onScroll = () => {
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Close mobile menu on resize above mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-custom py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center justify-start min-w-0 flex-shrink-0"
        >
          <span className="text-2xl font-bold text-gradient logo-text whitespace-nowrap">
            ROMULUS
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <a
            href="#about"
            className="text-dark hover:text-primary transition-colors whitespace-nowrap font-medium"
          >
            About
          </a>
          <a
            href="#wolves"
            className="text-dark hover:text-primary transition-colors whitespace-nowrap font-medium"
          >
            Wolves
          </a>
          <a
            href="https://t.me/romulusoneth"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary py-2 px-4 whitespace-nowrap"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.066-1.225-.346-1.9-.685-1.056-.524-1.651-.818-2.685-1.33-1.188-.589-.42-1.339.258-2.117.177-.204 3.247-2.984 3.307-3.236.007-.024.014-.147-.056-.207-.07-.066-.183-.041-.261-.024-.115.024-1.958 1.25-5.528 3.683-.523.363-1.01.55-1.453.572-.83.04-1.21-.17-1.78-.466-.832-.43-1.455-.648-1.397-1.37.03-.374.29-.715.769-1.028 3.017-2.082 5.019-3.426 6.008-4.116 2.721-1.9 3.296-2.198 3.66-2.198z" />
            </svg>
            Join Telegram
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-primary p-2 rounded-lg"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu - Full screen overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden flex flex-col">
          <div className="container-custom py-4 flex justify-between items-center border-b border-gray-100">
            <a href="#" className="text-2xl font-bold text-gradient logo-text">
              ROMULUS
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-primary"
              aria-label="Close menu"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center space-y-8 text-center">
            <a
              href="#about"
              className="text-xl text-dark hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#wolves"
              className="text-xl text-dark hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Wolves
            </a>
            <a
              href="https://t.me/romulusoneth"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary px-8 py-3 text-lg flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.066-1.225-.346-1.9-.685-1.056-.524-1.651-.818-2.685-1.33-1.188-.589-.42-1.339.258-2.117.177-.204 3.247-2.984 3.307-3.236.007-.024.014-.147-.056-.207-.07-.066-.183-.041-.261-.024-.115.024-1.958 1.25-5.528 3.683-.523.363-1.01.55-1.453.572-.83.04-1.21-.17-1.78-.466-.832-.43-1.455-.648-1.397-1.37.03-.374.29-.715.769-1.028 3.017-2.082 5.019-3.426 6.008-4.116 2.721-1.9 3.296-2.198 3.66-2.198z" />
              </svg>
              Join Telegram
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
