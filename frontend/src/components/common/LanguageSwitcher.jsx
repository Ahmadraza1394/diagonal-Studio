import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Professional LanguageSwitcher Component
 *
 * Elegant dropdown language switcher with smooth animations
 * Supports Spanish and English with visual feedback
 * Saves language preference to localStorage
 */

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    // Safe localStorage access
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("i18nLanguage", lang);
      }
    } catch (error) {
      console.warn("Error saving language preference:", error);
    }
    setIsOpen(false);
  };

  const languages = [
    {
      code: "es",
      name: "Español",
      nativeName: "ES",
      fullName: "Spanish",
    },
    {
      code: "en",
      name: "English",
      nativeName: "EN",
      fullName: "English",
    },
  ];

  // SVG Flag Components
  const MexicoFlag = () => (
    <svg viewBox="0 0 24 16" className="w-6 h-4 rounded-sm overflow-hidden">
      <rect width="8" height="16" fill="#006847" />
      <rect x="8" width="8" height="16" fill="#FFFFFF" />
      <rect x="16" width="8" height="16" fill="#CE1126" />
    </svg>
  );

  const USAFlag = () => (
    <svg viewBox="0 0 24 16" className="w-6 h-4 rounded-sm overflow-hidden">
      <rect width="24" height="16" fill="#B22234" />
      <rect y="1.2" width="24" height="1.2" fill="#FFFFFF" />
      <rect y="3.6" width="24" height="1.2" fill="#FFFFFF" />
      <rect y="6" width="24" height="1.2" fill="#FFFFFF" />
      <rect y="8.4" width="24" height="1.2" fill="#FFFFFF" />
      <rect y="10.8" width="24" height="1.2" fill="#FFFFFF" />
      <rect y="13.2" width="24" height="1.2" fill="#FFFFFF" />
      <rect width="10" height="8.4" fill="#3C3B6E" />
    </svg>
  );

  const currentLang = languages.find((l) => l.code === i18n.language);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Professional Language Switcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 px-3 py-2 rounded font-monument text-xs uppercase tracking-wider transition-all duration-300 border border-transparent hover:bg-pantone-2935/10 hover:border-pantone-2935/20"
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <svg
          className="w-4 h-4 transition-colors duration-300 group-hover:text-pantone-2935"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
        <span className="font-semibold group-hover:text-pantone-2935 transition-colors duration-300">
          {currentLang?.nativeName}
        </span>
        <svg
          className={`w-3 h-3 transition-all duration-300 ${
            isOpen ? "rotate-180 text-pantone-2935" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Animated Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 mt-3 w-56 bg-white rounded-lg shadow-2xl border border-gray-100 z-[100] overflow-hidden"
          >
            {/* Dropdown Header */}
            <div className="px-4 py-3 bg-gradient-to-r from-pantone-719/10 to-pantone-2935/10 border-b border-gray-100">
              <p className="text-xs font-monument uppercase tracking-wider text-pantone-black/70">
                Select Language
              </p>
            </div>

            {/* Language Options */}
            <div className="py-1">
              {languages.map((language, index) => (
                <motion.button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`w-full px-4 py-3 text-left font-abc-monument transition-all duration-200 flex items-center gap-3 group ${
                    i18n.language === language.code
                      ? "bg-pantone-2935 text-white"
                      : "text-pantone-black hover:bg-pantone-2935/5"
                  }`}
                >
                  {/* Flag - Using SVG for better display */}
                  <div
                    className={`flex items-center justify-center border ${
                      i18n.language === language.code
                        ? "border-white/30"
                        : "border-pantone-black/10"
                    }`}
                  >
                    {language.code === "es" ? <MexicoFlag /> : <USAFlag />}
                  </div>

                  {/* Language Info */}
                  <div className="flex-1">
                    <div
                      className={`text-sm font-semibold ${
                        i18n.language === language.code
                          ? "text-white"
                          : "text-pantone-black"
                      }`}
                    >
                      {language.name}
                    </div>
                    <div
                      className={`text-xs ${
                        i18n.language === language.code
                          ? "text-white/80"
                          : "text-pantone-black/50"
                      }`}
                    >
                      {language.fullName}
                    </div>
                  </div>

                  {/* Active Indicator */}
                  {i18n.language === language.code && (
                    <motion.svg
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </motion.svg>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
