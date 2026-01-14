import React, { useState } from "react";

export const Navbar: React.FC = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<"en" | "ar">("en");

  return (
    <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full relative z-50">
      <div className="flex items-center gap-2">
        {/* Logo only - text removed */}
        <div className="w-8 h-8 relative">
          <img
            src="/images/logo.svg"
            alt="Setapp Logo"
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-6 ml-auto">
        <div className="hidden lg:flex items-center gap-6">
          <a href="#" className="text-sm font-medium">
            How it works
          </a>
          <a href="#" className="text-sm font-medium">
            All apps
          </a>
          <a href="#" className="text-sm font-medium">
            Pricing
          </a>
          <a href="#" className="text-sm font-medium">
            For Teams
          </a>
          <a href="#" className="text-sm font-medium">
            Blog
          </a>
          <a href="#" className="text-sm font-medium">
            Podcast
          </a>
        </div>

        {/* Vertical Separator */}
        <div className="hidden lg:block w-px h-6 bg-white/20 mx-2"></div>

        {/* Auth Buttons & Lang */}
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 text-sm font-medium transition-colors"
            >
              <img
                src={currentLang === "en" ? "/images/en.svg" : "/images/ar.svg"}
                alt={currentLang}
                className="w-5 h-auto rounded-sm"
              />
            </button>

            {/* Simple Dropdown for Lang */}
            {langOpen && (
              <div className="absolute top-full mt-2 right-0 bg-[#333] border border-white/10 rounded-lg shadow-xl py-1 min-w-25 flex flex-col z-50">
                <button
                  onClick={() => {
                    setCurrentLang("en");
                    setLangOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-white/10 text-left text-sm flex items-center gap-2"
                >
                  <img
                    src="/images/en.svg"
                    alt="English"
                    className="w-5 h-auto rounded-sm"
                  />{" "}
                  English
                </button>
                <button
                  onClick={() => {
                    setCurrentLang("ar");
                    setLangOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-white/10 text-left text-sm flex items-center gap-2"
                >
                  {/* Placeholder for AR flag if not present, but user implied standard flags */}
                  <span className="w-5 h-3 bg-red-white-black inline-block text-[10px] leading-none text-center bg-gray-500 rounded-sm">
                    Eg
                  </span>{" "}
                  Arabic
                </button>
              </div>
            )}
          </div>

          <button className="text-sm font-medium">Sign in</button>
          <button className="bg-transparent border border-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:border-gray-400 transition-colors">
            Try free
          </button>
        </div>
      </div>
    </nav>
  );
};
