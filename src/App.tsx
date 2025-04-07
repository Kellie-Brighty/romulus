import { useState, useEffect } from "react";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WolfProfiles from "./components/WolfProfiles";
import Footer from "./components/Footer";

// Enhanced snow effect component
const SnowBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {Array.from({ length: 70 }).map((_, i) => {
        const size = Math.random() * 6 + 2; // Snowflake size between 2-8px
        const startPositionX = Math.random() * 100; // Random X position
        const startPositionY = Math.random() * -100; // Start above viewport
        const duration = Math.random() * 20 + 10; // Fall duration between 10-30s
        const delay = Math.random() * 15; // Delay start time

        return (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-80"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${startPositionX}%`,
              top: `${startPositionY}%`,
              animation: `snow-fall ${duration}s linear infinite`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
};

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen snow-bg text-dark">
      <SnowBackground />
      <Navbar scrollPosition={scrollPosition} />
      <main className="relative z-10">
        <Hero />
        <About />
        <WolfProfiles />
      </main>
      <Footer />
    </div>
  );
}

export default App;
