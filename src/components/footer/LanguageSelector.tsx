import React, { useState, useRef, useEffect } from "react";

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: "en", name: "English", flag: "/images/en.svg" },
  { code: "ar", name: "Arabic", flag: "/images/ar.svg" },
];

export const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<Language>(languages[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (lang: Language) => {
    setSelectedLang(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer text-sm"
        aria-label="Select language"
      >
        <img
          src={selectedLang.flag}
          alt={selectedLang.name}
          className="w-5 h-5 object-contain"
        />
        <span>{selectedLang.name}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 w-32 bg-[#333] border border-gray-700 rounded shadow-lg overflow-hidden py-1 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang)}
              className={`flex items-center gap-2 w-full px-4 py-2 text-sm text-left hover:bg-gray-700 transition-colors ${
                selectedLang.code === lang.code ? "text-white" : "text-gray-400"
              }`}
            >
              <img
                src={lang.flag}
                alt={lang.name}
                className="w-5 h-5 object-contain"
              />
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
