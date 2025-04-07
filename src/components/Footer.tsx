const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Logo and mission */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 logo-text">ROMULUS</h2>
            <p className="mb-4 text-white/80 text-balance">
              Reviving the dire wolf through cutting-edge de-extinction science.
              Together, we're rewriting natural history and securing a future
              for this iconic apex predator.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              {/* Telegram Icon */}
              <a
                key="telegram"
                href="https://t.me/romulusoneth"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Join us on Telegram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.066-1.225-.346-1.9-.685-1.056-.524-1.651-.818-2.685-1.33-1.188-.589-.42-1.339.258-2.117.177-.204 3.247-2.984 3.307-3.236.007-.024.014-.147-.056-.207-.07-.066-.183-.041-.261-.024-.115.024-1.958 1.25-5.528 3.683-.523.363-1.01.55-1.453.572-.83.04-1.21-.17-1.78-.466-.832-.43-1.455-.648-1.397-1.37.03-.374.29-.715.769-1.028 3.017-2.082 5.019-3.426 6.008-4.116 2.721-1.9 3.296-2.198 3.66-2.198z" />
                </svg>
              </a>

              {/* X (Twitter) Icon */}
              <a
                key="twitter"
                href="https://x.com/romulusonerc20"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Follow us on X (Twitter)"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* TIME Article Link */}
              <a
                key="article"
                href="https://time.com/7274542/colossal-dire-wolf/"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Read TIME article"
                target="_blank"
                rel="noopener noreferrer"
              >
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
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-4 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#" },
                { name: "About", href: "#about" },
                { name: "Wolf Profiles", href: "#wolves" },
                {
                  name: "Telegram",
                  href: "https://t.me/romulusoneth",
                  external: true,
                },
                {
                  name: "X (Twitter)",
                  href: "https://x.com/romulusonerc20",
                  external: true,
                },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors font-medium"
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center sm:flex sm:justify-between sm:text-left px-4">
          <p className="text-white/60 text-sm">
            &copy; {currentYear} Project Romulus. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0">
            <ul className="flex flex-wrap justify-center sm:justify-end space-x-6 text-sm text-white/60">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
